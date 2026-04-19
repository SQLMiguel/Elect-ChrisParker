'use server'

const NOTIFICATION_EMAIL = 'info@electchrisparker.org'

interface EmailNotification {
  subject: string
  formType: string
  fields: Record<string, string | boolean | string[]>
}

function escapeCsvValue(value: string): string {
  const needsQuotes = /[",\n]/.test(value)
  const escaped = value.replace(/"/g, '""')
  return needsQuotes ? `"${escaped}"` : escaped
}

function toCsvLine(values: string[]): string {
  return values.map(escapeCsvValue).join(',')
}

function buildSubmissionCsv(formType: string, fields: Record<string, string | boolean | string[]>): string {
  const normalized = Object.entries(fields).map(([key, value]) => {
    const displayValue = Array.isArray(value) ? value.join('; ') : String(value)
    return [key, displayValue] as const
  })

  const headers = ['Timestamp', 'Form Type', ...normalized.map(([key]) => key)]
  const row = [new Date().toISOString(), formType, ...normalized.map(([, value]) => value)]

  return `${toCsvLine(headers)}\n${toCsvLine(row)}\n`
}

export async function sendFormNotification({ subject, formType, fields }: EmailNotification) {
  const rows = Object.entries(fields)
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())
      const displayValue = Array.isArray(value) ? value.join(', ') : String(value)
      return `<tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:600;">${label}</td><td style="padding:8px 12px;border:1px solid #ddd;">${displayValue}</td></tr>`
    })
    .join('')

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1a365d;">New ${formType} Submission</h2>
      <p>A new form submission was received from the campaign website.</p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        ${rows}
      </table>
      <p style="color:#666;font-size:12px;">This is an automated notification from electchrisparker.org</p>
    </div>
  `

  const plainText = Object.entries(fields)
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())
      const displayValue = Array.isArray(value) ? value.join(', ') : String(value)
      return `${label}: ${displayValue}`
    })
    .join('\n')

  const csvContent = buildSubmissionCsv(formType, fields)
  const csvBase64 = Buffer.from(csvContent, 'utf-8').toString('base64')
  const csvFileName = `${formType.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-submission.csv`

  // Use Supabase Edge Function or any email provider.
  // For now, use the Supabase built-in email via the REST API with a database function,
  // or integrate with Resend/SendGrid/etc.
  // Below is a Resend-compatible implementation. Set RESEND_API_KEY in your .env.
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[Email Notification] RESEND_API_KEY not set. Email not sent. Subject:', subject)
    console.log('[Email Notification] Would have sent to:', NOTIFICATION_EMAIL)
    console.log('[Email Notification] Content:', plainText)
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Campaign Website <notifications@electchrisparker.org>',
        to: [NOTIFICATION_EMAIL],
        subject,
        html,
        text: `New ${formType} Submission\n\n${plainText}`,
        attachments: [
          {
            filename: csvFileName,
            content: csvBase64,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('[Email Notification] Failed:', errorData)
      return { success: false, error: 'Failed to send email notification' }
    }

    return { success: true }
  } catch (error) {
    console.error('[Email Notification] Error:', error)
    return { success: false, error: String(error) }
  }
}

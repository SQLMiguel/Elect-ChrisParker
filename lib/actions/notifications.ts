'use server'

import nodemailer from 'nodemailer'

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@electchrisparker.org'
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = Number(process.env.SMTP_PORT || 587)
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const SMTP_FROM = process.env.SMTP_FROM || `Campaign Website <${SMTP_USER || NOTIFICATION_EMAIL}>`
const SMTP_SECURE = process.env.SMTP_SECURE === 'true' || SMTP_PORT === 465

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
  const csvFileName = `${formType.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-submission.csv`

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn('[Email Notification] SMTP environment variables not configured. Subject:', subject)
    console.log('[Email Notification] Would have sent to:', NOTIFICATION_EMAIL)
    console.log('[Email Notification] Content:', plainText)
    return { success: false, error: 'SMTP email service not configured' }
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: NOTIFICATION_EMAIL,
      subject,
      text: `New ${formType} Submission\n\n${plainText}`,
      html,
      attachments: [
        {
          filename: csvFileName,
          content: csvContent,
          contentType: 'text/csv',
        },
      ],
    })

    return { success: true }
  } catch (error) {
    console.error('[Email Notification] SMTP send failed:', error)
    return { success: false, error: String(error) }
  }
}

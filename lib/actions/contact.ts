'use server'

import { sendFormNotification } from './notifications'

export async function submitContactMessage(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}) {
  try {
    const emailResult = await sendFormNotification({
      subject: `New Contact Message: ${formData.subject} — ${formData.firstName} ${formData.lastName}`,
      formType: 'Contact Form',
      fields: {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        'Email': formData.email,
        'Phone': formData.phone,
        'Subject': formData.subject,
        'Message': formData.message,
      },
    })

    if (!emailResult.success) {
      console.error('[Contact] Email notification failed:', emailResult.error)
      return { success: false, error: emailResult.error || 'Email notification failed' }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: String(error) }
  }
}

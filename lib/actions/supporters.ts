'use server'

import { sendFormNotification } from './notifications'

const FORM_SUBMISSION_ERROR =
  'We could not send your signup right now. Please email info@electchrisparker.org directly.'

export async function subscribeSupporters(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  zipCode: string
  smsOptIn: boolean
  emailOptIn: boolean
}) {
  try {
    const emailResult = await sendFormNotification({
      subject: `New Supporter Signup: ${formData.firstName} ${formData.lastName}`,
      formType: 'Campaign Updates Signup',
      fields: {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        'Email': formData.email,
        'Phone': formData.phone,
        'ZIP Code': formData.zipCode,
        'SMS Opt-In': formData.smsOptIn,
        'Email Opt-In': formData.emailOptIn,
      },
    })

    if (!emailResult.success) {
      console.error('[Supporters] Email notification failed:', emailResult.error)
      return { success: false, error: emailResult.error || 'Email notification failed' }
    }

    return { success: true }
  } catch (error) {
    console.error('[Supporters] Unexpected signup failure:', error)
    return { success: false, error: FORM_SUBMISSION_ERROR }
  }
}

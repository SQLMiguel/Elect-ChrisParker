'use server'

import { sendFormNotification } from './notifications'

export async function submitVolunteer(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  volunteerOptions: string[]
  comments: string
}) {
  try {
    const emailResult = await sendFormNotification({
      subject: `New Volunteer Signup: ${formData.firstName} ${formData.lastName}`,
      formType: 'Volunteer Signup',
      fields: {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        'Email': formData.email,
        'Phone': formData.phone,
        'Address': formData.address,
        'City': formData.city,
        'State': formData.state,
        'ZIP': formData.zip,
        'Volunteer Interests': formData.volunteerOptions,
        'Comments': formData.comments,
      },
    })

    if (!emailResult.success) {
      console.error('[Volunteer] Email notification failed:', emailResult.error)
      return { success: false, error: emailResult.error || 'Email notification failed' }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: String(error) }
  }
}

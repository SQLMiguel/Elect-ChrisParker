'use server'

import { createClient } from '@/lib/supabase/server'
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
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      ])
      .select()

    if (error) {
      return { success: false, error: error.message }
    }

    // Send email notification (non-blocking)
    sendFormNotification({
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
    }).catch(console.error)

    return { success: true, data }
  } catch (error) {
    return { success: false, error: String(error) }
  }
}

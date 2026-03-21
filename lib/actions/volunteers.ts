'use server'

import { createClient } from '@/lib/supabase/server'
import { sendFormNotification } from './notifications'
import { addToConstantContact } from './constant-contact'

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
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('volunteers')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          volunteer_options: formData.volunteerOptions,
          comments: formData.comments,
        },
      ])
      .select()

    if (error) {
      return { success: false, error: error.message }
    }

    // Send email notification (non-blocking)
    sendFormNotification({
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
    }).catch(console.error)

    // Add volunteer to Constant Contact mailing list (non-blocking)
    addToConstantContact({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      zipCode: formData.zip,
    }).catch(console.error)

    return { success: true, data }
  } catch (error) {
    return { success: false, error: String(error) }
  }
}

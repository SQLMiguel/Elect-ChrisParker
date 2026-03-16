'use server'

import { createClient } from '@/lib/supabase/server'

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
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('supporters')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          zip_code: formData.zipCode,
          sms_opt_in: formData.smsOptIn,
          email_opt_in: formData.emailOptIn,
          subscribed_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return { success: false, error: String(error) }
  }
}

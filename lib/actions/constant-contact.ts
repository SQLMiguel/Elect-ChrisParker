'use server'

/**
 * Constant Contact V3 API integration.
 *
 * Required environment variables (add to .env.local):
 *   CONSTANT_CONTACT_API_KEY       - Your API key from the Constant Contact developer portal
 *   CONSTANT_CONTACT_ACCESS_TOKEN  - OAuth2 access token (long-lived or refreshed)
 *   CONSTANT_CONTACT_LIST_ID       - The UUID of the contact list to add subscribers to
 */

const API_BASE = 'https://api.cc.email/v3'

interface ConstantContactPayload {
  firstName: string
  lastName: string
  email: string
  phone?: string
  zipCode?: string
  smsOptIn?: boolean
}

/**
 * Add or update a contact in Constant Contact and subscribe them to the
 * configured mailing list.
 *
 * Uses the "Sign-up Form" endpoint (POST /contacts/sign_up_form) which is
 * specifically designed for website signups — it creates the contact if new
 * or updates the existing contact, and adds them to the specified list.
 *
 * Returns { success: true } on success, or { success: false, error } on failure.
 * Gracefully degrades if environment variables are not yet configured.
 */
export async function addToConstantContact(data: ConstantContactPayload): Promise<{
  success: boolean
  error?: string
}> {
  const apiKey = process.env.CONSTANT_CONTACT_API_KEY
  const accessToken = process.env.CONSTANT_CONTACT_ACCESS_TOKEN
  const listId = process.env.CONSTANT_CONTACT_LIST_ID

  // Graceful degradation — log a warning instead of failing if not configured yet
  if (!apiKey || !accessToken || !listId) {
    console.warn(
      '[Constant Contact] Integration not configured. Set CONSTANT_CONTACT_API_KEY, ' +
      'CONSTANT_CONTACT_ACCESS_TOKEN, and CONSTANT_CONTACT_LIST_ID in .env.local'
    )
    return { success: true } // Don't block the form submission
  }

  try {
    // Build the contact payload for the sign-up form endpoint
    const body = {
      email_address: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      list_memberships: [listId],
      phone_numbers: data.phone
        ? [{ phone_number: data.phone, kind: 'home' }]
        : [],
      street_addresses: data.zipCode
        ? [{ postal_code: data.zipCode, kind: 'home' }]
        : [],
    }

    const response = await fetch(`${API_BASE}/contacts/sign_up_form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('[Constant Contact] API error:', response.status, errorBody)
      return {
        success: false,
        error: `Constant Contact API error: ${response.status}`,
      }
    }

    return { success: true }
  } catch (err) {
    console.error('[Constant Contact] Request failed:', err)
    return { success: false, error: String(err) }
  }
}

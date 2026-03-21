/**
 * Client-side validation and formatting utilities for form inputs.
 */

/** Strip all non-digit characters from a string. */
export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "")
}

/**
 * Format a phone number as (XXX) XXX-XXXX while the user types.
 * Accepts any string and returns only the formatted portion.
 */
export function formatPhoneNumber(value: string): string {
  const digits = digitsOnly(value).slice(0, 10)
  if (digits.length === 0) return ""
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

/**
 * Returns true if the value contains exactly 10 US digits.
 * Empty strings are considered valid (field is optional in most forms).
 */
export function isValidPhone(value: string): boolean {
  if (!value.trim()) return true // empty is ok for optional fields
  return digitsOnly(value).length === 10
}

/**
 * Validate an email address using a robust pattern.
 * Empty strings are considered valid (call site should handle required separately).
 */
export function isValidEmail(value: string): boolean {
  if (!value.trim()) return true
  // Standard email pattern — intentionally permissive for real-world addresses
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}

/** Validate a US ZIP code (5 digits or 5+4). */
export function isValidZip(value: string): boolean {
  if (!value.trim()) return true
  return /^\d{5}(-\d{4})?$/.test(value.trim())
}

/** Format a ZIP code — allow only digits and a single dash. */
export function formatZipCode(value: string): string {
  const clean = value.replace(/[^\d-]/g, "")
  // Only allow one dash, and only after 5 digits
  const digits = digitsOnly(clean).slice(0, 9)
  if (digits.length <= 5) return digits
  return `${digits.slice(0, 5)}-${digits.slice(5)}`
}

/** Validation error message helpers */
export function phoneErrorMessage(value: string): string | null {
  if (!value.trim()) return null
  if (digitsOnly(value).length < 10) return "Please enter a complete 10-digit phone number"
  if (digitsOnly(value).length > 10) return "Phone number must be 10 digits"
  return null
}

export function emailErrorMessage(value: string): string | null {
  if (!value.trim()) return null
  if (!isValidEmail(value)) return "Please enter a valid email address"
  return null
}

export function zipErrorMessage(value: string): string | null {
  if (!value.trim()) return null
  if (!isValidZip(value)) return "Please enter a valid ZIP code (e.g. 27040)"
  return null
}

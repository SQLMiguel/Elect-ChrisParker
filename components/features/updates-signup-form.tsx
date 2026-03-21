'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { subscribeSupporters } from '@/lib/actions/supporters'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import {
  formatPhoneNumber,
  isValidPhone,
  isValidEmail,
  isValidZip,
  formatZipCode,
  phoneErrorMessage,
  emailErrorMessage,
  zipErrorMessage,
} from '@/lib/validation'

export function UpdatesSignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    smsOptIn: true,
    emailOptIn: true,
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await subscribeSupporters(formData)

      if (result.success) {
        setSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          zipCode: '',
          smsOptIn: true,
          emailOptIn: true,
        })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(result.error || 'Failed to subscribe. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBlur = useCallback((field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }, [])

  const handlePhoneChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(value) }))
  }, [])

  const handleZipChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, zipCode: formatZipCode(value) }))
  }, [])

  const phoneError = touched.phone ? phoneErrorMessage(formData.phone) : null
  const emailError = touched.email ? emailErrorMessage(formData.email) : null
  const zipError = touched.zipCode ? zipErrorMessage(formData.zipCode) : null

  const isFormValid =
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    isValidEmail(formData.email) &&
    isValidPhone(formData.phone) &&
    isValidZip(formData.zipCode)

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-green-900">Thank you!</h3>
            <p className="text-sm text-green-700">You've been added to our supporter list. Watch for campaign updates!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 flex items-start gap-2">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <Input
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
          disabled={isLoading}
        />
        <Input
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
          disabled={isLoading}
        />
      </div>

      <Input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        onBlur={() => handleBlur('email')}
        required
        disabled={isLoading}
        className={emailError ? 'border-red-500 focus:ring-red-500' : ''}
      />
      {emailError && <p className="text-xs text-red-600">{emailError}</p>}

      <div>
        <Input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          onBlur={() => handleBlur('phone')}
          disabled={isLoading}
          className={phoneError ? 'border-red-500 focus:ring-red-500' : ''}
        />
        {phoneError && <p className="text-xs text-red-600">{phoneError}</p>}
      </div>

      <div>
        <Input
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={(e) => handleZipChange(e.target.value)}
          onBlur={() => handleBlur('zipCode')}
          disabled={isLoading}
          className={zipError ? 'border-red-500 focus:ring-red-500' : ''}
        />
        {zipError && <p className="text-xs text-red-600">{zipError}</p>}
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="sms-opt-in"
            checked={formData.smsOptIn}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, smsOptIn: checked as boolean })
            }
            disabled={isLoading}
          />
          <label
            htmlFor="sms-opt-in"
            className="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Yes, send me SMS campaign updates
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="email-opt-in"
            checked={formData.emailOptIn}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, emailOptIn: checked as boolean })
            }
            disabled={isLoading}
          />
          <label
            htmlFor="email-opt-in"
            className="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Yes, send me email campaign updates
          </label>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading || !isFormValid}
      >
        {isLoading ? 'Subscribing...' : 'Sign Up for Updates'}
      </Button>

      <p className="text-xs text-center opacity-70">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}

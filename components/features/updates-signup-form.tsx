'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { subscribeSupporters } from '@/lib/actions/supporters'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export function UpdatesSignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
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
        required
        disabled={isLoading}
      />

      <Input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        disabled={isLoading}
      />

      <Input
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
        disabled={isLoading}
      />

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
        disabled={isLoading}
      >
        {isLoading ? 'Subscribing...' : 'Sign Up for Updates'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}

"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle } from "lucide-react"
import { submitContactMessage } from "@/lib/actions/contact"
import {
  formatPhoneNumber,
  isValidPhone,
  isValidEmail,
  phoneErrorMessage,
  emailErrorMessage,
} from "@/lib/validation"

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "volunteer", label: "Volunteering" },
  { value: "donation", label: "Donation Question" },
  { value: "event", label: "Event Request" },
  { value: "media", label: "Media/Press Inquiry" },
  { value: "endorsement", label: "Endorsement" },
  { value: "other", label: "Other" },
]

const CONTACT_FORM_ERROR =
  'We could not send your message right now. Please email info@electchrisparker.org directly.'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleBlur = useCallback((field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }, [])

  const handlePhoneChange = useCallback((value: string) => {
    setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(value) }))
  }, [])

  const phoneError = touched.phone ? phoneErrorMessage(formData.phone) : null
  const emailError = touched.email ? emailErrorMessage(formData.email) : null

  const isFormValid =
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    isValidEmail(formData.email) &&
    isValidPhone(formData.phone) &&
    formData.subject !== '' &&
    formData.message.trim() !== ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await submitContactMessage(formData)

      if (result.success) {
        setSubmitted(true)
        setFormData({
          firstName: '', lastName: '', email: '',
          phone: '', subject: '', message: '',
        })
      } else {
        setError(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('[ContactForm] Submit failed:', error)
      setError(CONTACT_FORM_ERROR)
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. A member of our team will respond to your 
          message as soon as possible.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">Send a Message</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill out the form below and we will get back to you as soon as possible.
      </p>

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 flex items-start gap-2">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="contact-firstName">First Name *</Label>
            <Input id="contact-firstName" name="firstName" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-lastName">Last Name *</Label>
            <Input id="contact-lastName" name="lastName" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} disabled={isLoading} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email Address *</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => handleBlur('email')}
            disabled={isLoading}
            className={emailError ? 'border-red-500 focus:ring-red-500' : ''}
          />
          {emailError && <p className="text-xs text-red-600">{emailError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone Number</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            onBlur={() => handleBlur('phone')}
            disabled={isLoading}
            placeholder="(336) 555-1234"
            className={phoneError ? 'border-red-500 focus:ring-red-500' : ''}
          />
          {phoneError && <p className="text-xs text-red-600">{phoneError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-subject">Subject *</Label>
          <select
            id="contact-subject"
            name="subject"
            aria-label="Contact message subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            disabled={isLoading}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">Message *</Label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isLoading}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="How can we help you?"
          />
        </div>
      </div>

      <Button type="submit" className="mt-6 w-full" disabled={isLoading || !isFormValid}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

'use client'

import { useState } from 'react'

const CONTACT_EMAIL = 'info@cogni-space.com'

const fieldClass =
  'w-full rounded-md border border-input bg-background/60 px-3 py-2 text-[0.8rem] text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/50'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const body = `Name: ${name}\nEmail: ${email}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || 'Hello Cognispace')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <p role="status" className="mt-3 text-[0.8rem] text-primary">
        Thank you for your interest. We will contact you shortly.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 grid gap-2 sm:grid-cols-2">
      <label className="sr-only" htmlFor="contact-name">
        Name
      </label>
      <input id="contact-name" name="name" required placeholder="Name" autoComplete="name" className={fieldClass} />
      <label className="sr-only" htmlFor="contact-email">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        required
        placeholder="Email"
        autoComplete="email"
        className={fieldClass}
      />
      <label className="sr-only" htmlFor="contact-subject">
        Subject
      </label>
      <input id="contact-subject" name="subject" placeholder="Subject" className={`${fieldClass} sm:col-span-2`} />
      <div className="flex items-center justify-between gap-3 sm:col-span-2">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[0.75rem] text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
        <button
          type="submit"
          className="rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-[0.8rem] font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {'Submit →'}
        </button>
      </div>
    </form>
  )
}

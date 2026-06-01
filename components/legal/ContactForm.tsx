"use client";

import { useState, type FormEvent } from "react";
import {
  Field,
  TextAreaInput,
  TextInput,
  fieldDescribedBy,
} from "@/components/ui/Field";
import { SUPPORT_EMAIL } from "@/lib/config/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!isValidEmail(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (!form.message.trim()) next.message = "Please enter your message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-8 text-center"
        role="status"
      >
        <p className="text-lg font-semibold text-emerald-400">Message received</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Thank you for reaching out. This form does not transmit data to our
          servers. For urgent matters, email us directly at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-emerald-400 underline-offset-2 hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <Field
        label="Your name"
        htmlFor="contact-name"
        required
        error={errors.name}
      >
        <TextInput
          id="contact-name"
          value={form.name}
          onChange={(value) => setForm((f) => ({ ...f, name: value }))}
          hasError={Boolean(errors.name)}
          required
          describedBy={fieldDescribedBy("contact-name", errors.name)}
          autoComplete="name"
          maxLength={120}
        />
      </Field>

      <Field
        label="Email address"
        htmlFor="contact-email"
        required
        error={errors.email}
        hint="We use this only to respond to your inquiry."
      >
        <TextInput
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(value) => setForm((f) => ({ ...f, email: value }))}
          hasError={Boolean(errors.email)}
          required
          describedBy={fieldDescribedBy(
            "contact-email",
            errors.email,
            "We use this only to respond to your inquiry."
          )}
          autoComplete="email"
          maxLength={254}
        />
      </Field>

      <Field
        label="Subject"
        htmlFor="contact-subject"
        required
        error={errors.subject}
      >
        <TextInput
          id="contact-subject"
          value={form.subject}
          onChange={(value) => setForm((f) => ({ ...f, subject: value }))}
          hasError={Boolean(errors.subject)}
          required
          describedBy={fieldDescribedBy("contact-subject", errors.subject)}
          maxLength={200}
        />
      </Field>

      <Field
        label="Message"
        htmlFor="contact-message"
        required
        error={errors.message}
        hint="Do not include HOA wizard details or sensitive financial information."
      >
        <TextAreaInput
          id="contact-message"
          rows={6}
          value={form.message}
          onChange={(value) => setForm((f) => ({ ...f, message: value }))}
          hasError={Boolean(errors.message)}
          describedBy={fieldDescribedBy(
            "contact-message",
            errors.message,
            "Do not include HOA wizard details or sensitive financial information."
          )}
          maxLength={5000}
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto sm:px-8"
      >
        Send message
      </button>
    </form>
  );
}

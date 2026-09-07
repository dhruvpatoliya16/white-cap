import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

const initialForm: FormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  product: '',
  message: '',
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.companyName.trim()) errors.companyName = 'Company name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[+]?[\d\s\-().]{7,20}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.message.trim()) errors.message = 'Message / requirement is required.';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Frontend-only: show success state
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="card text-center py-14 px-8">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-green-100 rounded-full">
            <CheckCircle size={36} className="text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">Enquiry Submitted!</h3>
        <p className="text-neutral-500 text-sm max-w-xs mx-auto mb-6">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary text-sm mx-auto"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const Field = ({
    id,
    label,
    required = true,
    children,
  }: {
    id: keyof FormData;
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }) => (
    <div>
      <label htmlFor={id} className="label">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {errors[id] && (
        <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle size={12} aria-hidden="true" />
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="fullName" label="Full Name">
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Rajesh Sharma"
            className={`input-field ${errors.fullName ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            autoComplete="name"
          />
        </Field>

        <Field id="companyName" label="Company Name">
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Pharma Pvt. Ltd."
            className={`input-field ${errors.companyName ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
            aria-invalid={!!errors.companyName}
            autoComplete="organization"
          />
        </Field>

        <Field id="email" label="Email Address">
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="contact@company.com"
            className={`input-field ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
        </Field>

        <Field id="phone" label="Phone Number">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98000 00000"
            className={`input-field ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
            aria-invalid={!!errors.phone}
            autoComplete="tel"
          />
        </Field>

        <div className="sm:col-span-2">
          <Field id="product" label="Product / Requirement" required={false}>
            <input
              id="product"
              name="product"
              type="text"
              value={form.product}
              onChange={handleChange}
              placeholder="e.g. Magnesium Stearate, Citric Acid Anhydrous…"
              className="input-field"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field id="message" label="Message">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Please describe your requirement, quantities, and any specific quality standards…"
              className={`input-field resize-none ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
              aria-invalid={!!errors.message}
            />
          </Field>
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn-primary w-full sm:w-auto justify-center px-8 py-3.5">
          Submit Enquiry
        </button>
        <p className="mt-3 text-xs text-neutral-400">
          * Required fields. We'll respond within 1–2 business days.
        </p>
      </div>
    </form>
  );
}

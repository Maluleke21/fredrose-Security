import { useState, type FormEvent } from 'react';

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  property: string;
  message: string;
}

const EMPTY: FormState = { name: '', phone: '', email: '', service: '', property: '', message: '' };

const SERVICES = ['Guarding', 'Armed Response', 'Electric Fencing', 'Alarm Systems', 'CCTV Cameras', 'Motor Gates', 'Security System Installation'];
const PROPERTY_TYPES = ['Residential', 'Commercial', 'Other'];

const VALIDATORS: Record<keyof FormState, (v: string) => boolean> = {
  name: (v) => v.trim().length > 1,
  phone: (v) => /^[0-9+\s()-]{7,}$/.test(v.trim()),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  service: (v) => v.trim().length > 0,
  property: (v) => v.trim().length > 0,
  message: (v) => v.trim().length > 4,
};

const ERROR_MESSAGES: Record<keyof FormState, string> = {
  name: 'Please enter your name.',
  phone: 'Please enter a valid phone number.',
  email: 'Please enter a valid email address.',
  service: 'Please select a service.',
  property: 'Please select a property type.',
  message: 'Please add a short message.',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [success, setSuccess] = useState(false);

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};
    let valid = true;
    (Object.keys(VALIDATORS) as (keyof FormState)[]).forEach((field) => {
      const ok = VALIDATORS[field](form[field]);
      nextErrors[field] = !ok;
      if (!ok) valid = false;
    });
    setErrors(nextErrors);
    setSuccess(valid);
  };

  return (
    <section className="section-dark" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Get In Touch</span>
          <h2 style={{ marginTop: '14px', marginBottom: '6px' }}>Request a Security Assessment</h2>
          <p style={{ color: 'var(--grey)', fontSize: '14.5px', lineHeight: 1.65, marginBottom: '10px' }}>
            Tell us about your property and one of our team will follow up. For emergencies, call directly.
          </p>

          <div className="ci-block">
            <div className="ci-label">Company</div>
            <div className="ci-value">Fredrose Security Services</div>
          </div>
          <div className="ci-block">
            <div className="ci-label">Address</div>
            <div className="ci-value">922A Malamulele</div>
          </div>
          <div className="ci-block">
            <div className="ci-label">Telephone</div>
            <div className="ci-value">
              <a href="tel:0152800343">015 280 0343</a>
            </div>
          </div>
          <div className="ci-block">
            <div className="ci-label">Cell</div>
            <div className="ci-value">
              <a href="tel:0740971465">074 097 1465</a>
            </div>
          </div>
          <div className="ci-block">
            <div className="ci-label">Email</div>
            <div className="ci-value">
              <a href="mailto:fredrosebe@gmail.com">fredrosebe@gmail.com</a>
            </div>
          </div>

          <div className="contact-quickactions">
            <a href="tel:0152800343" className="btn btn-outline" style={{ padding: '12px 20px', fontSize: '12px' }}>
              Call Now
            </a>
            <a href="mailto:fredrosebe@gmail.com" className="btn btn-outline" style={{ padding: '12px 20px', fontSize: '12px' }}>
              Email Us
            </a>
          </div>
        </div>

        <div>
          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`form-field${errors.name ? ' error' : ''}`}>
                <label htmlFor="fName">Full Name</label>
                <input type="text" id="fName" placeholder="Your full name" value={form.name} onChange={update('name')} />
                <span className="err-msg">{ERROR_MESSAGES.name}</span>
              </div>
              <div className={`form-field${errors.phone ? ' error' : ''}`}>
                <label htmlFor="fPhone">Phone Number</label>
                <input type="tel" id="fPhone" placeholder="074 000 0000" value={form.phone} onChange={update('phone')} />
                <span className="err-msg">{ERROR_MESSAGES.phone}</span>
              </div>
            </div>
            <div className="form-row">
              <div className={`form-field${errors.email ? ' error' : ''}`}>
                <label htmlFor="fEmail">Email</label>
                <input type="email" id="fEmail" placeholder="you@example.com" value={form.email} onChange={update('email')} />
                <span className="err-msg">{ERROR_MESSAGES.email}</span>
              </div>
              <div className={`form-field${errors.service ? ' error' : ''}`}>
                <label htmlFor="fService">Service Required</label>
                <select id="fService" value={form.service} onChange={update('service')}>
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <span className="err-msg">{ERROR_MESSAGES.service}</span>
              </div>
            </div>
            <div className={`form-field${errors.property ? ' error' : ''}`}>
              <label htmlFor="fProperty">Property Type</label>
              <select id="fProperty" value={form.property} onChange={update('property')}>
                <option value="">Select property type</option>
                {PROPERTY_TYPES.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <span className="err-msg">{ERROR_MESSAGES.property}</span>
            </div>
            <div className={`form-field${errors.message ? ' error' : ''}`}>
              <label htmlFor="fMessage">Message</label>
              <textarea
                id="fMessage"
                rows={4}
                placeholder="Tell us about your property and security needs"
                value={form.message}
                onChange={update('message')}
              ></textarea>
              <span className="err-msg">{ERROR_MESSAGES.message}</span>
            </div>
            <div className="form-submit-row">
              <button type="submit" className="btn btn-outline-dark">
                Request a Security Assessment
              </button>
              <p className="form-note">This is a design prototype — the form does not send data yet.</p>
            </div>
            <div className={`form-success${success ? ' show' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="M22 4 12 14.01l-3-3" />
              </svg>
              <div>
                <strong>Request captured (prototype)</strong>
                <p>In the live site this would be sent to Fredrose Security Services. For urgent matters, please call 015 280 0343.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

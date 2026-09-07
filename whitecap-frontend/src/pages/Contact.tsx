import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin, Phone, User, ExternalLink } from 'lucide-react';

const contactPersons = [
  { name: 'Pratik Jhaveri', phone: '+91 98258 41566', raw: '9825841566' },
  { name: 'Ankit Patoliya', phone: '+91 89055 03138', raw: '8905503138' },
];

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | White Capsule';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content',
        'Contact White Capsule for pharmaceutical and nutraceutical raw material enquiries. Reach us in Ahmedabad, Gujarat.'
      );
    }
  }, []);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-brand-950 to-brand-900 pt-40 pb-24"
        aria-labelledby="contact-hero-heading"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
          <div className="absolute -bottom-1/4 right-0 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl" />
        </div>
        <div className="container-xl relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-300 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-100">Contact Us</span>
          </nav>
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold text-brand-300 uppercase tracking-[0.15em] mb-4">
              Get In Touch
            </span>
            <h1 id="contact-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Contact Us
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed">
              Reach out to discuss your pharmaceutical or nutraceutical raw-material sourcing
              requirements. Our team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section-py bg-white" aria-label="Contact information and form">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* LEFT — Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Email */}
              <div className="card border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-brand-100 rounded-lg text-brand-700">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <h2 className="text-base font-bold text-neutral-900">Email</h2>
                </div>
                <a
                  href="mailto:info@whitecapsule.in"
                  className="text-brand-700 font-medium text-sm hover:underline"
                >
                  info@whitecapsule.in
                </a>
              </div>

              {/* Website */}
              <div className="card border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-brand-100 rounded-lg text-brand-700">
                    <Globe size={20} aria-hidden="true" />
                  </div>
                  <h2 className="text-base font-bold text-neutral-900">Website</h2>
                </div>
                <a
                  href="http://www.whitecapsule.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-700 font-medium text-sm hover:underline"
                >
                  www.whitecapsule.in
                </a>
              </div>

              {/* Contact Persons */}
              <div className="card border-neutral-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-brand-100 rounded-lg text-brand-700">
                    <User size={20} aria-hidden="true" />
                  </div>
                  <h2 className="text-base font-bold text-neutral-900">Contact Persons</h2>
                </div>
                <div className="space-y-5">
                  {contactPersons.map(({ name, phone, raw }) => (
                    <div key={name} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 text-sm font-bold shrink-0">
                        {name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">{name}</div>
                        <a
                          href={`tel:+91${raw}`}
                          className="flex items-center gap-1.5 text-sm text-brand-600 hover:underline mt-0.5"
                        >
                          <Phone size={13} aria-hidden="true" />
                          {phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registered Address */}
              <div className="card border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-brand-100 rounded-lg text-brand-700">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <h2 className="text-base font-bold text-neutral-900">Registered Address</h2>
                </div>
                <address className="text-sm text-neutral-600 not-italic leading-relaxed">
                  D-705, Signature-2 Business Park,<br />
                  Sanand Cross Road, Sarkhej,<br />
                  Ahmedabad, Gujarat, India – 382210
                </address>
              </div>

              {/* Correspondence Address */}
              <div className="card border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-neutral-100 rounded-lg text-neutral-600">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <h2 className="text-base font-bold text-neutral-900">Correspondence Address</h2>
                </div>
                <address className="text-sm text-neutral-600 not-italic leading-relaxed">
                  9, Sanidhya Bunglows,<br />
                  Nr. Bileshwar Mahadev Temple,<br />
                  Jodhpur Gam Road, Satellite,<br />
                  Ahmedabad – 380015
                </address>
              </div>
            </div>

            {/* RIGHT — Google Form Embed & Direct Button */}
            <div className="lg:col-span-3">
              <div className="card border-neutral-200 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-200">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-1">Send an Enquiry</h2>
                    <p className="text-sm text-neutral-500">
                      Fill out our enquiry form below or open it directly in Google Forms.
                    </p>
                  </div>
                  <a
                    href="https://forms.gle/4jY6NfWZ1RfJkg266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors shrink-0 shadow-sm"
                  >
                    Open Form in New Tab
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Google Form Embedded Iframe */}
                <div className="w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdQzIPjMqBSNgcXhIZ0ipnDWb-FPkgCQLVmrwHoI4Jc9MsyUQ/viewform?embedded=true"
                    width="100%"
                    height="900"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full border-0 min-h-[750px]"
                    title="White Capsule Contact Form"
                  >
                    Loading form...
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

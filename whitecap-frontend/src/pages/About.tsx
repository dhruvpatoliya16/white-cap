import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pill, FlaskConical, Atom, MapPin, ShieldCheck, Truck } from 'lucide-react';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  useEffect(() => {
    document.title = 'About Us | White Capsule';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content',
        'Learn about White Capsule — a B2B supplier and distributor of pharmaceutical and nutraceutical raw materials founded in 2019, headquartered in Ahmedabad, Gujarat.'
      );
    }
  }, []);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-brand-950 to-brand-900 pt-40 pb-24"
        aria-labelledby="about-hero-heading"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl" />
        </div>
        <div className="container-xl relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-300 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-100">About Us</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold text-brand-300 uppercase tracking-[0.15em] mb-4">
              About White Capsule
            </span>
            <h1 id="about-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Reliable Pharmaceutical<br />Raw-Material Sourcing
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed max-w-2xl">
              A B2B supplier and distributor bridging raw ingredient producers with finished
              formulation manufacturers through supply chain reliability and quality compliance.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="section-py bg-white" aria-labelledby="overview-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Company Overview"
                title="Who We Are"
                align="left"
                className="mb-8"
              />
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p>
                  White Capsule is a dedicated B2B supplier and distributor of pharmaceutical
                  and nutraceutical raw materials. Founded in 2019 and headquartered in
                  Ahmedabad, Gujarat, we serve finished dosage manufacturers, contract
                  manufacturing organisations (CMOs &amp; CDMOs), and health-supplement brands
                  across India and international markets.
                </p>
                <p>
                  White Capsule bridges the gap between raw ingredient producers and final
                  formulation manufacturers through a secure supply chain, stringent quality
                  compliance, and competitive sourcing for Active Pharmaceutical Ingredients
                  (APIs), intermediates, and excipients.
                </p>
              </div>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2019' },
                { label: 'Headquarters', value: 'Ahmedabad, Gujarat, India' },
                { label: 'Business Type', value: 'B2B Supplier & Distributor' },
                { label: 'Market Focus', value: 'India & International' },
                { label: 'Sectors Served', value: 'Pharmaceutical & Nutraceutical' },
                { label: 'Products Offered', value: '31 Raw Materials' },
              ].map(({ label, value }) => (
                <div key={label} className="card bg-neutral-50 border-neutral-200">
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mb-1">
                    {label}
                  </div>
                  <div className="text-sm font-bold text-neutral-900">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section-py bg-neutral-50" aria-labelledby="serve-heading">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Customers"
            title="Who We Serve"
            subtitle="White Capsule partners with a range of manufacturers and brands across the pharmaceutical and nutraceutical value chain."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Finished Dosage Manufacturers',
                desc: 'Companies producing tablets, capsules, syrups, suspensions, and other pharmaceutical formulations requiring quality raw materials.',
              },
              {
                title: 'CMOs & CDMOs',
                desc: 'Contract manufacturing and development organisations that rely on consistent raw-material supply for client formulation projects.',
              },
              {
                title: 'Health-Supplement Brands',
                desc: 'Nutraceutical and dietary supplement companies requiring food-grade and nutraceutical-grade active substances and micronutrients.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="card card-hover">
                <div className="h-0.5 w-8 bg-brand-600 rounded-full mb-5" />
                <h3 className="text-base font-bold text-neutral-900 mb-3">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="section-py bg-white" aria-labelledby="offer-heading">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Product Range"
            title="What We Offer"
            subtitle="Two core areas of pharmaceutical and nutraceutical raw material supply."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Pharmaceutical */}
            <div className="card card-hover border-brand-200 bg-gradient-to-br from-brand-50 to-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-brand-100 rounded-xl text-brand-700">
                  <Pill size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Pharmaceutical Raw Materials</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Active Pharmaceutical Ingredients (APIs)', desc: 'High-purity active substances including antacids, mineral supplements, and therapeutic agents.' },
                  { name: 'Excipients', desc: 'Pharmaceutical-grade inactive substances — binders, lubricants, preservatives, stabilizers.' },
                  { name: 'Intermediates', desc: 'Organic synthesis intermediates used in pharmaceutical manufacturing processes.' },
                ].map(({ name, desc }) => (
                  <div key={name} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-neutral-800">{name}</div>
                      <div className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutraceutical */}
            <div className="card card-hover border-grey-200 bg-gradient-to-br from-grey-50 to-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-grey-100 rounded-xl text-grey-600">
                  <FlaskConical size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Nutraceutical &amp; Dietary Raw Materials</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Vitamins & Micronutrients', desc: 'Food-grade and pharma-grade vitamins, minerals, and micronutrients for health supplements.' },
                  { name: 'Nutraceutical Grade Active Substances', desc: 'Active nutraceutical ingredients meeting quality standards for dietary supplement formulation.' },
                ].map(({ name, desc }) => (
                  <div key={name} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-grey-500 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-neutral-800">{name}</div>
                      <div className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product count summary */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: Pill, count: '15', label: 'APIs', sub: 'Active Pharmaceutical Ingredients', color: 'text-brand-700 bg-brand-100' },
                { icon: FlaskConical, count: '14', label: 'Excipients', sub: 'Pharmaceutical Excipients', color: 'text-grey-600 bg-grey-100' },
                { icon: Atom, count: '2', label: 'Intermediates', sub: 'Chemical Intermediates', color: 'text-neutral-700 bg-neutral-200' },
              ].map(({ icon: Icon, count, label, sub, color }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className={`p-3 rounded-xl ${color} mb-3`}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <div className="text-4xl font-bold text-neutral-900">{count}</div>
                  <div className="text-sm font-semibold text-neutral-700 mt-1">{label}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/#product-catalog" className="btn-primary">
                View Full Product Portfolio
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC ADVANTAGES ── */}
      <section className="section-py bg-neutral-50" aria-labelledby="about-advantages-heading">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Strengths"
            title="Why White Capsule"
            subtitle="Three pillars that define our approach to pharmaceutical raw-material supply."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Strategic Location',
                desc: 'Operating from Ahmedabad provides direct access to Gujarat\'s dense network of chemical manufacturing clusters and well-connected freight routes, enabling faster sourcing and logistics.',
                color: 'bg-brand-100 text-brand-700',
                line: 'bg-brand-600',
              },
              {
                icon: ShieldCheck,
                title: 'Quality & Compliance Support',
                desc: 'We focus on sourcing materials backed by proper documentation including Certificates of Analysis (CoA) and GMP certifications, ensuring your formulations meet regulatory standards.',
                color: 'bg-grey-100 text-grey-600',
                line: 'bg-grey-500',
              },
              {
                icon: Truck,
                title: 'Supply Chain Reliability',
                desc: 'Robust inventory planning assists manufacturing partners with just-in-time delivery and batch consistency, minimising production disruptions and supply-chain risk.',
                color: 'bg-neutral-200 text-neutral-700',
                line: 'bg-neutral-500',
              },
            ].map(({ icon: Icon, title, desc, color, line }) => (
              <div key={title} className="card card-hover group">
                <div className={`p-4 rounded-xl w-fit mb-5 transition-colors ${color}`}>
                  <Icon size={28} aria-hidden="true" />
                </div>
                <div className={`h-0.5 w-8 ${line} rounded-full mb-4`} />
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Interested in Partnering with Us?"
        subtitle="Reach out to discuss your raw-material sourcing requirements."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
        secondaryLabel="Explore Products"
        secondaryTo="/"
      />
    </>
  );
}

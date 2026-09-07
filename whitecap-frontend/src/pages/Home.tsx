import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, FlaskConical, Layers, Truck } from 'lucide-react';
import StrategicAdvantages from '../components/StrategicAdvantages';
import CTASection from '../components/CTASection';
import heroPharmaBg from '../assets/hero-pharma-bg.jpg';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden bg-neutral-950 min-h-[100svh] flex items-center"
        aria-labelledby="hero-heading"
      >
        {/* Black & White Pharma Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${heroPharmaBg})` }}
          aria-hidden="true"
        />

        {/* Gradient Overlay for brand tone & text legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/75 to-brand-950/40"
          aria-hidden="true"
        />

        {/* Decorative background elements */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {/* Large faint circle */}
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-brand-700/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-brand-500/10 blur-3xl" />
          {/* Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="container-xl relative z-10 py-28 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Subtitle & Action Buttons */}
            <div className="lg:col-span-7">
           

              <h1 id="hero-heading" className="text-[28px] sm:text-[40px] md:text-[52px] font-bold text-white leading-[1.12] tracking-tight mb-6">
                Numerous Critical{' '}
                <span className="text-brand-300">Formulations.</span>
                <br />
                One Healthier World.
              </h1>

              <p className="text-brand-100/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-light">
                White Capsule is a premier supplier and distributor of pharmaceutical and nutraceutical raw materials — APIs, excipients, and intermediates — serving formulation manufacturers, CMOs, CDMOs, and health-supplement brands across global markets.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-900 px-8 py-4 rounded-lg font-semibold text-sm hover:bg-brand-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Our Products
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-200 backdrop-blur-md"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-brand-200/80 font-medium">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-300" /> Quality &amp; Compliance Focus
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-300" /> Reliable Global Supply Chain
                </span>
              </div>
            </div>

            {/* Right Column: Key Stats & Company Focus Glassmorphism Card */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-900/70 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <h2 className="text-white font-bold text-lg mb-2 flex items-center justify-between border-b border-white/10 pb-4">
                  <span>Company Snapshot</span>
                  <span className="text-xs font-normal text-brand-300 px-2.5 py-1 rounded bg-white/5 border border-white/10">Est. 2019</span>
                </h2>

                {/* 2x2 Grid Stats */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-3xl font-extrabold text-white mb-1">31+</div>
                    <div className="text-xs font-medium text-brand-200">Raw Ingredients</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-3xl font-extrabold text-white mb-1">3</div>
                    <div className="text-xs font-medium text-brand-200">Core Categories</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-3xl font-extrabold text-brand-300 mb-1">B2B</div>
                    <div className="text-xs font-medium text-brand-200">Exclusive Distribution</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl font-bold text-white mb-1">Gujarat</div>
                    <div className="text-xs font-medium text-brand-200">HQ Ahmedabad</div>
                  </div>
                </div>

                {/* Key Product Offerings Summary */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2.5">
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                    Portfolio Focus
                  </div>
                  <div className="flex items-center justify-between text-xs text-white p-2.5 rounded-lg bg-white/5">
                    <span className="font-medium text-brand-200">Active Pharma Ingredients (APIs)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-400/30">Standard &amp; Custom</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white p-2.5 rounded-lg bg-white/5">
                    <span className="font-medium text-brand-200">Nutraceutical Ingredients</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-400/30">High Bioavailability</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white p-2.5 rounded-lg bg-white/5">
                    <span className="font-medium text-brand-200">Pharma Excipients</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-400/30">Dosage Grade</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COMPANY INTRODUCTION ── */}
      <section className="section-py bg-neutral-50/70 border-y border-neutral-200/60" aria-labelledby="intro-heading">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Mission & Core Overview */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-md border border-brand-100 mb-4">
                About White Capsule
              </span>
              
              <h2 id="intro-heading" className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
                Bridging Raw Ingredient Producers with Formulation Manufacturers
              </h2>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
                Founded in 2019 and headquartered in Ahmedabad, Gujarat, White Capsule is a dedicated B2B supplier and distributor of pharmaceutical and nutraceutical raw materials across India and global markets.
              </p>

              {/* Key Features List */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <span className="font-semibold text-neutral-900 text-sm">Comprehensive Raw Material Sourcing:</span>
                    <span className="text-neutral-600 text-sm ml-1">APIs, Excipients, and Intermediates for diverse dosage forms.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <span className="font-semibold text-neutral-900 text-sm">Strict Quality Compliance:</span>
                    <span className="text-neutral-600 text-sm ml-1">Transparent documentation including COA, MOA, and DMF support.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</div>
                  <div>
                    <span className="font-semibold text-neutral-900 text-sm">Dependable B2B Supply Chain:</span>
                    <span className="text-neutral-600 text-sm ml-1">Serving finished dosage manufacturers, CMOs, CDMOs, and supplement brands.</span>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn-primary inline-flex items-center gap-2 shadow-sm hover:shadow-md">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Column: Visual Capability Cards Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <FlaskConical size={24} />
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base mb-2">APIs &amp; Intermediates</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Active ingredients sourced from audited global producers with full analytical documentation.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <Layers size={24} />
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base mb-2">Pharma Excipients</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    High-grade binders, disintegrants, and solubilizers for tablet and capsule manufacturing.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base mb-2">Nutraceutical Raw Materials</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Vitamins, minerals, amino acids, and herbal extracts with high bioavailability.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-brand-600 text-white shadow-md flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4">
                      <Truck size={24} />
                    </div>
                    <h3 className="font-bold text-white text-base mb-2">Global Distribution</h3>
                    <p className="text-brand-100 text-xs leading-relaxed">
                      Reliable logistics connecting producers with CMOs, CDMOs, and finished dosage units.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/20 text-[11px] font-semibold tracking-wider uppercase text-brand-200">
                    India &amp; Exports
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STRATEGIC ADVANTAGES ── */}
      <StrategicAdvantages />

      {/* ── CONTACT CTA ── */}
      <CTASection
        title="Ready to Source Quality Raw Materials?"
        subtitle="Get in touch with our team to discuss your pharmaceutical or nutraceutical raw material requirements."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
        secondaryLabel="View Products"
        secondaryTo="/products"
      />
    </>
  );
}

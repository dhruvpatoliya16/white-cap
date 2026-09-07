import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCategories from '../components/ProductCategories';
import ProductCatalog from '../components/ProductCatalog';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import type { ProductCategory } from '../data/products';

type FilterTab = 'All' | ProductCategory;

export default function Products() {
  // SEO
  useEffect(() => {
    document.title = 'Products | White Capsule';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        "Explore White Capsule's pharmaceutical and nutraceutical raw-material product portfolio — 31 products across APIs, excipients and intermediates. B2B supplier based in Ahmedabad, Gujarat."
      );
    }
  }, []);

  // Same state/ref wiring as was on Home
  const catalogRef = useRef<HTMLElement>(null);
  const [catalogFilter, setCatalogFilter] = useState<FilterTab>('All');

  const handleFilterChange = (category: FilterTab) => {
    setCatalogFilter(category);
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-brand-950 to-brand-900 pt-40 pb-24"
        aria-labelledby="products-hero-heading"
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="products-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#products-grid)" />
          </svg>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl" />
        </div>
        <div className="container-xl relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brand-300 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-100 font-medium">Products</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold text-brand-300 uppercase tracking-[0.15em] mb-4">
              Raw Material Portfolio
            </span>
            <h1
              id="products-hero-heading"
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            >
              Our Products
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed max-w-2xl">
              White Capsule supplies a focused range of pharmaceutical and nutraceutical raw
              materials — Active Pharmaceutical Ingredients (APIs), excipients, and
              intermediates — to finished dosage manufacturers, CMOs, CDMOs, and
              health-supplement brands across India and international markets.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { value: '31', label: 'Total Products' },
                { value: '15', label: 'APIs' },
                { value: '14', label: 'Excipients' },
                { value: '2', label: 'Intermediates' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-bold text-white">{value}</span>
                  <span className="text-xs text-brand-300 uppercase tracking-wider mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — CORE OFFERINGS  (exact copy from Home)
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-py bg-neutral-50" aria-labelledby="business-focus-heading">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Core Offerings"
            title="Our Business Focus"
            subtitle="Two core areas of raw material supply serving India's pharmaceutical and nutraceutical industry."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pharmaceutical */}
            <div className="card card-hover bg-gradient-to-br from-brand-50 to-white border-brand-200">
              <div className="mb-5">
                <span className="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pharmaceutical
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Pharmaceutical Raw Materials
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                Sourcing and supply of high-quality pharmaceutical-grade raw materials for
                finished dosage manufacturing.
              </p>
              <ul className="space-y-3">
                {[
                  'Active Pharmaceutical Ingredients (APIs)',
                  'Excipients',
                  'Intermediates',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutraceutical */}
            <div className="card card-hover bg-gradient-to-br from-grey-50 to-white border-grey-200">
              <div className="mb-5">
                <span className="inline-block bg-grey-100 text-grey-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Nutraceutical
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Nutraceutical &amp; Dietary Raw Materials
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                Supply of food-grade and nutraceutical-grade raw materials for health-supplement
                brands and manufacturers.
              </p>
              <ul className="space-y-3">
                {[
                  'Vitamins, food grade & pharma grade micronutrients',
                  'Nutraceutical grade active substances',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-grey-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — WHAT WE OFFER / PRODUCT CATEGORIES  (exact copy from Home)
      ══════════════════════════════════════════════════════════════ */}
      <ProductCategories
        onFilterChange={handleFilterChange}
        scrollToRef={catalogRef}
      />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — PRODUCT PORTFOLIO  (exact copy from Home)
      ══════════════════════════════════════════════════════════════ */}
      <ProductCatalog
        ref={catalogRef}
        activeFilter={catalogFilter}
      />

      {/* ── CONTACT CTA ── */}
      <CTASection
        title="Ready to Source Quality Raw Materials?"
        subtitle="Get in touch with our team to discuss your pharmaceutical or nutraceutical raw material requirements."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
        secondaryLabel="Learn About Us"
        secondaryTo="/about"
      />
    </>
  );
}

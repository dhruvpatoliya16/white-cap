import { Pill, FlaskConical, Atom } from 'lucide-react';
import { products } from '../data/products';

interface ProductCategoriesProps {
  onFilterChange: (category: 'All' | 'API' | 'Excipient' | 'Intermediate') => void;
  scrollToRef: React.RefObject<HTMLElement | null>;
}

const categories = [
  {
    key: 'API' as const,
    title: 'Active Pharmaceutical Ingredients',
    short: 'APIs',
    description:
      'High-purity active substances including antacids, mineral supplements, and therapeutic agents for finished dosage manufacturing.',
    icon: Pill,
    color: 'brand',
  },
  {
    key: 'Excipient' as const,
    title: 'Excipients',
    short: 'Excipients',
    description:
      'Pharmaceutical-grade inactive substances that serve as carriers, binders, lubricants, preservatives and stabilizers in formulations.',
    icon: FlaskConical,
    color: 'grey',
  },
  {
    key: 'Intermediate' as const,
    title: 'Intermediates',
    short: 'Intermediates',
    description:
      'Organic synthesis intermediates used in pharmaceutical and specialty chemical manufacturing processes.',
    icon: Atom,
    color: 'neutral',
  },
];

const colorMap = {
  brand: {
    bg: 'bg-brand-50',
    icon: 'text-brand-600 bg-brand-100',
    badge: 'bg-brand-100 text-brand-600',
    btn: 'text-brand-600 border-brand-200 hover:bg-brand-50',
    count: 'text-brand-500',
  },
  grey: {
    bg: 'bg-grey-50',
    icon: 'text-grey-600 bg-grey-100',
    badge: 'bg-grey-100 text-grey-600',
    btn: 'text-grey-600 border-grey-200 hover:bg-grey-50',
    count: 'text-grey-500',
  },
  neutral: {
    bg: 'bg-neutral-50',
    icon: 'text-neutral-600 bg-neutral-200',
    badge: 'bg-neutral-200 text-neutral-600',
    btn: 'text-neutral-600 border-neutral-200 hover:bg-neutral-50',
    count: 'text-neutral-500',
  },
};

export default function ProductCategories({ onFilterChange, scrollToRef }: ProductCategoriesProps) {
  const getCategoryCount = (key: 'API' | 'Excipient' | 'Intermediate') =>
    products.filter((p) => p.category === key).length;

  const handleClick = (key: 'API' | 'Excipient' | 'Intermediate') => {
    onFilterChange(key);
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section-py bg-neutral-50" aria-labelledby="categories-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-[0.15em] mb-3">
            What We Offer
          </span>
          <h2 id="categories-heading" className="text-3xl md:text-4xl font-bold text-neutral-900">
            Product Categories
          </h2>
          <p className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto">
            Comprehensive range of pharmaceutical and nutraceutical raw materials across three core categories.
          </p>
          <div className="mt-5 h-0.5 w-12 bg-brand-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(({ key, title, short, description, icon: Icon, color }) => {
            const c = colorMap[color as keyof typeof colorMap];
            const count = getCategoryCount(key);

            return (
              <div
                key={key}
                className={`card card-hover flex flex-col group ${c.bg}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl ${c.icon}`}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <span className={`${c.badge} badge text-xs font-bold`}>
                    {count} Products
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">{description}</p>
                <button
                  onClick={() => handleClick(key)}
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold border rounded-md px-4 py-2.5 transition-colors ${c.btn}`}
                  aria-label={`View ${short} products`}
                >
                  View {short}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

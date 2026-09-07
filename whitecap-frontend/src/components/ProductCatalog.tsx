import { useState, useEffect, forwardRef } from 'react';
import { Search, X } from 'lucide-react';
import { products, type ProductCategory } from '../data/products';
import SectionHeading from './SectionHeading';

type FilterTab = 'All' | ProductCategory;

interface ProductCatalogProps {
  activeFilter?: FilterTab;
  onFilterApplied?: () => void;
}

const tabs: { key: FilterTab; label: string }[] = [
  { key: 'All', label: 'All Products' },
  { key: 'API', label: 'APIs' },
  { key: 'Excipient', label: 'Excipients' },
  { key: 'Intermediate', label: 'Intermediates' },
];

const categoryBadge: Record<ProductCategory, string> = {
  API: 'badge-api',
  Excipient: 'badge-excipient',
  Intermediate: 'badge-intermediate',
};

const categoryLabel: Record<ProductCategory, string> = {
  API: 'API',
  Excipient: 'Excipient',
  Intermediate: 'Intermediate',
};

// Forward ref so parent can scroll to this section
const ProductCatalog = forwardRef<HTMLElement, ProductCatalogProps>(
  ({ activeFilter = 'All', onFilterApplied }, ref) => {
    const [filter, setFilter] = useState<FilterTab>(activeFilter);
    const [search, setSearch] = useState('');

    // Sync external filter change
    useEffect(() => {
      if (activeFilter !== filter) {
        setFilter(activeFilter);
        onFilterApplied?.();
      }
    }, [activeFilter]);

    const filtered = products.filter((p) => {
      const matchCategory =
        filter === 'All' || p.category === filter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.casNo.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });

    return (
      <section
        ref={ref}
        id="product-catalog"
        className="section-py bg-white"
        aria-labelledby="catalog-heading"
      >
        <div className="container-xl">
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Our Product Portfolio"
            subtitle="Explore our range of pharmaceutical and nutraceutical raw materials."
            className="mb-12"
          />

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-1 bg-neutral-100 p-1 rounded-lg" role="tablist" aria-label="Filter by category">
              {tabs.map(({ key, label }) => {
                const count =
                  key === 'All'
                    ? products.length
                    : products.filter((p) => p.category === key).length;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={filter === key}
                    onClick={() => setFilter(key)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                      filter === key
                        ? 'bg-white text-brand-700 shadow-sm font-semibold'
                        : 'text-neutral-500 hover:text-neutral-800'
                    }`}
                  >
                    {label}
                    <span
                      className={`ml-1.5 text-xs ${
                        filter === key ? 'text-brand-600' : 'text-neutral-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or CAS No."
                className="input-field pl-9 pr-9 w-full"
                aria-label="Search products"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Count */}
          <p className="text-sm text-neutral-500 mb-5">
            Showing{' '}
            <span className="font-semibold text-neutral-800">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'product' : 'products'}
          </p>

          {/* Desktop Table */}
          {filtered.length > 0 ? (
            <>
              <div className="hidden md:block overflow-x-auto rounded-xl border border-neutral-200 shadow-card">
                <table className="min-w-full divide-y divide-neutral-200" aria-label="Product catalog">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider w-8">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Product Name
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        CAS No.
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Functional Role / Indication
                      </th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-100">
                    {filtered.map((product, idx) => (
                      <tr
                        key={product.id}
                        className="hover:bg-neutral-50 transition-colors duration-100"
                      >
                        <td className="px-6 py-4 text-sm text-neutral-400 font-mono">
                          {String(idx + 1).padStart(2, '0')}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-neutral-900">
                          {product.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-500 font-mono whitespace-nowrap">
                          {product.casNo}
                        </td>
                        <td className="px-6 py-4 text-sm text-neutral-600">
                          {product.indication}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`${categoryBadge[product.category]} whitespace-nowrap`}>
                            {categoryLabel[product.category]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {filtered.map((product) => (
                  <div key={product.id} className="card">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-sm font-semibold text-neutral-900 leading-snug">
                        {product.name}
                      </h3>
                      <span className={`${categoryBadge[product.category]} shrink-0`}>
                        {categoryLabel[product.category]}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex gap-2 text-xs">
                        <span className="text-neutral-400 font-medium w-14 shrink-0">CAS No.</span>
                        <span className="text-neutral-700 font-mono">{product.casNo}</span>
                      </div>
                      <div className="flex gap-2 text-xs">
                        <span className="text-neutral-400 font-medium w-14 shrink-0">Role</span>
                        <span className="text-neutral-600">{product.indication}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20 bg-neutral-50 rounded-xl border border-neutral-200">
              <Search size={40} className="mx-auto text-neutral-300 mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-neutral-600 mb-2">No products found</h3>
              <p className="text-neutral-400 text-sm">Try adjusting your search or filter.</p>
              <button
                onClick={() => { setSearch(''); setFilter('All'); }}
                className="mt-4 btn-ghost text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }
);

ProductCatalog.displayName = 'ProductCatalog';
export default ProductCatalog;

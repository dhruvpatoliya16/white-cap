import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroPharmaBg from '../assets/hero-pharma-bg.jpg';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 section-py" aria-labelledby="cta-heading">
      {/* Background Pharma Image Texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: `url(${heroPharmaBg})` }}
        aria-hidden="true"
      />

      {/* Deep Brand Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/90 to-brand-950/95 pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-xl relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-brand-200 text-base md:text-lg mb-8 leading-relaxed font-light">{subtitle}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-900 px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-brand-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
            {secondaryLabel && secondaryTo && (
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-200 backdrop-blur-md"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

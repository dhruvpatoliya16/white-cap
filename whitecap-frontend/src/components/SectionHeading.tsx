interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-[0.15em] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-balance leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-neutral-500 text-lg leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
      {/* Accent line */}
      <div className={`mt-5 h-0.5 w-12 bg-brand-600 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}

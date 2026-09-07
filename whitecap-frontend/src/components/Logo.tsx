import logoImg from '../assets/white-capsule-logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** 'full' shows the image logo; 'icon' shows a compact SVG capsule for tight spaces */
  variant?: 'full' | 'icon';
}

const heightMap = {
  sm: 'h-9',   // ~36px
  md: 'h-12',  // ~48px
  lg: 'h-16',  // ~64px
};

export default function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    // Compact capsule icon for very tight spaces
    return (
      <div className={`inline-flex items-center ${className}`} aria-label="White Capsule">
        <svg width="32" height="18" viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="1" y="1" width="78" height="34" rx="17" fill="white" stroke="#aaa" strokeWidth="1.5"/>
          <rect x="1" y="1" width="39" height="34" rx="17" fill="#f0f0f0"/>
          <path d="M39 2 Q42 18 39 34" stroke="#999" strokeWidth="1" fill="none"/>
          <text x="18" y="23" fontFamily="sans-serif" fontSize="13" fontWeight="600" fill="#555" textAnchor="middle">w</text>
          <text x="58" y="23" fontFamily="sans-serif" fontSize="13" fontWeight="600" fill="#0092CE" textAnchor="middle">c</text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`} aria-label="White Capsule logo">
      <img
        src={logoImg}
        alt="White Capsule — Pharmaceutical &amp; Nutraceutical Raw Materials"
        className={`${heightMap[size]} w-auto object-contain`}
        draggable={false}
      />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-nav py-3' : 'py-4 border-b border-neutral-100'
      }`}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between gap-6" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="shrink-0" aria-label="White Capsule Home" onClick={handleNavClick}>
            <Logo size="lg" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-brand-700 bg-brand-50'
                        : 'text-neutral-600 hover:text-brand-700 hover:bg-neutral-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-600 hover:text-brand-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 border-t border-neutral-100' : 'max-h-0'
        }`}
      >
        <div className="container-xl py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-neutral-700 hover:text-brand-700 hover:bg-neutral-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-3 mt-2 border-t border-neutral-100">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="btn-primary w-full justify-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

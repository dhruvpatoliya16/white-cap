import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin } from 'lucide-react';
import Logo from './Logo';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* <div className="bg-white rounded-xl px-4 py-3 inline-block mb-5"> */}
              <Logo size="lg" />
            {/* </div> */}
            <p className="text-neutral-400 text-sm leading-relaxed mb-4 max-w-sm">
              Numerous Critical Formulations. One Healthier World.
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              B2B supplier and distributor of pharmaceutical and nutraceutical raw materials.
              Serving finished dosage manufacturers, CMOs, CDMOs and health-supplement brands
              across India and international markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-4 list-none p-0 m-0">
              <li className="flex gap-3">
                <Mail size={16} className="text-brand-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:info@whitecapsule.in"
                  className="text-neutral-400 text-sm hover:text-white transition-colors"
                >
                  info@whitecapsule.in
                </a>
              </li>
              <li className="flex gap-3">
                <Globe size={16} className="text-brand-400 shrink-0 mt-0.5" />
                <a
                  href="http://www.whitecapsule.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 text-sm hover:text-white transition-colors"
                >
                  www.whitecapsule.in
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-brand-400 shrink-0 mt-0.5" />
                <address className="text-neutral-400 text-sm not-italic leading-relaxed">
                  9, Sanidhya Bunglows,<br />
                  Nr. Bileshwar Mahadev Temple,<br />
                  Jodhpur Gam Road, Satellite,<br />
                  Ahmedabad, Gujarat, India – 380015
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
          <span>&copy; {new Date().getFullYear()} White Capsule. All rights reserved.</span>
          <span>Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </footer>
  );
}

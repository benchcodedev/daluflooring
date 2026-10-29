import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3d2b1f] text-[#FAF7EE] pt-16 pb-12 mt-20 border-t border-[#4f3829]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row: Call to Action Prompt */}
        <div className="pb-12 border-b border-[#543d2c] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-heading text-3xl sm:text-4xl text-[#FAF7EE] tracking-tight">
              Transform your space with natural permanence.
            </h3>
            <p className="text-[#D1C9BD] text-sm sm:text-base mt-2 max-w-xl">
              Whether commissioning an architectural private residence or flagship commercial space, our master artisans are ready.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/quote"
              className="bg-[#FAF7EE] hover:bg-white text-[#3d2b1f] font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Book a Free Quote
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Halo Dalu Flooring, saya ingin konsultasi kebutuhan lantai.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#755740] hover:border-[#FAF7EE] text-[#FAF7EE] font-medium text-sm px-5 py-3 rounded-full transition-colors flex items-center gap-2"
            >
              <span>WhatsApp</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Middle Columns: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-[#543d2c]">

          {/* Col 1: Brand & Bio (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-[#FAF7EE]">
                {siteConfig.brand.wordmark}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B5A998] font-semibold pl-2 border-l border-[#684c37]">
                {siteConfig.brand.submark}
              </span>
            </div>
            <p className="font-serif-italic text-lg text-[#DFD6C9]">
              "{siteConfig.brand.tagline}"
            </p>
            <p className="text-[#B5A998] text-sm leading-relaxed max-w-sm">
              Specialist supplier and installer of prime architectural stone, French oak parquet, microcement, and luxury bespoke surfaces.
            </p>
            <div className="text-xs text-[#9E9281] space-y-1 pt-2">
              <p><strong className="text-[#D1C9BD]">Studio:</strong> {siteConfig.contact.address}</p>
              <p><strong className="text-[#D1C9BD]">Hours:</strong> {siteConfig.contact.hours}</p>
              <p><strong className="text-[#D1C9BD]">Direct:</strong> {siteConfig.contact.phoneDisplay}</p>
            </div>
          </div>

          {/* Col 2: Flooring Types */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D1C9BD] mb-4">
              Flooring Types
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B5A998]">
              <li><Link to="/flooring-types?category=natural-stone-marble" className="hover:text-white transition-colors">Natural Stone & Marble</Link></li>
              <li><Link to="/flooring-types?category=artisan-parquet" className="hover:text-white transition-colors">Artisan Parquet & Wood</Link></li>
              <li><Link to="/flooring-types?category=terrazzo-aggregates" className="hover:text-white transition-colors">Terrazzo & Aggregates</Link></li>
              <li><Link to="/flooring-types?category=microcement-stone" className="hover:text-white transition-colors">Architectural Microcement</Link></li>
              <li><Link to="/flooring-types" className="hover:text-white transition-colors font-medium text-[#FAF7EE]">View Full Catalog →</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D1C9BD] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B5A998]">
              <li><Link to="/services/residential-flooring" className="hover:text-white transition-colors">Residential Installations</Link></li>
              <li><Link to="/services/commercial-flooring" className="hover:text-white transition-colors">Commercial Projects</Link></li>
              <li><Link to="/services/professional-installation" className="hover:text-white transition-colors">Subfloor & Precision Laying</Link></li>
              <li><Link to="/services/sanding-refinishing" className="hover:text-white transition-colors">Dustless Sanding & Refinish</Link></li>
              <li><Link to="/services/maintenance-repair" className="hover:text-white transition-colors">Periodic Maintenance & Buffing</Link></li>
            </ul>
          </div>

          {/* Col 4: Navigation & Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#D1C9BD] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B5A998]">
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Craft</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Completed Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Location</Link></li>
              <li><Link to="/quote" className="hover:text-white transition-colors">Request a Quote</Link></li>
            </ul>

            <div className="mt-6 pt-4 border-t border-[#543d2c]">
              <div className="flex items-center gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#B5A998] hover:text-white transition-colors flex items-center gap-0.5"
                  >
                    <span>{social.name}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal & BENCHCODE TRADEMARK */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E9281] gap-4">
          <p>
            &copy; {currentYear} {siteConfig.brand.name}. All rights reserved. &bull; Trademark of{' '}
            <span className="font-semibold text-[#FAF7EE] tracking-wider">BENCHCODE&trade;</span>
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to Top ↑
            </span>
            <span>&bull;</span>
            <span>
              Crafted with precision by{' '}
              <span className="text-[#FAF7EE] font-semibold tracking-wide">BENCHCODE</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const serviceLinks = [
    { name: 'Residential Flooring', path: '/services/residential-flooring' },
    { name: 'Commercial Flooring', path: '/services/commercial-flooring' },
    { name: 'Subfloor & Precision Laying', path: '/services/professional-installation' },
    { name: 'Dustless Sanding & Refinish', path: '/services/sanding-refinishing' },
    { name: 'Periodic Maintenance & Buffing', path: '/services/maintenance-repair' },
  ];

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 px-4 sm:px-6 lg:px-8 bg-[#E8E6DC]/90 backdrop-blur-md transition-all">
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4">

        {/* 1. Left Wordmark Logo */}
        <Link to="/" className="text-[28px] sm:text-[32px] font-bold tracking-tight text-[#231F1C] hover:opacity-85 transition-opacity shrink-0">
          {siteConfig.brand.wordmark}
        </Link>

        {/* 2. Center Pill Navigation Container (Desktop) */}
        <nav className="hidden lg:flex items-center bg-[#FAF7EE] border border-[#DFDBCB] rounded-full px-5 py-2 shadow-sm text-[13.5px] font-medium text-[#605C50]">
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') && location.pathname === '/' ? 'text-[#231F1C] font-semibold' : 'hover:text-[#231F1C]'}`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-[#231F1C] font-semibold' : 'hover:text-[#231F1C]'}`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors ${isActive('/services') ? 'text-[#231F1C] font-semibold' : 'hover:text-[#231F1C]'}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-2 shadow-xl backdrop-blur-md">
                    <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#8A8679] border-b border-[#E6E1D2] mb-1">
                      Our Disciplines
                    </div>
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={() => setServicesOpen(false)}
                        className="block px-3 py-2 text-xs text-[#474337] hover:text-[#231F1C] hover:bg-[#ECE8DC] rounded-xl transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                    <div className="pt-1 mt-1 border-t border-[#E6E1D2]">
                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-3 py-1.5 text-xs font-semibold text-[#3d2b1f] hover:underline"
                      >
                        All Capabilities & Process →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/projects"
              className={`transition-colors ${isActive('/projects') ? 'text-[#231F1C] font-semibold' : 'hover:text-[#231F1C]'}`}
            >
              Projects
            </Link>

            <Link
              to="/flooring-types"
              className={`transition-colors ${isActive('/flooring-types') ? 'text-[#231F1C] font-semibold' : 'hover:text-[#231F1C]'}`}
            >
              Flooring Types
            </Link>

            <Link
              to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-[#231F1C] font-semibold' : 'hover:text-[#231F1C]'}`}
            >
              Contact
            </Link>
          </div>

          {/* Vertical subtle divider within pill */}
          <div className="h-4 w-px bg-[#DFDBCB] mx-4" />

          {/* Social Links with Diagonal Arrow */}
          <div className="flex items-center space-x-3 text-xs text-[#737063]">
            {siteConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#231F1C] transition-colors flex items-center gap-0.5"
              >
                <span>{social.name}</span>
                <span className="text-[10px]">↗</span>
              </a>
            ))}
          </div>
        </nav>

        {/* 3. Right CTA Button Pill */}
        <div className="flex items-center gap-3">
          <Link
            to="/quote"
            className="inline-flex items-center justify-center bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 shrink-0"
          >
            {siteConfig.hero.ctaPrimary}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-full bg-[#FAF7EE] border border-[#DFDBCB] text-[#231F1C] focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 bg-[#FAF7EE] border border-[#DFDBCB] rounded-3xl p-5 shadow-2xl">
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#474337]">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#ECE8DC] transition-colors text-[#231F1C]"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#ECE8DC] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#ECE8DC] transition-colors"
            >
              Services & Capabilities
            </Link>
            <div className="pl-4 space-y-1.5 border-l border-[#DFDBCB] my-1">
              {serviceLinks.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={() => setMobileOpen(false)}
                  className="block text-xs py-1 text-[#737063] hover:text-[#231F1C]"
                >
                  • {s.name}
                </Link>
              ))}
            </div>
            <Link
              to="/projects"
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#ECE8DC] transition-colors"
            >
              Completed Projects
            </Link>
            <Link
              to="/flooring-types"
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#ECE8DC] transition-colors"
            >
              Flooring Types Catalog
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 rounded-xl hover:bg-[#ECE8DC] transition-colors"
            >
              Contact & Studio
            </Link>

            <div className="pt-4 border-t border-[#DFDBCB] flex items-center justify-between text-xs text-[#737063]">
              <div className="flex items-center space-x-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#231F1C] transition-colors"
                  >
                    {social.name} ↗
                  </a>
                ))}
              </div>
              <span className="font-semibold text-[#3d2b1f]">BENCHCODE™</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

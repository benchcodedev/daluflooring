import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { products } from '../data/products';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const signatureProducts = products.filter((p) => p.isSignature);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  const scrollNext = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  return (
    <div>
      {/* 1. HERO SECTION (Exact Reference Match) */}
      <section className="pt-8 sm:pt-12 lg:pt-14 pb-10 sm:pb-14 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Hero Left: Typographic Serif Headline */}
          <div className="lg:col-span-8">
            <h1 className="font-serif-heading text-[#231F1C] tracking-[-0.035em] text-[44px] leading-[0.98] sm:text-[62px] sm:leading-[0.96] md:text-[74px] md:leading-[0.94] lg:text-[82px] xl:text-[90px] font-normal">
              <span className="block">
                {siteConfig.hero.headlineLine1}
              </span>
              <span className="block mt-1 sm:mt-2">
                <span>{siteConfig.hero.headlineLine2Prefix}</span>
                <span className="font-serif-italic font-normal">{siteConfig.hero.headlineLine2Italic}</span>

                {/* Baseline Uppercase Spaced Tag (Desktop) */}
                <span className="hidden md:inline-block ml-3 lg:ml-4 text-[9.5px] lg:text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#3D3A2F] align-baseline whitespace-nowrap">
                  {siteConfig.hero.spacesTags}
                </span>
              </span>
            </h1>

            {/* Mobile Tag below headline */}
            <div className="md:hidden mt-3 text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#545041]">
              {siteConfig.hero.spacesTags}
            </div>
          </div>

          {/* Hero Right: Paragraph & CTA Buttons */}
          <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-center">
            <p className="text-[15px] sm:text-[16px] text-[#474337] leading-relaxed max-w-md">
              {siteConfig.hero.description}
            </p>

            <div className="mt-6 sm:mt-8 flex items-center gap-5 sm:gap-6 flex-wrap">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-[13.5px] sm:text-[14px] font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                {siteConfig.hero.ctaPrimary}
              </Link>

              <Link
                to="/about"
                className="text-[13.5px] sm:text-[14px] font-medium text-[#231F1C] underline underline-offset-4 decoration-1 decoration-[#231F1C]/60 hover:decoration-[#231F1C] transition-colors"
              >
                {siteConfig.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE COLLECTION (Carousel Section) */}
      <section className="pt-2 pb-16 sm:pb-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[48px] text-[#231F1C] tracking-tight">
            <span>Signature </span>
            <span className="font-serif-italic font-normal">Collection</span>
          </h2>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollLeft}
              aria-label="Previous products"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#231F1C]/40 flex items-center justify-center text-[#231F1C] transition-all ${
                !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#231F1C] hover:bg-[#FAF7EE] active:scale-95'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollRight}
              aria-label="Next products"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#231F1C]/40 flex items-center justify-center text-[#231F1C] transition-all ${
                !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#231F1C] hover:bg-[#FAF7EE] active:scale-95'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {signatureProducts.map((product) => (
            <div
              key={product.id}
              className="shrink-0 w-[275px] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAPABILITIES & SERVICES OVERVIEW */}
      <section className="py-16 sm:py-20 border-t border-[#DFDBCB] max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-2 block">
              Our Capabilities
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#231F1C]">
              End-to-End <span className="font-serif-italic">Master Craftsmanship</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 text-sm font-medium text-[#231F1C] hover:text-[#3d2b1f] underline transition-colors"
          >
            Explore all 5 services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#E8E6DC] flex items-center justify-center text-[#3d2b1f] mb-4 group-hover:bg-[#3d2b1f] group-hover:text-[#FAF7EE] transition-colors">
                  <span className="text-sm font-semibold">0{service.id}</span>
                </div>
                <h3 className="font-serif-heading text-xl text-[#231F1C] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#605C50] leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
              <span className="mt-6 text-xs font-semibold text-[#3d2b1f] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View details</span>
                <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO PROJECTS */}
      <section className="py-16 sm:py-20 border-t border-[#DFDBCB] max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-2 block">
              Architectural Portfolio
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#231F1C]">
              Executed With <span className="font-serif-italic">Absolute Precision</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="mt-4 md:mt-0 text-sm font-medium text-[#231F1C] hover:text-[#3d2b1f] underline transition-colors"
          >
            View all projects gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#D8D4C5] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7EE]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold text-[#231F1C] uppercase tracking-wider">
                  {project.categoryName}
                </div>
                <div className="absolute top-3 right-3 bg-[#231F1C]/80 text-[#FAF7EE] px-2 py-0.5 rounded text-[10px] font-mono">
                  {project.year}
                </div>
              </div>
              <div className="text-xs text-[#737063] mb-1">
                {project.location} • {project.areaM2} m²
              </div>
              <h3 className="font-serif-heading text-xl text-[#231F1C] group-hover:text-[#3d2b1f] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-[#605C50] mt-1 line-clamp-2">
                Surface: {project.surface}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-16 sm:py-20 border-t border-[#DFDBCB] bg-[#ECE9DE]/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-2 block">
              Discerning Voices
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C]">
              Praised by <span className="font-serif-italic">Architects & Owners</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-7 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C49A45] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="font-serif-heading text-lg text-[#231F1C] leading-snug">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E1D2]">
                  <div className="font-semibold text-sm text-[#231F1C]">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-[#737063]">
                    {t.projectLocation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="pt-16 pb-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-sm">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-3 block">
            Complimentary Architectural Consultation
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#231F1C] max-w-3xl mx-auto">
            Ready to specify or install your <span className="font-serif-italic">bespoke surface?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#545041] max-w-xl mx-auto mt-4">
            Receive a formal itemized quotation complete with quarry certificates, subfloor laser surveys, and calibrated sample packs.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Book a Free Quote
            </Link>
            <Link
              to="/contact"
              className="border border-[#737063] hover:border-[#231F1C] text-[#231F1C] font-medium text-sm px-7 py-3.5 rounded-full transition-colors"
            >
              Contact Mayfair Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

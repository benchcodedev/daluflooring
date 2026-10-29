import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro */}
      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-3 block">
            About Dalu Flooring
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] tracking-tight leading-tight">
            Rooted in natural geology, <span className="font-serif-italic">engineered for living.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#545041] mt-6 leading-relaxed">
            Founded in 2012, Dalu Flooring began with a solitary philosophy: architectural flooring should not merely cover a room, it should anchor the serenity and character of the space for generations.
          </p>
        </div>
      </section>

      {/* Story Split */}
      <section className="py-12 border-t border-[#DFDBCB]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#D8D4C5]">
            <img
              src="/images/projects/project-kensington.jpg"
              alt="Craftsmanship in action"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#737063]">
              The Philosophy
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C]">
              Where organic imperfections meet <span className="font-serif-italic">laser precision.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#605C50] leading-relaxed">
              We hand-select raw limestone, black gold-veined marble, and sustainable French oak directly from accredited European quarries and forests. Before a single board or tile is set, our technicians carry out comprehensive subfloor moisture scans and 3D laser levelling.
            </p>
            <p className="text-sm sm:text-base text-[#605C50] leading-relaxed">
              By combining time-honored artisanal mitring techniques with modern acoustic decoupling underlays, we ensure quiet steps, uniform underfloor heat distribution, and an enduring tactile pleasure.
            </p>

            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#DFDBCB]">
              <div>
                <div className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C]">12+</div>
                <div className="text-xs text-[#737063] mt-1">Years of Heritage</div>
              </div>
              <div>
                <div className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C]">450+</div>
                <div className="text-xs text-[#737063] mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C]">98%</div>
                <div className="text-xs text-[#737063] mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 border-t border-[#DFDBCB]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-2 block">
            Guiding Standards
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C]">
            Our Four Pillars of <span className="font-serif-italic">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-6">
            <span className="font-serif-heading text-2xl text-[#3d2b1f] mb-3 block">01</span>
            <h3 className="font-serif-heading text-xl text-[#231F1C] mb-2">Quarry Provenance</h3>
            <p className="text-xs sm:text-sm text-[#605C50] leading-relaxed">
              Every marble block and timber batch is ethically tracked from origin with environmental stewardship certificates.
            </p>
          </div>
          <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-6">
            <span className="font-serif-heading text-2xl text-[#3d2b1f] mb-3 block">02</span>
            <h3 className="font-serif-heading text-xl text-[#231F1C] mb-2">Laser Levelling</h3>
            <p className="text-xs sm:text-sm text-[#605C50] leading-relaxed">
              Subfloor preparation calibrated to ±1mm flatness ensures zero hollow sounds, zero lippage, and flawless joints.
            </p>
          </div>
          <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-6">
            <span className="font-serif-heading text-2xl text-[#3d2b1f] mb-3 block">03</span>
            <h3 className="font-serif-heading text-xl text-[#231F1C] mb-2">Master Fitters</h3>
            <p className="text-xs sm:text-sm text-[#605C50] leading-relaxed">
              Our in-house master carpenters and stonemasons have an average of 15 years specialist floor installation experience.
            </p>
          </div>
          <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-6">
            <span className="font-serif-heading text-2xl text-[#3d2b1f] mb-3 block">04</span>
            <h3 className="font-serif-heading text-xl text-[#231F1C] mb-2">Lifetime Support</h3>
            <p className="text-xs sm:text-sm text-[#605C50] leading-relaxed">
              Comprehensive post-handover maintenance schedules, annual buffing programmes, and certified warranties.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-[#DFDBCB] text-center">
        <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C] mb-4">
          Experience our craft firsthand
        </h2>
        <p className="text-sm text-[#545041] max-w-md mx-auto mb-8">
          Visit our Mayfair studio or request a curated box of calibrated stone and timber samples delivered directly to your desk.
        </p>
        <Link
          to="/quote"
          className="inline-flex items-center justify-center bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-sm font-medium px-8 py-3 rounded-full transition-all shadow-md"
        >
          Request Sample Box & Quote →
        </Link>
      </section>
    </div>
  );
}

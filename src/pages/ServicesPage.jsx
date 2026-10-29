import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function ServicesPage() {
  const steps = [
    { num: '01', title: 'Consultation & Material Selection', desc: 'Detailed review of architectural drawings, traffic density, acoustics, and subfloor heating specifications.' },
    { num: '02', title: 'Laser Survey & Subfloor Prep', desc: 'Moisture barrier testing, laser elevation scanning, diamond grinding, and self-levelling compound application.' },
    { num: '03', title: 'Precision Master Laying', desc: 'Laser-guided block alignment, bookmatched slab setting, and custom brass threshold mitring.' },
    { num: '04', title: 'Hand-Finishing & Quality Signoff', desc: 'Diamond crystallisation, organic hardwax buffing, comprehensive warranty documentation, and care kit handover.' },
  ];

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-3 block">
            Capabilities & Services
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] tracking-tight leading-tight">
            Specialist flooring services, <span className="font-serif-italic">delivered with precision.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#545041] mt-6 leading-relaxed">
            From historic parquet restoration to contemporary large-format marble laying and architectural microcement, we offer end-to-end expertise.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 border-t border-[#DFDBCB] space-y-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-3xl p-8 sm:p-10 lg:p-12 transition-all hover:shadow-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="font-serif-heading text-4xl text-[#3d2b1f] block mb-2">
                  0{index + 1}
                </span>
                <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C] mb-4">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-[#605C50] leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-semibold px-5 py-2.5 rounded-full transition-all"
                >
                  <span>Explore Service Details</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="lg:col-span-7 bg-[#ECE8DC] rounded-2xl p-6 sm:p-8">
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-4">
                  Key Scope of Work & Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#474337]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3d2b1f] mt-1.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="py-16 border-t border-[#DFDBCB]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-2 block">
            Methodology
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C]">
            The Four-Stage <span className="font-serif-italic">Installation Standard</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div key={st.num} className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-6">
              <span className="font-serif-heading text-3xl text-[#3d2b1f] block mb-3">{st.num}</span>
              <h3 className="font-serif-heading text-lg text-[#231F1C] mb-2">{st.title}</h3>
              <p className="text-xs text-[#605C50] leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

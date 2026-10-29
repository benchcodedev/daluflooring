import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-8 pb-4">
        <Link to="/services" className="text-xs text-[#737063] hover:text-[#231F1C] transition-colors flex items-center gap-1">
          <span>←</span>
          <span>Back to all services</span>
        </Link>
      </div>

      <section className="pt-6 pb-12">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-3 block">
            Specialist Discipline
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-[#545041] mt-6 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-[#DFDBCB]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 bg-[#FAF7EE] border border-[#DFDBCB] rounded-3xl p-8 sm:p-10">
            <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#231F1C] mb-6">
              Scope of Works & Deliverables
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#474337] pb-3 border-b border-[#E6E1D2] last:border-b-0">
                  <span className="w-5 h-5 rounded-full bg-[#3d2b1f] text-[#FAF7EE] flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#DFDBCB] flex flex-wrap gap-4 items-center">
              <Link
                to="/quote"
                className="bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-semibold px-6 py-3 rounded-full transition-all shadow-md"
              >
                Book a Free Consultation & Quote →
              </Link>
              <Link
                to="/contact"
                className="border border-[#737063] hover:border-[#231F1C] text-[#231F1C] text-xs font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Inquire via Mayfair Studio
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-6">
              <h3 className="font-serif-heading text-xl text-[#231F1C] mb-3">
                Other Capabilities
              </h3>
              <ul className="space-y-2 text-xs">
                {services
                  .filter((s) => s.slug !== slug)
                  .map((other) => (
                    <li key={other.id}>
                      <Link
                        to={`/services/${other.slug}`}
                        className="block py-2 px-3 rounded-xl hover:bg-[#ECE8DC] text-[#474337] hover:text-[#231F1C] transition-colors"
                      >
                        {other.title} →
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="bg-[#ECE8DC] rounded-2xl p-6 text-xs text-[#545041] space-y-3">
              <div className="font-semibold text-[#231F1C] uppercase tracking-wider text-[10px]">
                Guaranteed Warranty
              </div>
              <p>
                All installations are backed by our 10-year master craftsmanship guarantee and full manufacturer backing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

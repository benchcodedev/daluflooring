import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const preselectedSlug = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Residential',
    productSlug: preselectedSlug,
    areaM2: '',
    timeline: 'Within 1-3 months',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  useEffect(() => {
    if (preselectedSlug) {
      setFormData((prev) => ({ ...prev, productSlug: preselectedSlug }));
    }
  }, [preselectedSlug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'DALU-QUOTE-' + Math.floor(1000 + Math.random() * 9000);
    setRefNumber(randomRef);
    setSubmitted(true);
  };

  const selectedProduct = products.find((p) => p.slug === formData.productSlug);

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-3 block">
            Itemized Estimations
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] tracking-tight leading-tight">
            Book a Free Quote & <span className="font-serif-italic">Laser Survey.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#545041] mt-5 leading-relaxed">
            Provide your project specifications below to receive an architectural estimate covering material supply, subfloor leveling, and master installation.
          </p>
        </div>
      </section>

      {/* Form / Success Screen */}
      <section className="py-10 border-t border-[#DFDBCB]">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-3xl p-10 sm:p-12 text-center shadow-sm space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#3d2b1f] text-[#FAF7EE] flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#737063] block mb-1">
                  Submission Confirmed
                </span>
                <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C]">
                  Your Quote Request Has Been Dispatched
                </h2>
              </div>

              <div className="bg-[#ECE8DC] rounded-2xl p-4 text-xs font-mono text-[#3d2b1f]">
                Reference ID: <span className="font-bold">{refNumber}</span>
              </div>

              <p className="text-sm text-[#545041] leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. A dedicated project director from our Mayfair team has been assigned to your quotation. We will review your area specifications and contact you at <strong>{formData.email}</strong> within 24 hours.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 justify-center">
                <Link
                  to="/"
                  className="bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-semibold px-6 py-3 rounded-full transition-all"
                >
                  Return to Home →
                </Link>
                <Link
                  to="/flooring-types"
                  className="border border-[#737063] text-[#231F1C] text-xs font-semibold px-6 py-3 rounded-full hover:border-[#231F1C] transition-colors"
                >
                  Browse More Surfaces
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-3xl p-8 sm:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Pre-selected Product Alert */}
                {selectedProduct && (
                  <div className="bg-[#ECE8DC] border border-[#DFDBCB] rounded-2xl p-4 flex items-center gap-4">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="text-xs">
                      <span className="text-[#737063] block">Selected Surface:</span>
                      <strong className="text-sm text-[#231F1C] block">{selectedProduct.name}</strong>
                      <span className="text-[#8A8679]">{selectedProduct.formattedPrice} {selectedProduct.priceUnit}</span>
                    </div>
                  </div>
                )}

                {/* Personal Information */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-4">
                    1. Contact Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#474337] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lord Alistair Sterling"
                        className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#474337] mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@residence.co.uk"
                          className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#474337] mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 7123 456789"
                          className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Specifics */}
                <div className="pt-4 border-t border-[#E6E1D2]">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-4">
                    2. Project Scope & Surface Choice
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#474337] mb-1">Property Type</label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                        >
                          <option value="Residential">Residential Penthouse / Villa</option>
                          <option value="Commercial">Commercial / Retail Flagship</option>
                          <option value="Hospitality">Hotel / Restaurant</option>
                          <option value="Development">Multi-Unit Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#474337] mb-1">Flooring Material</label>
                        <select
                          value={formData.productSlug}
                          onChange={(e) => setFormData({ ...formData, productSlug: e.target.value })}
                          className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                        >
                          <option value="">General Consultation / Not sure yet</option>
                          {products.map((p) => (
                            <option key={p.slug} value={p.slug}>
                              {p.name} ({p.formattedPrice}{p.priceUnit})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#474337] mb-1">Estimated Area (m²) *</label>
                        <input
                          type="number"
                          required
                          min="1"
                          value={formData.areaM2}
                          onChange={(e) => setFormData({ ...formData, areaM2: e.target.value })}
                          placeholder="e.g. 150"
                          className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#474337] mb-1">Expected Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                        >
                          <option value="Immediate">Immediate (under 1 month)</option>
                          <option value="Within 1-3 months">Within 1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="Planning phase">Planning / Architecture Stage</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#474337] mb-1">Additional Project Details & Notes</label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Please include details such as subfloor heating, floor elevation, or access constraints..."
                        className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-semibold py-4 px-6 rounded-full transition-all shadow-md hover:-translate-y-0.5"
                >
                  Submit Formal Quote Request →
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

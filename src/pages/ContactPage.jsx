import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-3 block">
            Studio & Concierge
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] tracking-tight leading-tight">
            Connect with our <span className="font-serif-italic">specialist team.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#545041] mt-5 leading-relaxed">
            Schedule a private viewing at our Mayfair studio, request material swatch samples, or speak directly with our senior flooring consultant.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 border-t border-[#DFDBCB]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-3xl p-8 space-y-6">
              <h2 className="font-serif-heading text-2xl text-[#231F1C]">
                Mayfair Flagship Studio
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#474337]">
                <div>
                  <span className="text-[#8A8679] block uppercase tracking-wider text-[10px] font-bold mb-1">Address</span>
                  <p className="font-medium text-[#231F1C] leading-relaxed">{siteConfig.contact.address}</p>
                </div>

                <div>
                  <span className="text-[#8A8679] block uppercase tracking-wider text-[10px] font-bold mb-1">Direct Telephone</span>
                  <p className="font-medium text-[#231F1C]">{siteConfig.contact.phoneDisplay}</p>
                </div>

                <div>
                  <span className="text-[#8A8679] block uppercase tracking-wider text-[10px] font-bold mb-1">Concierge Email</span>
                  <p className="font-medium text-[#231F1C]">{siteConfig.contact.email}</p>
                </div>

                <div>
                  <span className="text-[#8A8679] block uppercase tracking-wider text-[10px] font-bold mb-1">Hours of Service</span>
                  <p className="font-medium text-[#231F1C] leading-relaxed">{siteConfig.contact.hours}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DFDBCB]">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Halo Dalu Flooring, saya ingin menjadwalkan kunjungan studio.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-semibold py-3 px-6 rounded-full transition-all shadow-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-3xl p-8 sm:p-10">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#231F1C] mb-2">
                Send an Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#605C50] mb-8">
                Complete the form below and an architectural consultant will respond within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-[#E8E6DC] border border-[#DFDBCB] rounded-2xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#3d2b1f] text-[#FAF7EE] flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-serif-heading text-2xl text-[#231F1C]">Message Received</h3>
                  <p className="text-xs sm:text-sm text-[#545041] max-w-sm mx-auto">
                    Thank you, {formData.name}. Our Mayfair studio team has received your message and will be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-4 inline-block text-xs font-semibold text-[#3d2b1f] underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#474337] mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#474337] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@studio.com"
                        className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#474337] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7..."
                        className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#474337] mb-1">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Private Viewing / Material Consultation"
                        className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#474337] mb-1">Message / Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any information regarding room sizes, preferred stone or parquet, and timeline..."
                      className="w-full bg-[#ECE8DC] border border-[#DFDBCB] rounded-xl px-4 py-2.5 text-xs text-[#231F1C] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-semibold py-3.5 px-6 rounded-full transition-all shadow-md hover:-translate-y-0.5"
                  >
                    Send Direct Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

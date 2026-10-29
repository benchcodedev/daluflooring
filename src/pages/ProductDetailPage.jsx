import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { siteConfig } from '../data/siteConfig';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/flooring-types" replace />;
  }

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-8 pb-4">
        <Link
          to="/flooring-types"
          className="text-xs text-[#737063] hover:text-[#231F1C] transition-colors flex items-center gap-1"
        >
          <span>←</span>
          <span>Back to Flooring Types</span>
        </Link>
      </div>

      <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Big Square Texture Image */}
        <div className="lg:col-span-6">
          <div className="aspect-square w-full rounded-3xl overflow-hidden bg-[#ECE8DC] border border-[#DFDBCB] shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Specifications & CTA */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#737063] block mb-2">
              {product.categoryName}
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-5xl text-[#231F1C] tracking-tight">
              {product.name}
            </h1>
          </div>

          {/* Price Box */}
          <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-5 flex items-baseline justify-between">
            <div>
              <span className="text-xs text-[#8A8679] block mb-1">Architectural Price</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#231F1C] tracking-tight">
                  {product.formattedPrice}
                </span>
                <span className="text-sm text-[#231F1C]">{product.priceUnit}</span>
                <span className="text-xs text-[#8A8679] ml-1">{product.priceNote}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-[#E8E6DC] text-[#3d2b1f] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                In Stock • Calibrated
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#545041] leading-relaxed">
            {product.description}
          </p>

          {/* Technical Dimensions Table */}
          <div className="bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-5 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#737063]">
              Technical Dimensions & Surface Attributes
            </h2>

            <div className="grid grid-cols-3 gap-3 text-center bg-[#ECE8DC] rounded-xl p-3">
              <div>
                <span className="text-[10px] text-[#737063] uppercase block">Width ↔</span>
                <span className="font-mono font-bold text-sm text-[#231F1C]">{product.widthMm} mm</span>
              </div>
              <div>
                <span className="text-[10px] text-[#737063] uppercase block">Length ↕</span>
                <span className="font-mono font-bold text-sm text-[#231F1C]">{product.lengthMm} mm</span>
              </div>
              <div>
                <span className="text-[10px] text-[#737063] uppercase block">Thickness ↓</span>
                <span className="font-mono font-bold text-sm text-[#231F1C]">{product.thicknessMm} mm</span>
              </div>
            </div>

            <div className="space-y-2 text-xs pt-1">
              <div className="flex justify-between py-1.5 border-b border-[#E6E1D2]">
                <span className="text-[#8A8679]">Primary Material</span>
                <span className="font-semibold text-[#231F1C]">{product.material}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E6E1D2]">
                <span className="text-[#8A8679]">Surface Finish</span>
                <span className="font-semibold text-[#231F1C]">{product.finish}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#8A8679]">Color Palette</span>
                <span className="font-semibold text-[#231F1C]">{product.colorTone}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to={`/quote?product=${product.slug}`}
              className="flex-1 text-center bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] font-semibold text-sm px-6 py-3.5 rounded-full transition-all shadow-md hover:-translate-y-0.5"
            >
              Request Quote with {product.name} →
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Halo Dalu Flooring, saya ingin menanyakan produk ${product.name} (${product.formattedPrice}${product.priceUnit}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#737063] hover:border-[#231F1C] text-[#231F1C] font-semibold text-sm px-6 py-3.5 rounded-full transition-colors flex items-center justify-center gap-1.5"
            >
              <span>WhatsApp Specialist</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

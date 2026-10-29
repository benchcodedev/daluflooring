import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, showQuoteBtn = false }) {
  return (
    <div className="group bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-3.5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_28px_-6px_rgba(45,38,30,0.10)] hover:-translate-y-1">

      {/* 1. Pure Clean Square Texture Image (Rounded-xl) */}
      <Link to={`/flooring-types/${product.slug}`} className="block relative aspect-square w-full rounded-xl overflow-hidden bg-[#ECE8DC] focus:outline-none">
        <img
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </Link>

      {/* 2. Product Name & Price Row */}
      <div className="mt-3 px-0.5">
        <div className="flex items-baseline justify-between gap-2">
          <Link
            to={`/flooring-types/${product.slug}`}
            className="text-[14.5px] font-medium text-[#231F1C] hover:text-[#3d2b1f] transition-colors truncate"
          >
            {product.name}
          </Link>
          <div className="text-right shrink-0 whitespace-nowrap">
            <span className="font-bold text-[14.5px] text-[#231F1C] tracking-tight">
              {product.formattedPrice}
            </span>
            <span className="text-[12px] font-normal text-[#231F1C]">
              {product.priceUnit}
            </span>
            <span className="text-[10.5px] font-normal text-[#8A8679] ml-0.5">
              {product.priceNote}
            </span>
          </div>
        </div>

        {/* 3. Thin Divider Line */}
        <div className="h-px bg-[#E6E1D2] my-2" />

        {/* 4. Dimensions Row with Exact 3 Icons */}
        <div className="flex items-center justify-between text-[11.5px] text-[#737063]">
          <span className="font-normal text-[#737063]">Dimensions:</span>

          <div className="flex items-center gap-2.5 text-[#5C584C] font-mono text-[11px]">
            {/* Width ↔ */}
            <div className="flex items-center gap-0.5" title="Width">
              <span className="text-[11px] text-[#8A8679] font-sans">↔</span>
              <span>{product.widthMm}mm</span>
            </div>

            {/* Length ↕ */}
            <div className="flex items-center gap-0.5" title="Length">
              <span className="text-[11px] text-[#8A8679] font-sans">↕</span>
              <span>{product.lengthMm}mm</span>
            </div>

            {/* Thickness ↓ */}
            <div className="flex items-center gap-0.5" title="Thickness">
              <span className="text-[11px] text-[#8A8679] font-sans">↓</span>
              <span>{product.thicknessMm}mm</span>
            </div>
          </div>
        </div>

        {showQuoteBtn && (
          <div className="mt-3 pt-2.5 border-t border-[#E6E1D2] flex items-center justify-between">
            <Link
              to={`/quote?product=${product.slug}`}
              className="w-full text-center py-2 bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-medium rounded-full transition-colors"
            >
              Request Quote →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

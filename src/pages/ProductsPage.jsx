import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        currentCategory === 'all' || p.categorySlug === currentCategory;
      const matchSearch =
        search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.material.toLowerCase().includes(search.toLowerCase()) ||
        p.colorTone.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [currentCategory, search]);

  const handleCategoryClick = (slug) => {
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-3 block">
            Product Catalog
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] tracking-tight leading-tight">
            Flooring Types & <span className="font-serif-italic">Bespoke Surfaces.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#545041] mt-5 leading-relaxed">
            Discover our curated range of calibrated natural marble, limestone, artisan European oak parquet, and architectural microcement finishes.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryClick(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 ${
                  currentCategory === cat.slug
                    ? 'bg-[#3d2b1f] text-[#FAF7EE] shadow-sm'
                    : 'bg-[#FAF7EE] border border-[#DFDBCB] text-[#605C50] hover:text-[#231F1C]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search texture, stone..."
              className="w-full bg-[#FAF7EE] border border-[#DFDBCB] rounded-full px-4 py-2 pl-9 text-xs text-[#231F1C] placeholder-[#8A8679] focus:outline-none focus:ring-1 focus:ring-[#3d2b1f]"
            />
            <svg
              className="w-4 h-4 text-[#8A8679] absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8 border-t border-[#DFDBCB]">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF7EE] rounded-3xl border border-[#DFDBCB]">
            <p className="text-base text-[#605C50]">No flooring products match your search or filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                handleCategoryClick('all');
              }}
              className="inline-block mt-3 text-xs font-semibold text-[#3d2b1f] underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuoteBtn={true} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

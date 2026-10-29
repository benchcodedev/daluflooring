import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <span className="font-serif-heading text-6xl sm:text-8xl text-[#3d2b1f] block mb-4">
        404
      </span>
      <h1 className="font-serif-heading text-3xl sm:text-4xl text-[#231F1C] mb-4">
        Surface Not Found
      </h1>
      <p className="text-sm text-[#545041] max-w-md mx-auto mb-8">
        The architectural page or specification you requested has been relocated or does not exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-semibold px-6 py-3 rounded-full transition-all shadow-md"
      >
        <span>Return to Home</span>
        <span>→</span>
      </Link>
    </div>
  );
}

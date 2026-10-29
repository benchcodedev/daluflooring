import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-8 pb-4">
        <Link to="/projects" className="text-xs text-[#737063] hover:text-[#231F1C] transition-colors flex items-center gap-1">
          <span>←</span>
          <span>Back to all projects</span>
        </Link>
      </div>

      <section className="pt-4 pb-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs text-[#737063] mb-3">
            <span className="uppercase tracking-widest font-bold text-[#3d2b1f]">{project.categoryName}</span>
            <span>•</span>
            <span>{project.location}</span>
            <span>•</span>
            <span className="font-mono">{project.year}</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] tracking-tight leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#D8D4C5] shadow-sm mb-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Specs & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16">
        <div className="lg:col-span-8 space-y-6">
          <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#231F1C]">
            Architectural Narrative & Execution
          </h2>
          <p className="text-base text-[#545041] leading-relaxed">
            {project.description}
          </p>
          <p className="text-base text-[#545041] leading-relaxed">
            Our team conducted extensive site assessments including subfloor moisture scans, structural decoupling underlays, and custom laser-mitred transitions to guarantee longevity without acoustic compromises.
          </p>

          <div className="pt-8 flex flex-wrap gap-4 items-center border-t border-[#DFDBCB]">
            <Link
              to="/quote"
              className="bg-[#3d2b1f] hover:bg-[#2b1e15] text-[#FAF7EE] text-xs font-semibold px-6 py-3 rounded-full transition-all shadow-md"
            >
              Discuss a Similar Project →
            </Link>
            <Link
              to="/flooring-types"
              className="border border-[#737063] hover:border-[#231F1C] text-[#231F1C] text-xs font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Explore Material Palette
            </Link>
          </div>
        </div>

        {/* Specs Box */}
        <div className="lg:col-span-4 bg-[#FAF7EE] border border-[#DFDBCB] rounded-2xl p-6 h-fit space-y-4">
          <h3 className="text-xs uppercase tracking-widest font-bold text-[#737063] border-b border-[#E6E1D2] pb-3">
            Commission Specifications
          </h3>
          <div className="space-y-3 text-xs">
            <div>
              <span className="text-[#8A8679] block">Surface Specified:</span>
              <span className="font-semibold text-[#231F1C]">{project.surface}</span>
            </div>
            <div>
              <span className="text-[#8A8679] block">Total Floor Area:</span>
              <span className="font-semibold text-[#231F1C]">{project.areaM2} m²</span>
            </div>
            <div>
              <span className="text-[#8A8679] block">Location:</span>
              <span className="font-semibold text-[#231F1C]">{project.location}</span>
            </div>
            <div>
              <span className="text-[#8A8679] block">Delivery Year:</span>
              <span className="font-semibold text-[#231F1C]">{project.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

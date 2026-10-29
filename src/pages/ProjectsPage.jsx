import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737063] mb-3 block">
            Portfolio Gallery
          </span>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#231F1C] tracking-tight leading-tight">
            Completed Projects & <span className="font-serif-italic">Installations.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#545041] mt-5 leading-relaxed">
            Explore curated commissions across prime residential penthouses, flagship boutique salons, and cultural spaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
          {['all', 'residential', 'commercial'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all capitalize ${
                filter === cat
                  ? 'bg-[#3d2b1f] text-[#FAF7EE] shadow-sm'
                  : 'bg-[#FAF7EE] border border-[#DFDBCB] text-[#605C50] hover:text-[#231F1C]'
              }`}
            >
              {cat === 'all' ? 'All Commissions' : `${cat} Projects`}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 border-t border-[#DFDBCB]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#D8D4C5] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7EE]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold text-[#231F1C] uppercase tracking-wider">
                  {project.categoryName}
                </div>
                <div className="absolute top-3 right-3 bg-[#231F1C]/80 text-[#FAF7EE] px-2 py-0.5 rounded text-[10px] font-mono">
                  {project.year}
                </div>
              </div>
              <div className="text-xs text-[#737063] mb-1">
                {project.location} • {project.areaM2} m²
              </div>
              <h3 className="font-serif-heading text-xl text-[#231F1C] group-hover:text-[#3d2b1f] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-[#605C50] mt-1 line-clamp-2">
                Surface: {project.surface}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

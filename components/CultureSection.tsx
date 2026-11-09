'use client';

import React from 'react';
import { Article, GENERAL_ARTICLES } from '@/data/articles';
import { ArrowRight } from 'lucide-react';

interface CultureSectionProps {
  onSelectArticle: (article: Article) => void;
}

export default function CultureSection({ onSelectArticle }: CultureSectionProps) {
  return (
    <section className="w-full my-6 sm:my-8">
      {/* Broadsheet double rule */}
      <div className="w-full broadsheet-double-rule mb-3 sm:mb-4" />

      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-2 mb-4 sm:mb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0066FF] block mb-1">
            Caderno Especial de Fim de Semana
          </span>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#0D1B2A]">
            Cultura, Letras & Ciências Nacionais
          </h3>
        </div>
        <span className="text-[10px] sm:text-xs text-[#74777d] uppercase tracking-wider font-semibold">
          Edição Comemorativa
        </span>
      </div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {GENERAL_ARTICLES.map((art) => (
          <article
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="flex flex-col bg-white border border-[#E5E7EB] hover:border-[#0D1B2A] transition-colors cursor-pointer group"
          >
            {/* Image frame */}
            {art.imageUrl && (
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-[#E5E7EB]">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-[#0D1B2A]/90 text-white text-[9px] uppercase font-bold tracking-wider px-2 py-0.5">
                  {art.category}
                </div>
              </div>
            )}

            {/* Content body */}
            <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[10px] text-[#74777d] uppercase font-semibold mb-1">
                  <span>{art.dateline}</span>
                  <span>·</span>
                  <span>{art.readTime}</span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug">
                  {art.title}
                </h4>

                <p className="font-sans text-xs text-[#44474c] mt-2 line-clamp-3 leading-relaxed">
                  {art.subtitle}
                </p>
              </div>

              {/* Byline & Read more */}
              <div className="pt-3 mt-3 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] text-[#74777d]">
                <span className="font-medium text-[#0D1B2A] truncate pr-2">Por {art.author.name}</span>
                <span className="text-[#0066FF] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 shrink-0 min-h-[32px]">
                  Ler <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

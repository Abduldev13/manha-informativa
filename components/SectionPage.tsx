'use client';

import React from 'react';
import { Article, SectionContent, SECTION_CONTENTS } from '@/data/articles';
import { KoffeinVideoAd, GrecyEventsAd } from '@/components/Advertisements';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SectionPageProps {
  sectionId: string;
  onSelectArticle: (article: Article) => void;
  onBackToHome: () => void;
  fontSizeClass: string;
}

export default function SectionPage({
  sectionId,
  onSelectArticle,
  onBackToHome,
  fontSizeClass
}: SectionPageProps) {
  const content: SectionContent | undefined = SECTION_CONTENTS[sectionId];

  if (!content) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-[#74777d]">Secção em atualização editorial.</p>
        <button
          onClick={onBackToHome}
          className="mt-4 px-4 py-2.5 bg-[#0D1B2A] text-white text-xs font-bold uppercase min-h-[44px]"
        >
          Voltar à Primeira Página
        </button>
      </div>
    );
  }

  const { sectionTitle, sectionSubtitle, leadArticle, articles } = content;

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      
      {/* Broadsheet Section Header Plate */}
      <div className="border-b-2 border-[#0D1B2A] pb-3 sm:pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0066FF] hover:text-[#0D1B2A] transition-colors min-h-[36px] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à Primeira Página</span>
          </button>

          <span className="text-[10px] sm:text-[11px] font-mono text-[#74777d] uppercase tracking-wider">
            Caderno Especial · Domingo, 8 de Novembro de 2026
          </span>
        </div>

        <div className="broadsheet-double-rule py-1 mb-2 sm:mb-3" />

        <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D1B2A] uppercase">
          {sectionTitle}
        </h1>

        <p className="font-serif italic text-sm sm:text-base lg:text-lg text-[#44474c] mt-1 max-w-3xl leading-relaxed">
          {sectionSubtitle}
        </p>
      </div>

      {/* Main Section Grid: 12 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left 8 Columns: Section Lead Story */}
        <div className="lg:col-span-8 column-divider-r pr-0 lg:pr-8 space-y-5 sm:space-y-6">
          
          <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066FF]">
              {leadArticle.category}
            </span>
            <span className="text-[#c4c6cc]">/</span>
            <span className="bg-[#0D1B2A] text-white text-[10px] font-bold uppercase px-1.5 py-0.5">
              Grande Destaque
            </span>
          </div>

          <div 
            onClick={() => onSelectArticle(leadArticle)}
            className="cursor-pointer group space-y-2.5 sm:space-y-3"
          >
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-tight">
              {leadArticle.title}
            </h2>

            <p className="font-serif italic text-base sm:text-lg text-[#44474c] leading-relaxed">
              {leadArticle.subtitle}
            </p>
          </div>

          {/* Byline */}
          <div className="flex flex-wrap items-center justify-between text-xs text-[#74777d] py-2 border-y border-[#E5E7EB] gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#0D1B2A] text-white text-xs font-bold flex items-center justify-center font-serif shrink-0">
                {leadArticle.author.avatar}
              </div>
              <span className="font-bold text-[#0D1B2A]">{leadArticle.author.name}</span>
              <span className="hidden sm:inline">· {leadArticle.dateline}</span>
            </div>
            <span>{leadArticle.updatedAt} · {leadArticle.readTime}</span>
          </div>

          {/* Lead Photo */}
          {leadArticle.imageUrl && (
            <div 
              onClick={() => onSelectArticle(leadArticle)}
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-900 border border-[#E5E7EB] overflow-hidden cursor-pointer group"
            >
              <img
                src={leadArticle.imageUrl}
                alt={leadArticle.title}
                className="w-full h-full object-cover object-[center_30%] group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              {leadArticle.imageCaption && (
                <div className="p-2.5 bg-[#f1f3ff] border-t border-[#E5E7EB] text-xs font-serif italic text-[#44474c]">
                  {leadArticle.imageCaption}
                </div>
              )}
            </div>
          )}

          {/* Drop cap opening text */}
          <div className="space-y-4">
            <p className={`editorial-drop-cap font-sans ${fontSizeClass} text-[#111827] leading-relaxed`}>
              {leadArticle.leadParagraph}
            </p>

            <button
              onClick={() => onSelectArticle(leadArticle)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#0D1B2A] text-white hover:bg-[#0066FF] transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer min-h-[44px]"
            >
              <span>Ler Artigo Integral</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Commercial Ad 1: Koffein Video Ad embedded directly inside section flow */}
          <div className="pt-4 sm:pt-6">
            <KoffeinVideoAd />
          </div>

        </div>

        {/* Right 4 Columns: Secondary Articles & Sidebar Ad */}
        <div className="lg:col-span-4 space-y-5 sm:space-y-6">
          
          <div className="border-b-2 border-[#0D1B2A] pb-1">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#0D1B2A]">
              Mais Notícias desta Secção
            </h3>
          </div>

          <div className="divide-y divide-[#E5E7EB] space-y-3.5 sm:space-y-4">
            {articles.map((art) => (
              <article
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="pt-3.5 sm:pt-4 first:pt-0 cursor-pointer group space-y-1.5"
              >
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#0066FF]">
                  <span>{art.category}</span>
                  <span className="text-[#c4c6cc]">·</span>
                  <span className="text-[#74777d]">{art.readTime}</span>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug">
                  {art.title}
                </h4>

                <p className="font-sans text-xs text-[#44474c] line-clamp-3 leading-relaxed">
                  {art.subtitle}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#74777d] pt-1">
                  <span>Por {art.author.name}</span>
                  <span className="text-[#0066FF] font-semibold group-hover:underline flex items-center gap-0.5 min-h-[32px]">
                    Ler mais →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Grecy Events Ad in the sidebar */}
          <div className="pt-2 sm:pt-4">
            <GrecyEventsAd />
          </div>

        </div>

      </div>

    </div>
  );
}

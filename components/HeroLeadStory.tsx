'use client';

import React, { useState } from 'react';
import { Article, PRIMARY_LEAD_STORY, SECONDARY_LEAD_STORY, ARTICLE_DROGAS_BELENENSES, ARTICLE_DETENTOS_ARREPENDIDOS, ARTICLE_UCM_VISITA_PENITENCIARIO } from '@/data/articles';
import { Volume2, VolumeX, Bookmark, Share2, ArrowRight, Play, Check } from 'lucide-react';

interface HeroLeadStoryProps {
  onSelectArticle: (article: Article) => void;
  fontSizeClass: string;
}

export default function HeroLeadStory({ onSelectArticle, fontSizeClass }: HeroLeadStoryProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="w-full flex flex-col space-y-5 sm:space-y-6">
      
      {/* Kicker Category & Status */}
      <div className="flex items-center justify-between gap-2 border-b border-[#E5E7EB] pb-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0066FF]">
            {PRIMARY_LEAD_STORY.category}
          </span>
          <span className="text-[#c4c6cc]">/</span>
          <span className="bg-[#0D1B2A] text-white text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5">
            EXCLUSIVO
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#74777d]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSaved(!saved);
            }}
            className="hover:text-[#0D1B2A] transition-colors flex items-center gap-1 cursor-pointer min-h-[32px]"
            title="Guardar artigo"
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-[#0D1B2A] text-[#0D1B2A]' : ''}`} />
            <span className="hidden sm:inline text-[11px]">{saved ? 'Guardado' : 'Guardar'}</span>
          </button>

          <button
            onClick={handleShare}
            className="hover:text-[#0D1B2A] transition-colors flex items-center gap-1 cursor-pointer min-h-[32px]"
            title="Copiar ligação"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[11px]">{copied ? 'Copiado!' : 'Partilhar'}</span>
          </button>
        </div>
      </div>

      {/* Primary Headline */}
      <div className="space-y-2.5 sm:space-y-3 cursor-pointer group" onClick={() => onSelectArticle(PRIMARY_LEAD_STORY)}>
        <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0D1B2A] leading-[1.14] tracking-[-0.02em] group-hover:text-[#0066FF] transition-colors">
          {PRIMARY_LEAD_STORY.title}
        </h2>
        
        {/* Subdeck */}
        <p className="font-serif italic text-base sm:text-xl text-[#44474c] leading-relaxed">
          {PRIMARY_LEAD_STORY.subtitle}
        </p>
      </div>

      {/* Author Byline & Dateline */}
      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 py-2 border-y border-[#E5E7EB] text-[11px] sm:text-[12px] text-[#44474c]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#0D1B2A] text-white font-serif font-bold text-xs flex items-center justify-center shrink-0">
            {PRIMARY_LEAD_STORY.author.avatar}
          </div>
          <div>
            <span className="font-bold text-[#0D1B2A] tracking-wide">{PRIMARY_LEAD_STORY.author.name}</span>
            <span className="text-[#74777d] ml-1.5 hidden sm:inline">· {PRIMARY_LEAD_STORY.author.affiliation}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#74777d]">
          <span>{PRIMARY_LEAD_STORY.readTime}</span>
          <span>·</span>
          <span>{PRIMARY_LEAD_STORY.updatedAt}</span>
        </div>
      </div>

      {/* Large Photographic Window with zero border radius */}
      <div 
        className="relative w-full overflow-hidden bg-[#0F1C2C] border border-[#E5E7EB] cursor-pointer group"
        onClick={() => onSelectArticle(PRIMARY_LEAD_STORY)}
      >
        <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-900">
          <img
            src={PRIMARY_LEAD_STORY.imageUrl}
            alt={PRIMARY_LEAD_STORY.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Broadcast live photo indicator badge */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#0D1B2A]/90 backdrop-blur-xs text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-2 py-1 flex items-center gap-1.5 border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
            <span>Nacala-Porto · Fotoeditorial</span>
          </div>

          {/* Overlay Audio Quick Trigger */}
          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-[#0D1B2A]/90 backdrop-blur-xs text-white text-[10px] sm:text-[11px] px-2 py-1 sm:px-2.5 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 border border-white/20">
            <Play className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00D2FF] fill-[#00D2FF]" />
            <span className="font-mono text-[11px] sm:text-xs">{PRIMARY_LEAD_STORY.audioDuration}</span>
          </div>
        </div>

        {/* Caption */}
        <p className="p-2.5 sm:p-3 text-[11px] sm:text-[12px] font-serif text-[#44474c] italic bg-[#f1f3ff] border-t border-[#E5E7EB] leading-normal">
          {PRIMARY_LEAD_STORY.imageCaption}
        </p>
      </div>

      {/* Audio Narrator Bar */}
      <div className="bg-[#f1f3ff] border border-[#E5E7EB] p-2.5 sm:p-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0D1B2A] text-white hover:bg-[#0066FF] transition-colors flex items-center justify-center shrink-0 cursor-pointer min-h-[36px] min-w-[36px]"
            aria-label={isPlayingAudio ? "Pausar leitura de áudio" : "Ouvir áudio da reportagem"}
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <div>
            <div className="text-[11px] sm:text-xs font-bold text-[#0D1B2A] uppercase tracking-wider flex items-center gap-1.5">
              <span>Ouvir Reportagem em Áudio</span>
              {isPlayingAudio && <span className="text-[10px] text-[#0066FF] font-semibold animate-pulse">(Em reprodução...)</span>}
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#74777d]">
              Leitura sintetizada editorial · {PRIMARY_LEAD_STORY.audioDuration}
            </div>
          </div>
        </div>

        {/* Waveform / progress bar */}
        <div className="hidden sm:flex items-center gap-1 w-28 sm:w-36 h-6 px-2 bg-white border border-[#E5E7EB]">
          {[40, 70, 30, 90, 60, 45, 85, 55, 100, 35, 65, 80, 50, 75, 95].map((h, i) => (
            <span
              key={i}
              className={`w-1 transition-all ${
                isPlayingAudio ? 'bg-[#0066FF]' : 'bg-[#c4c6cc]'
              }`}
              style={{ height: `${isPlayingAudio ? (h % 80) + 20 : 30}%` }}
            />
          ))}
        </div>
      </div>

      {/* Lead Paragraph with classic drop-cap */}
      <div className="space-y-4">
        <p className={`editorial-drop-cap font-sans ${fontSizeClass} text-[#111827] leading-relaxed`}>
          {PRIMARY_LEAD_STORY.leadParagraph}
        </p>

        {/* Read full article button */}
        <div className="pt-1 sm:pt-2">
          <button
            onClick={() => onSelectArticle(PRIMARY_LEAD_STORY)}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#0D1B2A] text-white hover:bg-[#0066FF] transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer min-h-[44px]"
          >
            <span>Ler Investigação Completa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Broadsheet Section Break Line */}
      <div className="w-full broadsheet-double-rule-light my-3 sm:my-4" />

      {/* SPECIAL NAMPULA DOSSIER BLOCK */}
      <div className="border-2 border-[#0D1B2A] p-3 sm:p-5 bg-[#f9f9ff] space-y-5 sm:space-y-6">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#0D1B2A] pb-2 gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-[#ba1a1a] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
              INVESTIGAÇÃO NAMPULA
            </span>
            <span className="text-xs font-serif font-bold text-[#0D1B2A]">
              UCM · Bairro dos Belenenses · Penitenciária Regional Norte
            </span>
          </div>
          <span className="text-[10px] text-[#74777d] uppercase font-mono">
            Edição Especial Nampula
          </span>
        </div>

        {/* Story 1: Consumo e Tráfico de Drogas no Bairro dos Belenenses */}
        <div 
          onClick={() => onSelectArticle(ARTICLE_DROGAS_BELENENSES)}
          className="cursor-pointer group space-y-2.5 sm:space-y-3 pb-5 sm:pb-6 border-b border-[#E5E7EB]"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#ba1a1a]">
            <span>{ARTICLE_DROGAS_BELENENSES.category}</span>
            <span className="text-[#c4c6cc]">·</span>
            <span>EXCLUSIVO LOCAL</span>
          </div>

          <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug">
            {ARTICLE_DROGAS_BELENENSES.title}
          </h3>

          <p className="font-serif italic text-xs xs:text-sm sm:text-base text-[#44474c] leading-relaxed">
            {ARTICLE_DROGAS_BELENENSES.subtitle}
          </p>

          {/* Documentary Photo: Bairro dos Belenenses */}
          {ARTICLE_DROGAS_BELENENSES.imageUrl && (
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-900 border border-[#E5E7EB] overflow-hidden">
              <img
                src={ARTICLE_DROGAS_BELENENSES.imageUrl}
                alt={ARTICLE_DROGAS_BELENENSES.title}
                className="w-full h-full object-cover object-[center_30%] group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-[#0D1B2A]/90 text-white text-[9px] sm:text-[10px] uppercase font-bold px-2 py-0.5 border border-white/20">
                Nampula · Bairro dos Belenenses
              </div>
            </div>
          )}

          {ARTICLE_DROGAS_BELENENSES.imageCaption && (
            <p className="text-[11px] sm:text-xs font-serif italic text-[#44474c] bg-[#f1f3ff] p-2 border border-[#E5E7EB]">
              {ARTICLE_DROGAS_BELENENSES.imageCaption}
            </p>
          )}

          <p className="font-sans text-xs sm:text-sm text-[#141b2b] leading-relaxed">
            {ARTICLE_DROGAS_BELENENSES.leadParagraph}
          </p>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#74777d] pt-1 gap-2">
            <span>Por {ARTICLE_DROGAS_BELENENSES.author.name} · {ARTICLE_DROGAS_BELENENSES.dateline}</span>
            <span className="text-[#0066FF] font-bold group-hover:underline flex items-center gap-1 min-h-[32px]">
              Ler reportagem completa <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Story 2: Estudantes da UCM Realizam Visita ao Estabelecimento Penitenciário Regional Norte, em Nampula */}
        <div 
          onClick={() => onSelectArticle(ARTICLE_UCM_VISITA_PENITENCIARIO)}
          className="cursor-pointer group space-y-2.5 sm:space-y-3 pb-5 sm:pb-6 border-b border-[#E5E7EB]"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#0066FF]">
            <span>{ARTICLE_UCM_VISITA_PENITENCIARIO.category}</span>
            <span className="text-[#c4c6cc]">·</span>
            <span>UCM NAMPULA</span>
          </div>

          <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug">
            {ARTICLE_UCM_VISITA_PENITENCIARIO.title}
          </h3>

          <p className="font-serif italic text-xs xs:text-sm sm:text-base text-[#44474c] leading-relaxed">
            {ARTICLE_UCM_VISITA_PENITENCIARIO.subtitle}
          </p>

          {/* Documentary Photo: UCM Students in front of Penitenciário Regional Norte sign */}
          {ARTICLE_UCM_VISITA_PENITENCIARIO.imageUrl && (
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-900 border border-[#E5E7EB] overflow-hidden">
              <img
                src={ARTICLE_UCM_VISITA_PENITENCIARIO.imageUrl}
                alt={ARTICLE_UCM_VISITA_PENITENCIARIO.title}
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-[#0D1B2A]/90 text-white text-[9px] sm:text-[10px] uppercase font-bold px-2 py-0.5 border border-white/20">
                UCM · Penitenciário Regional Norte - NPL
              </div>
            </div>
          )}

          {ARTICLE_UCM_VISITA_PENITENCIARIO.imageCaption && (
            <p className="text-[11px] sm:text-xs font-serif italic text-[#44474c] bg-[#f1f3ff] p-2 border border-[#E5E7EB]">
              {ARTICLE_UCM_VISITA_PENITENCIARIO.imageCaption}
            </p>
          )}

          <p className="font-sans text-xs sm:text-sm text-[#141b2b] leading-relaxed">
            {ARTICLE_UCM_VISITA_PENITENCIARIO.leadParagraph}
          </p>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#74777d] pt-1 gap-2">
            <span>Por {ARTICLE_UCM_VISITA_PENITENCIARIO.author.name} · {ARTICLE_UCM_VISITA_PENITENCIARIO.dateline}</span>
            <span className="text-[#0066FF] font-bold group-hover:underline flex items-center gap-1 min-h-[32px]">
              Ler notícia da UCM <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Story 3: Detentos Arrependidos na Cadeia de Nampula */}
        <div 
          onClick={() => onSelectArticle(ARTICLE_DETENTOS_ARREPENDIDOS)}
          className="cursor-pointer group space-y-2.5 sm:space-y-3 pt-2"
        >
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#0050cc]">
            <span>{ARTICLE_DETENTOS_ARREPENDIDOS.category}</span>
            <span className="text-[#c4c6cc]">·</span>
            <span>REINSERÇÃO CÍVICA</span>
          </div>

          <h3 className="font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug">
            {ARTICLE_DETENTOS_ARREPENDIDOS.title}
          </h3>

          <p className="font-serif italic text-xs xs:text-sm sm:text-base text-[#44474c] leading-relaxed">
            {ARTICLE_DETENTOS_ARREPENDIDOS.subtitle}
          </p>

          {/* Documentary Photo: Estabelecimento Penitenciário Regional de Nampula */}
          {ARTICLE_DETENTOS_ARREPENDIDOS.imageUrl && (
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900 border border-[#E5E7EB] overflow-hidden">
              <img
                src={ARTICLE_DETENTOS_ARREPENDIDOS.imageUrl}
                alt={ARTICLE_DETENTOS_ARREPENDIDOS.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-[#0D1B2A]/90 text-white text-[9px] sm:text-[10px] uppercase font-bold px-2 py-0.5 border border-white/20">
                Estabelecimento Penitenciário de Nampula
              </div>
            </div>
          )}

          {ARTICLE_DETENTOS_ARREPENDIDOS.imageCaption && (
            <p className="text-[11px] sm:text-xs font-serif italic text-[#44474c] bg-[#f1f3ff] p-2 border border-[#E5E7EB]">
              {ARTICLE_DETENTOS_ARREPENDIDOS.imageCaption}
            </p>
          )}

          <p className="font-sans text-xs sm:text-sm text-[#141b2b] leading-relaxed">
            {ARTICLE_DETENTOS_ARREPENDIDOS.leadParagraph}
          </p>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#74777d] pt-1 gap-2">
            <span>Por {ARTICLE_DETENTOS_ARREPENDIDOS.author.name} · {ARTICLE_DETENTOS_ARREPENDIDOS.dateline}</span>
            <span className="text-[#0066FF] font-bold group-hover:underline flex items-center gap-1 min-h-[32px]">
              Ler testemunhos na íntegra <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

      </div>

      {/* Broadsheet Section Break Line */}
      <div className="w-full broadsheet-double-rule-light my-3 sm:my-4" />

      {/* Secondary Story: Banco Central e Mecanismo Cambial */}
      <div 
        className="p-3 sm:p-4 bg-white border border-[#E5E7EB] hover:border-[#0D1B2A] transition-colors cursor-pointer group"
        onClick={() => onSelectArticle(SECONDARY_LEAD_STORY)}
      >
        <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-[#0050cc] mb-1.5">
          <span>{SECONDARY_LEAD_STORY.category}</span>
          <span className="text-[#c4c6cc]">·</span>
          <span>ANÁLISE SETORIAL</span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug">
          {SECONDARY_LEAD_STORY.title}
        </h3>

        {/* Real photo of Banco de Moçambique & Metical Banknotes */}
        {SECONDARY_LEAD_STORY.imageUrl && (
          <div className="my-3 relative aspect-[16/9] w-full bg-slate-900 overflow-hidden border border-[#E5E7EB]">
            <img
              src={SECONDARY_LEAD_STORY.imageUrl}
              alt={SECONDARY_LEAD_STORY.title}
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <p className="font-sans text-xs sm:text-sm text-[#44474c] mt-2 leading-relaxed">
          {SECONDARY_LEAD_STORY.subtitle}
        </p>

        {/* Data Infographic Strip (Responsive 1-col on mobile, 3-col on sm+) */}
        <div className="mt-4 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 p-3 bg-[#f1f3ff] border border-[#E5E7EB] text-center">
          <div className="p-1">
            <span className="block text-[10px] uppercase font-bold text-[#74777d]">Linha de Crédito</span>
            <span className="font-serif font-bold text-base text-[#0D1B2A]">25 Mil Milhões MT</span>
          </div>
          <div className="p-1">
            <span className="block text-[10px] uppercase font-bold text-[#74777d]">Taxa Bonificada</span>
            <span className="font-serif font-bold text-base text-[#0066FF]">7,5% a.a.</span>
          </div>
          <div className="xs:col-span-2 sm:col-span-1 p-1 border-t xs:border-t-0 border-[#E5E7EB]">
            <span className="block text-[10px] uppercase font-bold text-[#74777d]">Cobertura de Importação</span>
            <span className="font-serif font-bold text-base text-emerald-700">5,2 Meses</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-[#74777d]">
          <span>Por {SECONDARY_LEAD_STORY.author.name} · {SECONDARY_LEAD_STORY.dateline}</span>
          <span className="font-medium text-[#0D1B2A] group-hover:text-[#0066FF] flex items-center gap-1 min-h-[32px]">
            Ler mais <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

    </article>
  );
}

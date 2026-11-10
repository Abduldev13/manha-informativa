'use client';

import React, { useState } from 'react';
import { Article } from '@/data/articles';
import { X, Volume2, VolumeX, Share2, Printer, Check, ArrowLeft } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [fontSerif, setFontSerif] = useState(true);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const fontSizeClasses = {
    sm: 'text-[14px] sm:text-[15px] leading-[25px] sm:leading-[26px]',
    md: 'text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px]',
    lg: 'text-[18px] sm:text-[21px] leading-[31px] sm:leading-[34px]'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-0 sm:p-4 lg:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#f9f9ff] text-[#141b2b] border-x sm:border border-[#0D1B2A] shadow-2xl flex flex-col min-h-screen sm:min-h-0 sm:my-auto sm:max-h-[95vh] overflow-y-auto">
        
        {/* Top Sticky Tool Bar */}
        <div className="sticky top-0 z-20 bg-white border-b border-[#E5E7EB] px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between text-xs gap-2">
          
          {/* Back Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#0D1B2A] hover:text-[#0066FF] transition-colors min-h-[40px] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="hidden xs:inline">Voltar</span>
          </button>

          {/* Reading Customization Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Font Family switch */}
            <div className="hidden xs:flex items-center border border-[#E5E7EB] px-1 py-0.5 bg-[#f1f3ff]">
              <button
                onClick={() => setFontSerif(true)}
                className={`px-2 py-0.5 text-xs cursor-pointer ${fontSerif ? 'bg-white font-bold text-[#0D1B2A] shadow-xs' : 'text-[#74777d]'}`}
              >
                Serifa
              </button>
              <button
                onClick={() => setFontSerif(false)}
                className={`px-2 py-0.5 text-xs cursor-pointer ${!fontSerif ? 'bg-white font-bold text-[#0D1B2A] shadow-xs' : 'text-[#74777d]'}`}
              >
                Sans
              </button>
            </div>

            {/* Font Size controls */}
            <div className="flex items-center gap-1 border border-[#E5E7EB] px-1 py-0.5 bg-[#f1f3ff]">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-0.5 text-xs cursor-pointer min-h-[30px] min-w-[24px] ${fontSize === 'sm' ? 'font-bold text-[#0066FF]' : 'text-[#74777d]'}`}
                title="Texto pequeno"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-2 py-0.5 text-xs cursor-pointer min-h-[30px] min-w-[24px] ${fontSize === 'md' ? 'font-bold text-[#0066FF]' : 'text-[#74777d]'}`}
                title="Texto médio"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-0.5 text-xs cursor-pointer min-h-[30px] min-w-[24px] ${fontSize === 'lg' ? 'font-bold text-[#0066FF]' : 'text-[#74777d]'}`}
                title="Texto grande"
              >
                A+
              </button>
            </div>

            {/* Print & Share */}
            <button
              onClick={handlePrint}
              className="p-1.5 hover:text-[#0066FF] text-[#44474c] transition-colors hidden sm:inline cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              title="Imprimir formato editorial"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 hover:text-[#0066FF] text-[#44474c] transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              title="Copiar link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 bg-[#0D1B2A] text-white hover:bg-[#C91414] transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Fechar artigo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-4 sm:p-8 lg:p-12 space-y-5 sm:space-y-6 max-w-3xl mx-auto w-full">
          
          {/* Header Metadata */}
          <div className="space-y-2 border-b border-[#E5E7EB] pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
                {article.category}
              </span>
              {article.isExclusive && (
                <span className="bg-[#0D1B2A] text-white text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5">
                  Exclusivo
                </span>
              )}
            </div>

            <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D1B2A] leading-[1.18] tracking-[-0.02em]">
              {article.title}
            </h1>

            <p className="font-serif italic text-base sm:text-xl text-[#44474c] leading-relaxed pt-1">
              {article.subtitle}
            </p>
          </div>

          {/* Author Byline & Audio narration bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 sm:py-3 border-b border-[#E5E7EB] text-xs text-[#74777d]">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0D1B2A] text-white font-serif font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                {article.author.avatar}
              </div>
              <div>
                <p className="font-bold text-[#0D1B2A] text-xs sm:text-sm">{article.author.name}</p>
                <p className="text-[10px] sm:text-[11px] text-[#74777d]">{article.author.role} {article.author.affiliation && `· ${article.author.affiliation}`}</p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="font-medium text-[#0D1B2A]">{article.dateline}</p>
              <p className="text-[10px] sm:text-[11px]">{article.updatedAt} · {article.readTime}</p>
            </div>
          </div>

          {/* Audio narration block */}
          <div className="p-3 bg-[#f1f3ff] border border-[#E5E7EB] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-8 h-8 bg-[#0D1B2A] text-white hover:bg-[#0066FF] transition-colors flex items-center justify-center shrink-0 cursor-pointer min-h-[36px] min-w-[36px]"
                aria-label={isPlayingAudio ? "Pausar áudio" : "Ouvir áudio"}
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <div>
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider block">
                  {isPlayingAudio ? 'A reproduzir narração...' : 'Ouvir reportagem em áudio'}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#74777d]">
                  Voz editorial de serviço público · Duração {article.readTime}
                </span>
              </div>
            </div>

            {isPlayingAudio && (
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-ping shrink-0" />
            )}
          </div>

          {/* Featured Video if present */}
          {article.videoUrl ? (
            <div className="space-y-2">
              <div className="relative aspect-video w-full bg-black border border-[#0D1B2A] overflow-hidden shadow-md">
                <video
                  src={article.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                >
                  O seu navegador não suporta a reprodução de vídeo.
                </video>
                <div className="absolute top-2 left-2 bg-[#ba1a1a] text-white text-[9px] sm:text-[10px] uppercase font-bold px-2 py-0.5 tracking-wider pointer-events-none shadow-xs">
                  VÍDEO DA REPORTAGEM · EXCLUSIVO
                </div>
              </div>
              {article.imageCaption && (
                <p className="text-xs font-serif italic text-[#74777d] border-l-2 border-[#ba1a1a] pl-2.5">
                  {article.imageCaption}
                </p>
              )}
            </div>
          ) : article.imageUrl ? (
            <div className="space-y-2">
              <div className="max-h-[540px] aspect-[4/3] sm:aspect-[16/10] w-full bg-slate-900 border border-[#E5E7EB] overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover object-[center_30%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {article.imageCaption && (
                <p className="text-xs font-serif italic text-[#74777d] border-l-2 border-[#0D1B2A] pl-2.5">
                  {article.imageCaption}
                </p>
              )}
            </div>
          ) : null}

          {/* Paragraphs */}
          <div className={`space-y-5 sm:space-y-6 ${fontSerif ? 'font-serif' : 'font-sans'} ${fontSizeClasses[fontSize]} text-[#111827]`}>
            {article.fullContent.map((paragraph, index) => {
              const isQuestion = paragraph.startsWith('P —') || paragraph.startsWith('P -');
              const isAnswer = paragraph.startsWith('R —') || paragraph.startsWith('R -');
              const isSectionSubhead = 
                paragraph.toLowerCase().includes('entrevista na íntegra') ||
                paragraph.startsWith('Vitória sobre o Hull City') ||
                paragraph.startsWith('Manchester City perde terreno') ||
                paragraph.startsWith('Brighton também entra na disputa');

              if (isSectionSubhead) {
                return (
                  <div key={index} className="pt-4 pb-1 border-b border-[#0D1B2A]">
                    <h4 className="font-serif font-bold text-base sm:text-lg uppercase tracking-wide text-[#0D1B2A]">
                      {paragraph}
                    </h4>
                  </div>
                );
              }

              if (isQuestion) {
                return (
                  <div key={index} className="pt-3">
                    <p className="font-sans font-bold text-[15px] sm:text-base text-[#0D1B2A] bg-[#f1f3ff] p-3 border-l-4 border-[#0066FF] leading-snug">
                      {paragraph}
                    </p>
                  </div>
                );
              }

              if (paragraph.startsWith('Nota:') || paragraph.startsWith('Nota —')) {
                return (
                  <div key={index} className="my-4 p-3.5 bg-[#fff8f8] border-l-4 border-[#ba1a1a] text-xs sm:text-sm text-[#4b5563]">
                    <strong className="text-[#ba1a1a] font-bold block mb-1 uppercase tracking-wider text-[11px]">Nota Jurídica:</strong>
                    <p className="italic leading-relaxed">{paragraph.replace(/^Nota:\s*/, '')}</p>
                  </div>
                );
              }

              if (paragraph.startsWith('Fonte:')) {
                return (
                  <p key={index} className="text-xs font-sans text-[#74777d] pt-2 border-t border-[#E5E7EB]">
                    <strong className="text-[#0D1B2A]">Fonte:</strong> {paragraph.replace(/^Fonte:\s*/, '')}
                  </p>
                );
              }

              if (isAnswer) {
                return (
                  <p key={index} className="leading-relaxed pl-1 text-[#141b2b]">
                    {paragraph}
                  </p>
                );
              }

              if (index === 0) {
                return (
                  <p key={index} className="editorial-drop-cap">
                    {paragraph}
                  </p>
                );
              }

              // Highlight quote on paragraph 2 only if not an interview
              if (index === 2 && !article.fullContent.some(p => p.startsWith('P —') || p.startsWith('P -'))) {
                return (
                  <div key={index} className="my-5 sm:my-6 pl-4 border-l-2 border-[#0066FF] py-2 bg-[#f1f3ff]/50">
                    <p className="italic font-serif text-base sm:text-lg text-[#0D1B2A]">
                      {paragraph}
                    </p>
                  </div>
                );
              }

              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Article Footer & Tags */}
          <div className="pt-6 border-t-2 border-[#0D1B2A] space-y-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#74777d]">
                Tópicos:
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-white border border-[#E5E7EB] text-[#0D1B2A] font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="p-3 sm:p-4 bg-[#f1f3ff] border border-[#E5E7EB] text-xs text-[#44474c]">
              <p className="font-bold text-[#0D1B2A] mb-1">
                Aviso Editorial de Escrutínio Público
              </p>
              <p>
                As investigações e reportagens do <em>Manhã Informativo</em> obedecem ao Estatuto do Jornalista de Moçambique e aos mais rigorosos princípios de contraditório e verificação de factos.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

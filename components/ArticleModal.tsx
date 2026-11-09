'use client';

import React, { useState } from 'react';
import { Article } from '@/data/articles';
import { X, Volume2, VolumeX, Share2, Printer, Bookmark, Check, ArrowLeft, Type } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [fontSerif, setFontSerif] = useState(true);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

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
    sm: 'text-[15px] leading-[26px]',
    md: 'text-[18px] leading-[30px]',
    lg: 'text-[21px] leading-[34px]'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#f9f9ff] text-[#141b2b] border border-[#0D1B2A] shadow-2xl flex flex-col my-auto max-h-[95vh] overflow-y-auto">
        
        {/* Top Sticky Tool Bar */}
        <div className="sticky top-0 z-20 bg-white border-b border-[#E5E7EB] px-4 py-2.5 flex items-center justify-between text-xs">
          
          {/* Back Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#0D1B2A] hover:text-[#0066FF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Jornal</span>
          </button>

          {/* Reading Customization Controls */}
          <div className="flex items-center gap-3">
            {/* Font Family switch */}
            <div className="flex items-center border border-[#E5E7EB] px-1 py-0.5 bg-[#f1f3ff]">
              <button
                onClick={() => setFontSerif(true)}
                className={`px-2 py-0.5 text-xs ${fontSerif ? 'bg-white font-bold text-[#0D1B2A] shadow-xs' : 'text-[#74777d]'}`}
              >
                Serifa
              </button>
              <button
                onClick={() => setFontSerif(false)}
                className={`px-2 py-0.5 text-xs ${!fontSerif ? 'bg-white font-bold text-[#0D1B2A] shadow-xs' : 'text-[#74777d]'}`}
              >
                Sans
              </button>
            </div>

            {/* Font Size controls */}
            <div className="flex items-center gap-1 border border-[#E5E7EB] px-1 py-0.5 bg-[#f1f3ff]">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-1.5 text-xs ${fontSize === 'sm' ? 'font-bold text-[#0066FF]' : 'text-[#74777d]'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('md')}
                className={`px-1.5 text-xs ${fontSize === 'md' ? 'font-bold text-[#0066FF]' : 'text-[#74777d]'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-1.5 text-xs ${fontSize === 'lg' ? 'font-bold text-[#0066FF]' : 'text-[#74777d]'}`}
              >
                A+
              </button>
            </div>

            {/* Print & Share */}
            <button
              onClick={handlePrint}
              className="p-1 hover:text-[#0066FF] text-[#44474c] transition-colors hidden sm:inline"
              title="Imprimir formato editorial"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleShare}
              className="p-1 hover:text-[#0066FF] text-[#44474c] transition-colors"
              title="Copiar link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 bg-[#0D1B2A] text-white hover:bg-[#C91414] transition-colors"
              aria-label="Fechar artigo"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-6 max-w-3xl mx-auto w-full">
          
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

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D1B2A] leading-[1.15] tracking-[-0.02em]">
              {article.title}
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#44474c] leading-relaxed pt-1">
              {article.subtitle}
            </p>
          </div>

          {/* Author Byline & Audio narration bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#E5E7EB] text-xs text-[#74777d]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#0D1B2A] text-white font-serif font-bold text-sm flex items-center justify-center">
                {article.author.avatar}
              </div>
              <div>
                <p className="font-bold text-[#0D1B2A] text-sm">{article.author.name}</p>
                <p className="text-[11px] text-[#74777d]">{article.author.role} {article.author.affiliation && `· ${article.author.affiliation}`}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-medium text-[#0D1B2A]">{article.dateline}</p>
              <p className="text-[11px]">{article.updatedAt} · {article.readTime}</p>
            </div>
          </div>

          {/* Audio narration block */}
          <div className="p-3 bg-[#f1f3ff] border border-[#E5E7EB] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-8 h-8 bg-[#0D1B2A] text-white hover:bg-[#0066FF] transition-colors flex items-center justify-center shrink-0"
              >
                {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <div>
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider block">
                  {isPlayingAudio ? 'A reproduzir narração...' : 'Ouvir reportagem em áudio'}
                </span>
                <span className="text-[11px] text-[#74777d]">
                  Síntese de voz editorial de serviço público · Duração estimada {article.readTime}
                </span>
              </div>
            </div>

            {isPlayingAudio && (
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-ping" />
            )}
          </div>

          {/* Featured Image if present */}
          {article.imageUrl && (
            <div className="space-y-2">
              <div className="aspect-[16/9] w-full bg-slate-900 border border-[#E5E7EB] overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {article.imageCaption && (
                <p className="text-xs font-serif italic text-[#74777d] border-l-2 border-[#0D1B2A] pl-2.5">
                  {article.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* Paragraphs */}
          <div className={`space-y-6 ${fontSerif ? 'font-serif' : 'font-sans'} ${fontSizeClasses[fontSize]} text-[#111827]`}>
            {article.fullContent.map((paragraph, index) => {
              if (index === 0) {
                return (
                  <p key={index} className="editorial-drop-cap">
                    {paragraph}
                  </p>
                );
              }

              // Highlight quote on paragraph 2
              if (index === 2) {
                return (
                  <div key={index} className="my-6 pl-4 border-l-2 border-[#0066FF] py-2 bg-[#f1f3ff]/50">
                    <p className="italic font-serif text-lg text-[#0D1B2A]">
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
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#74777d]">
                Tópicos Arquivados:
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

            <div className="p-4 bg-[#f1f3ff] border border-[#E5E7EB] text-xs text-[#44474c]">
              <p className="font-bold text-[#0D1B2A] mb-1">
                Aviso Editorial de Escrutínio Público
              </p>
              <p>
                As investigações e reportagens do <em>Manhã Informativo</em> obedecem ao Estatuto do Jornalista de Moçambique e aos mais rigorosos princípios de contraditório e verificação de factos. Os dados públicos analisados constam de relatórios oficiais auditados.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

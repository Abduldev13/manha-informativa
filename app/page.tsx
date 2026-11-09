'use client';

import React, { useState } from 'react';
import TopUtilityRail from '@/components/TopUtilityRail';
import Masthead from '@/components/Masthead';
import NavigationBar, { NAV_SECTIONS } from '@/components/NavigationBar';
import BreakingTicker from '@/components/BreakingTicker';
import HeroLeadStory from '@/components/HeroLeadStory';
import AnalyticalColumn from '@/components/AnalyticalColumn';
import LiveDispatchRail from '@/components/LiveDispatchRail';
import MarketsSection from '@/components/MarketsSection';
import MultimediaBroadcastSection from '@/components/MultimediaBroadcastSection';
import CultureSection from '@/components/CultureSection';
import Footer from '@/components/Footer';
import ArticleModal from '@/components/ArticleModal';
import PrintEditionModal from '@/components/PrintEditionModal';
import SearchDrawer from '@/components/SearchDrawer';
import BroadcastModal from '@/components/BroadcastModal';
import SubscriptionModal from '@/components/SubscriptionModal';
import { Article, DispatchItem, PRIMARY_LEAD_STORY, SECONDARY_LEAD_STORY, OPINION_COLUMNISTS, GENERAL_ARTICLES } from '@/data/articles';
import SectionPage from '@/components/SectionPage';
import CommercialShowcase, { KoffeinVideoAd, GrecyEventsAd } from '@/components/Advertisements';
import { X, Filter, Radio } from 'lucide-react';

export default function HomePage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPrintEditionOpen, setIsPrintEditionOpen] = useState(false);
  const [isBroadcastModalOpen, setIsBroadcastModalOpen] = useState(false);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [currentEdition, setCurrentEdition] = useState('Edição Nacional / Maputo');
  const [activeCategory, setActiveCategory] = useState('all');
  const [fontSizeLevel, setFontSizeLevel] = useState(0);
  const [selectedDispatch, setSelectedDispatch] = useState<DispatchItem | null>(null);

  const fontSizeClasses = {
    [-1]: 'text-sm leading-relaxed',
    [0]: 'text-[16px] leading-[27px]',
    [1]: 'text-lg leading-[30px]',
    [2]: 'text-xl leading-[34px]'
  };

  const handleAdjustFontSize = (delta: number) => {
    setFontSizeLevel((prev) => Math.min(2, Math.max(-1, prev + delta)));
  };

  const handleSelectDispatch = (disp: DispatchItem) => {
    setSelectedDispatch(disp);
  };

  // Convert dispatch into an article for the full reader if user wants
  const handleReadFullDispatch = () => {
    if (!selectedDispatch) return;
    const dispatchAsArticle: Article = {
      id: selectedDispatch.id,
      category: selectedDispatch.category,
      title: selectedDispatch.title,
      subtitle: selectedDispatch.summary,
      leadParagraph: selectedDispatch.summary,
      fullContent: [
        selectedDispatch.summary,
        'Esta notícia urgente foi apurada pela redação do Manhã Informativo em contacto direto com os centros operacionais e fontes institucionais em Maputo e nas capitais provinciais.',
        'A informação continua em permanente atualização à medida que os despachos das autoridades e os relatórios técnicos forem homologados.'
      ],
      author: {
        name: 'Redação Central de Despachos',
        role: 'Fio de Notícias ao Minuto',
        avatar: 'RD',
        affiliation: 'Manhã Informativo Maputo'
      },
      dateline: 'Maputo / Moçambique',
      readTime: '2 min de leitura',
      updatedAt: `Hoje às ${selectedDispatch.time} CAT`,
      tags: [selectedDispatch.category, 'Urgente', 'Despacho']
    };

    setSelectedDispatch(null);
    setSelectedArticle(dispatchAsArticle);
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#141b2b] flex flex-col font-sans selection:bg-[#0066FF] selection:text-white">
      
      {/* 1. Top Utility Rail */}
      <TopUtilityRail
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPrintEdition={() => setIsPrintEditionOpen(true)}
        onSelectEdition={(ed) => setCurrentEdition(ed)}
        currentEdition={currentEdition}
        onToggleBroadcastDrawer={() => setIsBroadcastModalOpen(true)}
        fontSizeLevel={fontSizeLevel}
        onAdjustFontSize={handleAdjustFontSize}
      />

      {/* 2. Primary Brand Masthead with Classic Double Rules */}
      <Masthead
        onOpenPrintEdition={() => setIsPrintEditionOpen(true)}
        onSubscribeClick={() => setIsSubscribeOpen(true)}
      />

      {/* 3. Navigation Bar */}
      <NavigationBar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onOpenLiveBroadcast={() => setIsBroadcastModalOpen(true)}
        onOpenSubscribeModal={() => setIsSubscribeOpen(true)}
      />

      {/* 4. Breaking News Ticker ("URGENTE") */}
      <BreakingTicker onSelectDispatch={handleSelectDispatch} />

      {/* Active Category Filter Banner (if user filtered) */}
      {activeCategory !== 'all' && (
        <div className="bg-[#f1f3ff] border-b border-[#E5E7EB] py-2 px-4">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="text-[#44474c]">Filtrando por secção:</span>
              <span className="font-bold uppercase text-[#0D1B2A]">
                {NAV_SECTIONS.find((s) => s.id === activeCategory)?.label}
              </span>
            </div>
            <button
              onClick={() => setActiveCategory('all')}
              className="text-[#0066FF] hover:underline font-semibold"
            >
              Voltar à Primeira Página Geral
            </button>
          </div>
        </div>
      )}

      {/* 5. Main Content: Either Dedicated Section Page or Master Broadsheet Grid */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {activeCategory !== 'all' ? (
          <SectionPage
            sectionId={activeCategory}
            onSelectArticle={(art) => setSelectedArticle(art)}
            onBackToHome={() => setActiveCategory('all')}
            fontSizeClass={fontSizeClasses[fontSizeLevel as keyof typeof fontSizeClasses]}
          />
        ) : (
          <>
            {/* Asymmetrical 12-Column Broadsheet Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Column 1 to 7: Primary Investigative Story Block (7 cols) */}
              <section className="lg:col-span-7 column-divider-r pr-0 lg:pr-8">
                <HeroLeadStory
                  onSelectArticle={(art) => setSelectedArticle(art)}
                  fontSizeClass={fontSizeClasses[fontSizeLevel as keyof typeof fontSizeClasses]}
                />
              </section>

              {/* Column 8 to 10: Secondary Analytical & Columnist Block (3 cols) */}
              <section className="lg:col-span-3 column-divider-r pr-0 lg:pr-6">
                <AnalyticalColumn
                  onSelectArticle={(art) => setSelectedArticle(art)}
                />
              </section>

              {/* Column 11 to 12: Live Dispatch & Telemetry Rail (2 cols) */}
              <section className="lg:col-span-2 space-y-6">
                <LiveDispatchRail
                  onSelectDispatch={handleSelectDispatch}
                  onOpenLiveBroadcastModal={() => setIsBroadcastModalOpen(true)}
                />

                {/* Compact commercial spotlight in the right rail */}
                <div className="p-3 bg-[#1b2620] text-white border border-[#2b3a32] text-xs">
                  <div className="flex items-center justify-between text-[9px] uppercase font-bold text-[#a8b8ae] border-b border-white/20 pb-1 mb-2">
                    <span>Espaço Comercial</span>
                    <span className="text-[#c59b6d]">Nampula</span>
                  </div>
                  <h5 className="font-serif font-bold text-sm text-white">Koffein Coffee Bar</h5>
                  <p className="text-[11px] text-[#d0ded5] mt-1">Cafés especiais e confeitaria. Ter–Sáb 07h–21h / Dom 08h–21h. Próximo ao Hotel Millénio.</p>
                  <a href="#anuncios-nampula" className="text-[10px] text-[#c59b6d] font-bold uppercase mt-2 inline-block hover:underline">
                    Ver vídeo e horários ↓
                  </a>
                </div>
              </section>

            </div>

            {/* Scrolling Commercial Advertisements Section (Koffein Video & Grecy Events Banner) */}
            <div id="anuncios-nampula">
              <CommercialShowcase />
            </div>

            {/* 6. Financial & Stock Exchange Section (Caderno de Mercados) */}
            <MarketsSection />

            {/* 7. Recessed Broadcast Recess Multimedia Section (#0A192F) */}
            <MultimediaBroadcastSection />

            {/* 8. Culture, Arts, Heritage & Sciences Section */}
            <CultureSection
              onSelectArticle={(art) => setSelectedArticle(art)}
            />
          </>
        )}

      </main>

      {/* 9. Institutional Broadsheet Footer */}
      <Footer />

      {/* Modals & Overlays */}
      {/* Article Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Broadsheet Print Replica Viewer Modal */}
      <PrintEditionModal
        isOpen={isPrintEditionOpen}
        onClose={() => setIsPrintEditionOpen(false)}
      />

      {/* Instant Search Drawer */}
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* Live Broadcast Television & Radio Modal */}
      <BroadcastModal
        isOpen={isBroadcastModalOpen}
        onClose={() => setIsBroadcastModalOpen(false)}
      />

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={isSubscribeOpen}
        onClose={() => setIsSubscribeOpen(false)}
      />

      {/* Quick Dispatch Detail Modal */}
      {selectedDispatch && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white border border-[#0D1B2A] shadow-2xl p-6 flex flex-col my-auto text-[#141b2b]">
            <button
              onClick={() => setSelectedDispatch(null)}
              className="absolute top-3 right-3 p-1 text-[#74777d] hover:text-[#0D1B2A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#C91414] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                DESPACHO URGENTE
              </span>
              <span className="font-mono text-xs text-[#0066FF] font-bold">
                {selectedDispatch.time} CAT
              </span>
              <span className="text-[#74777d] text-xs">· {selectedDispatch.category}</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#0D1B2A] leading-snug mt-2">
              {selectedDispatch.title}
            </h3>

            <p className="font-sans text-sm text-[#44474c] mt-3 leading-relaxed">
              {selectedDispatch.summary}
            </p>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
              <span className="text-xs text-[#74777d]">Transmitido na rede de telex informativo</span>
              <button
                onClick={handleReadFullDispatch}
                className="px-4 py-1.5 bg-[#0D1B2A] hover:bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Ler Cobertura Completa
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

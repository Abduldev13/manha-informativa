'use client';

import React from 'react';
import { NAV_SECTIONS } from './NavigationBar';
import { 
  X, Radio, Printer, Search, ShieldCheck, 
  MapPin, ChevronRight, Newspaper, Bookmark, Volume2, Type
} from 'lucide-react';

interface MobileNavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenLiveBroadcast: () => void;
  onOpenPrintEdition: () => void;
  onOpenSearch: () => void;
  onOpenSubscribeModal: () => void;
  currentEdition: string;
  onSelectEdition: (edition: string) => void;
  fontSizeLevel: number;
  onAdjustFontSize: (delta: number) => void;
}

export default function MobileNavigationDrawer({
  isOpen,
  onClose,
  activeCategory,
  onSelectCategory,
  onOpenLiveBroadcast,
  onOpenPrintEdition,
  onOpenSearch,
  onOpenSubscribeModal,
  currentEdition,
  onSelectEdition,
  fontSizeLevel,
  onAdjustFontSize,
}: MobileNavigationDrawerProps) {
  if (!isOpen) return null;

  const editions = [
    'Edição Nacional / Maputo',
    'Edição Centro / Beira & Sofala',
    'Edição Norte / Nampula & Pemba',
    'Edição Zambézia & Tete',
    'Edição Internacional & Diáspora'
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-xs flex justify-start animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Drawer panel */}
      <div className="relative w-full max-w-[340px] sm:max-w-md bg-[#f9f9ff] text-[#141b2b] h-full shadow-2xl flex flex-col z-10 border-r border-[#0D1B2A]">
        
        {/* Drawer Header */}
        <div className="p-4 bg-[#0D1B2A] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-[#00D2FF]" />
            <div>
              <span className="font-serif font-bold text-base tracking-tight block">
                MANHÃ INFORMATIVO
              </span>
              <span className="text-[10px] text-[#00D2FF] uppercase font-mono tracking-wider block">
                Nampula (UCM) & Maputo
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Action Strip (Search, Live, PDF, Font) */}
        <div className="grid grid-cols-4 bg-[#0A192F] text-white text-center text-[10px] uppercase font-bold border-b border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="py-3 px-1 border-r border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center gap-1 min-h-[48px]"
          >
            <Search className="w-4 h-4 text-[#00D2FF]" />
            <span>Pesquisar</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenLiveBroadcast();
            }}
            className="py-3 px-1 border-r border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center gap-1 min-h-[48px]"
          >
            <Radio className="w-4 h-4 text-[#C91414] animate-pulse" />
            <span>Ao Vivo</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenPrintEdition();
            }}
            className="py-3 px-1 border-r border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center gap-1 min-h-[48px]"
          >
            <Printer className="w-4 h-4 text-[#00D2FF]" />
            <span>Jornal PDF</span>
          </button>

          <button
            onClick={() => onAdjustFontSize(fontSizeLevel >= 2 ? -3 : 1)}
            className="py-3 px-1 hover:bg-white/10 transition-colors flex flex-col items-center gap-1 min-h-[48px]"
          >
            <Type className="w-4 h-4 text-[#00D2FF]" />
            <span>Texto {fontSizeLevel > 0 ? `+${fontSizeLevel}` : 'A'}</span>
          </button>
        </div>

        {/* Drawer Body: Sections List */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#E5E7EB]">
          
          <div className="p-3 bg-[#f1f3ff] text-[11px] font-bold uppercase tracking-wider text-[#74777d]">
            Secções Editoriais & Cadernos
          </div>

          <nav className="py-2">
            {NAV_SECTIONS.map((section) => {
              const isActive = activeCategory === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    onSelectCategory(section.id);
                    if (section.isBroadcast) {
                      onOpenLiveBroadcast();
                    }
                    onClose();
                  }}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between text-xs font-semibold tracking-wider transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-[#0D1B2A] text-white font-bold'
                      : 'text-[#141b2b] hover:bg-[#f1f3ff]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {section.isBroadcast && (
                      <span className="w-2 h-2 rounded-full bg-[#C91414] animate-pulse" />
                    )}
                    <span>{section.label}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#00D2FF]' : 'text-[#74777d]'}`} />
                </button>
              );
            })}
          </nav>

          {/* Regional Edition Selector */}
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#74777d]">
              <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Região de Edição Ativa</span>
            </div>
            <div className="space-y-1">
              {editions.map((ed) => (
                <button
                  key={ed}
                  onClick={() => {
                    onSelectEdition(ed);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs transition-colors rounded-none ${
                    currentEdition === ed
                      ? 'bg-[#0066FF] text-white font-bold'
                      : 'bg-white border border-[#E5E7EB] text-[#141b2b] hover:bg-slate-50'
                  }`}
                >
                  {ed}
                </button>
              ))}
            </div>
          </div>

          {/* Special Nampula Highlight */}
          <div className="p-4 bg-[#fdf8f0] border-y border-[#e6d8c3] text-xs">
            <span className="text-[10px] uppercase font-bold text-[#b45309] block mb-1">
              Região Norte · Nampula
            </span>
            <p className="font-serif font-bold text-[#0D1B2A] text-sm">
              UCM - Faculdade de Educação e Comunicação
            </p>
            <p className="text-[11px] text-[#74777d] mt-1">
              Reportagens locais sobre o Bairro dos Belenenses, Cadeia de Nampula e Corredor Logístico de Nacala.
            </p>
          </div>

          {/* Commercial Partners */}
          <div className="p-4 space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#74777d] tracking-wider block">
              Guia Comercial & Patrocinadores
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="#anuncios-nampula"
                onClick={onClose}
                className="p-2 bg-[#1b2620] text-white text-[11px] font-medium hover:opacity-90 transition-opacity block"
              >
                <span className="font-bold block text-[#c59b6d]">Koffein</span>
                <span className="text-[10px] text-[#d0ded5]">Café & Bistrô</span>
              </a>
              <a
                href="#anuncios-nampula"
                onClick={onClose}
                className="p-2 bg-[#fffcf7] border border-[#e6d8c3] text-[#0D1B2A] text-[11px] font-medium hover:opacity-90 transition-opacity block"
              >
                <span className="font-bold block text-[#b45309]">Grecy Events</span>
                <span className="text-[10px] text-[#74777d]">Catering & Bolos</span>
              </a>
            </div>
          </div>

        </div>

        {/* Drawer Footer: Subscription CTA */}
        <div className="p-4 bg-white border-t border-[#E5E7EB] space-y-2">
          <button
            onClick={() => {
              onClose();
              onOpenSubscribeModal();
            }}
            className="w-full py-2.5 bg-[#0D1B2A] hover:bg-[#0066FF] text-white font-bold text-xs uppercase tracking-wider transition-colors min-h-[44px] flex items-center justify-center"
          >
            Assinar Manhã Informativo
          </button>
          <p className="text-center text-[10px] text-[#74777d]">
            Desde 350 MT/mês · Pagamento por M-Pesa & Cartão
          </p>
        </div>

      </div>
    </div>
  );
}

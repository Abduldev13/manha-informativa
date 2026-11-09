'use client';

import React from 'react';
import { Newspaper, Compass, Radio, Search, Printer } from 'lucide-react';

interface MobileBottomBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenMobileMenu: () => void;
  onOpenLiveBroadcast: () => void;
  onOpenSearch: () => void;
  onOpenPrintEdition: () => void;
}

export default function MobileBottomBar({
  activeCategory,
  onSelectCategory,
  onOpenMobileMenu,
  onOpenLiveBroadcast,
  onOpenSearch,
  onOpenPrintEdition,
}: MobileBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] shadow-lg safe-area-pb">
      <div className="grid grid-cols-5 items-center h-16 max-w-lg mx-auto px-1">
        
        {/* 1. Início / Capa */}
        <button
          onClick={() => {
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 transition-colors min-h-[48px] ${
            activeCategory === 'all'
              ? 'text-[#0066FF] font-bold'
              : 'text-[#44474c] hover:text-[#0D1B2A]'
          }`}
          aria-label="Ir para a Primeira Página"
        >
          <Newspaper className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Início</span>
        </button>

        {/* 2. Secções Menu */}
        <button
          onClick={onOpenMobileMenu}
          className="flex flex-col items-center justify-center py-1 text-[#44474c] hover:text-[#0D1B2A] transition-colors min-h-[48px]"
          aria-label="Abrir todas as secções"
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Secções</span>
        </button>

        {/* 3. Ao Vivo (Prominent red pulse) */}
        <button
          onClick={onOpenLiveBroadcast}
          className="flex flex-col items-center justify-center py-1 transition-colors min-h-[48px] group"
          aria-label="Ver emissão ao vivo"
        >
          <div className="relative">
            <Radio className="w-5 h-5 mb-0.5 text-[#C91414] group-hover:scale-110 transition-transform" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C91414] animate-ping" />
          </div>
          <span className="text-[10px] tracking-tight font-bold text-[#C91414]">Ao Vivo</span>
        </button>

        {/* 4. Pesquisar */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center py-1 text-[#44474c] hover:text-[#0D1B2A] transition-colors min-h-[48px]"
          aria-label="Abrir pesquisa"
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Pesquisa</span>
        </button>

        {/* 5. PDF Impresso */}
        <button
          onClick={onOpenPrintEdition}
          className="flex flex-col items-center justify-center py-1 text-[#44474c] hover:text-[#0D1B2A] transition-colors min-h-[48px]"
          aria-label="Abrir jornal impresso PDF"
        >
          <Printer className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Jornal PDF</span>
        </button>

      </div>
    </div>
  );
}

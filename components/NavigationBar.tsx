'use client';

import React from 'react';
import { Radio, Menu, ChevronRight } from 'lucide-react';

interface NavigationBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenLiveBroadcast: () => void;
  onOpenSubscribeModal: () => void;
  onOpenMobileMenu?: () => void;
}

export const NAV_SECTIONS = [
  { id: 'all', label: 'Primeira Página' },
  { id: 'politica', label: 'Política & Estado' },
  { id: 'economia', label: 'Economia & Mercados' },
  { id: 'sociedade', label: 'Sociedade & Justiça' },
  { id: 'aovivo', label: 'Moçambique Ao Vivo (TV)', isBroadcast: true },
  { id: 'opiniao', label: 'Opinião & Ensaios' },
  { id: 'africa', label: 'África & Mundo' },
  { id: 'cultura', label: 'Cultura & Letras' },
  { id: 'investigacao', label: 'Investigação Especial' },
];

export default function NavigationBar({
  activeCategory,
  onSelectCategory,
  onOpenLiveBroadcast,
  onOpenSubscribeModal,
  onOpenMobileMenu,
}: NavigationBarProps) {
  return (
    <nav className="w-full bg-[#f9f9ff] border-b border-[#E5E7EB] sticky top-0 z-40 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-2 sm:gap-4 py-1">
          
          {/* Quick Menu button for mobile/tablet */}
          {onOpenMobileMenu && (
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden flex items-center gap-1.5 px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-[#0D1B2A] bg-[#f1f3ff] hover:bg-[#E5E7EB] border border-[#E5E7EB] shrink-0 min-h-[38px] cursor-pointer"
              aria-label="Abrir todas as secções"
            >
              <Menu className="w-4 h-4 text-[#0066FF]" />
              <span className="hidden xs:inline">Secções</span>
            </button>
          )}

          {/* Horizontally scrollable navigation tabs with smooth touch scroll */}
          <div className="flex-1 overflow-x-auto no-scrollbar scroll-smooth flex items-center">
            <ul className="flex items-center gap-1 sm:gap-4 md:gap-5 text-[11px] sm:text-[13px] font-semibold tracking-wider uppercase text-[#141b2b] shrink-0">
              {NAV_SECTIONS.map((section) => {
                const isActive = activeCategory === section.id;
                
                if (section.isBroadcast) {
                  return (
                    <li key={section.id} className="shrink-0">
                      <button
                        onClick={() => {
                          onSelectCategory(section.id);
                          onOpenLiveBroadcast();
                        }}
                        className={`flex items-center gap-1.5 py-2.5 sm:py-3 px-2 sm:px-1 transition-colors whitespace-nowrap min-h-[40px] ${
                          isActive
                            ? 'border-b-2 border-[#0D1B2A] text-[#0066FF] font-bold'
                            : 'text-[#C91414] hover:text-[#0D1B2A]'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#C91414] animate-pulse" />
                        <span>{section.label}</span>
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={section.id} className="shrink-0">
                    <button
                      onClick={() => onSelectCategory(section.id)}
                      className={`py-2.5 sm:py-3 px-2 sm:px-1 transition-colors whitespace-nowrap min-h-[40px] ${
                        isActive
                          ? 'border-b-2 border-[#0D1B2A] text-[#0D1B2A] font-bold'
                          : 'border-b-2 border-transparent text-[#44474c] hover:text-[#0D1B2A] hover:border-[#c4c6cc]'
                      }`}
                    >
                      {section.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right quick indicator */}
          <div className="hidden xl:flex items-center gap-3 shrink-0 pl-4 border-l border-[#E5E7EB]">
            <button
              onClick={onOpenSubscribeModal}
              className="text-[11px] font-bold uppercase tracking-wider text-[#0066FF] hover:underline whitespace-nowrap"
            >
              Receber Alertas
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

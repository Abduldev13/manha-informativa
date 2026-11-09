'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Printer, BookmarkCheck } from 'lucide-react';

interface MastheadProps {
  onOpenPrintEdition: () => void;
  onSubscribeClick: () => void;
}

export default function Masthead({ onOpenPrintEdition, onSubscribeClick }: MastheadProps) {
  return (
    <header className="w-full bg-[#f9f9ff] text-[#0D1B2A] border-b border-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2.5 sm:pb-3">
        
        {/* Top double hairline rule */}
        <div className="w-full broadsheet-double-rule mb-2 sm:mb-3" />

        {/* Masthead grid: 3-column classic broadsheet layout on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3 sm:gap-4 py-1 sm:py-2">
          
          {/* Left Block: Institutional Details (Desktop/Tablet) */}
          <div className="hidden md:flex md:col-span-3 flex-col justify-center text-[11px] leading-tight text-[#44474c] space-y-1 border-r border-[#E5E7EB] pr-4">
            <div className="flex items-center gap-1 font-semibold text-[#0D1B2A] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
              <span>Jornalismo de Referência</span>
            </div>
            <p>Ano XXVIII · Edição Nacional Nº 9.842</p>
            <p className="text-[10px] text-[#74777d]">Fundado em 1998 · NAMPULA ( UCM - Faculdade de Educação e Comunicação)</p>
            <p className="text-[10px] text-[#74777d]">Registo Geral de Imprensa: INLD Nº 402/26</p>
          </div>

          {/* Center Block: The Great Editorial Masthead */}
          <div className="col-span-12 md:col-span-6 text-center flex flex-col items-center justify-center px-1">
            <Link href="/" className="inline-block group focus:outline-none">
              <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-[-0.03em] leading-none text-[#0D1B2A] group-hover:text-[#0050cc] transition-colors py-1">
                MANHÃ INFORMATIVO
              </h1>
            </Link>
            
            {/* Broadsheet sub-banner motto */}
            <div className="mt-1.5 sm:mt-2 text-[10px] xs:text-[11px] sm:text-[12px] font-medium tracking-[0.05em] sm:tracking-[0.08em] uppercase text-[#44474c] flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap text-center">
              <span>O Diário Nacional de Investigação</span>
              <span className="text-[#0066FF] font-bold">·</span>
              <span>Emissão Pública</span>
              <span className="text-[#0066FF] font-bold">·</span>
              <span className="font-semibold text-[#0D1B2A]">NAMPULA ( UCM - Faculdade de Educação e Comunicação)</span>
            </div>

            {/* Mobile-only credentials and actions strip */}
            <div className="flex md:hidden items-center justify-between w-full pt-2 mt-2 border-t border-[#E5E7EB] text-[10px] text-[#74777d]">
              <div>
                <span className="font-semibold text-[#0D1B2A]">Edição Nº 9.842</span> · 50,00 MT
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenPrintEdition}
                  className="px-2 py-1 text-[10px] border border-[#0D1B2A] text-[#0D1B2A] font-semibold hover:bg-[#0D1B2A] hover:text-white transition-colors"
                >
                  PDF
                </button>
                <button
                  onClick={onSubscribeClick}
                  className="px-2 py-1 text-[10px] bg-[#0D1B2A] text-white font-semibold uppercase hover:bg-[#0066FF] transition-colors"
                >
                  Assinar
                </button>
              </div>
            </div>
          </div>

          {/* Right Block: Edition Price & Digital Access (Desktop/Tablet) */}
          <div className="hidden md:flex md:col-span-3 flex-col items-end justify-center text-[11px] leading-tight text-[#44474c] space-y-1.5 border-l border-[#E5E7EB] pl-4">
            <div className="text-right">
              <span className="font-semibold text-[#0D1B2A]">Preço de Capa:</span> 50,00 MT
              <span className="block text-[10px] text-[#74777d]">IVA e Taxa de Selo incluídos</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onOpenPrintEdition}
                className="px-2.5 py-1 text-[11px] font-medium bg-transparent border border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white transition-colors cursor-pointer"
              >
                Edição em PDF
              </button>
              
              <button
                onClick={onSubscribeClick}
                className="px-2.5 py-1 text-[11px] font-semibold bg-[#0D1B2A] text-white hover:bg-[#0066FF] transition-colors uppercase tracking-wider cursor-pointer"
              >
                Assinar
              </button>
            </div>
          </div>

        </div>

        {/* Bottom double hairline rule */}
        <div className="w-full broadsheet-double-rule mt-2 sm:mt-3" />

      </div>
    </header>
  );
}

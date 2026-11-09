'use client';

import React, { useState } from 'react';
import { WEATHER_DATA, FINANCIAL_TICKER, WeatherData, MarketItem } from '@/data/articles';
import { Radio, Search, Printer, Sun, ChevronDown, Volume2 } from 'lucide-react';

interface TopUtilityRailProps {
  onOpenSearch: () => void;
  onOpenPrintEdition: () => void;
  onSelectEdition: (edition: string) => void;
  currentEdition: string;
  onToggleBroadcastDrawer?: () => void;
  fontSizeLevel: number;
  onAdjustFontSize: (delta: number) => void;
}

export default function TopUtilityRail({
  onOpenSearch,
  onOpenPrintEdition,
  onSelectEdition,
  currentEdition,
  onToggleBroadcastDrawer,
  fontSizeLevel,
  onAdjustFontSize
}: TopUtilityRailProps) {
  const [editionDropdownOpen, setEditionDropdownOpen] = useState(false);
  const [activeWeatherIndex, setActiveWeatherIndex] = useState(0);

  const editions = [
    'Edição Nacional / Maputo',
    'Edição Centro / Beira & Sofala',
    'Edição Norte / Nampula & Pemba',
    'Edição Zambézia & Tete',
    'Edição Internacional & Diáspora'
  ];

  const currentWeather: WeatherData = WEATHER_DATA[activeWeatherIndex];

  return (
    <div className="w-full bg-[#f1f3ff] border-b border-[#E5E7EB] text-[#141b2b] text-[12px] font-sans antialiased">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          
          {/* Left Zone: Date & Edition Selector */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-semibold uppercase tracking-wider text-[#0D1B2A]">
              Domingo, 8 de Novembro de 2026
            </span>
            <span className="text-[#c4c6cc] hidden sm:inline">|</span>

            {/* Edition Dropdown */}
            <div className="relative">
              <button
                onClick={() => setEditionDropdownOpen(!editionDropdownOpen)}
                className="flex items-center gap-1.5 text-[#0D1B2A] font-medium hover:text-[#0066FF] transition-colors py-0.5 px-1 border border-transparent hover:border-[#E5E7EB]"
                aria-expanded={editionDropdownOpen}
              >
                <span>{currentEdition}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#74777d]" />
              </button>

              {editionDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-[#E5E7EB] shadow-lg z-50 py-1">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-[#74777d] border-b border-[#E5E7EB]">
                    Selecione a Região de Notícias
                  </div>
                  {editions.map((ed) => (
                    <button
                      key={ed}
                      onClick={() => {
                        onSelectEdition(ed);
                        setEditionDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#f1f3ff] transition-colors ${
                        currentEdition === ed ? 'font-bold text-[#0066FF] bg-[#f1f3ff]' : 'text-[#141b2b]'
                      }`}
                    >
                      {ed}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Middle Zone: Weather ticker & Markets mini-strip */}
          <div className="hidden lg:flex items-center gap-4 text-xs">
            {/* Weather selector */}
            <button
              onClick={() => setActiveWeatherIndex((prev) => (prev + 1) % WEATHER_DATA.length)}
              className="flex items-center gap-1.5 text-[#44474c] hover:text-[#0D1B2A] transition-colors group cursor-pointer"
              title="Clique para alternar província"
            >
              <Sun className="w-3.5 h-3.5 text-amber-600" />
              <span className="font-medium text-[#0D1B2A]">{currentWeather.city}:</span>
              <span>{currentWeather.temp}°C {currentWeather.condition}</span>
              <span className="text-[10px] text-[#74777d]">({currentWeather.humidity} hum)</span>
            </button>

            <span className="text-[#c4c6cc]">|</span>

            {/* Financial indicators */}
            <div className="flex items-center gap-3 text-[11px] font-mono tabular-nums">
              {FINANCIAL_TICKER.slice(0, 3).map((item: MarketItem) => (
                <div key={item.code} className="flex items-center gap-1">
                  <span className="font-semibold text-[#0D1B2A]">{item.code}</span>
                  <span>{item.price}</span>
                  <span className={item.isUp ? 'text-emerald-700 font-bold' : 'text-red-600 font-bold'}>
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Zone: Controls & Quick Actions */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            {/* Live TV & Radio trigger */}
            <button
              onClick={onToggleBroadcastDrawer}
              className="flex items-center gap-1.5 px-2 py-0.5 bg-[#0D1B2A] text-white hover:bg-[#0066FF] transition-colors text-[11px] font-medium tracking-wide uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>Emissão ao Vivo</span>
              <Radio className="w-3 h-3 ml-0.5" />
            </button>

            {/* Print Replica */}
            <button
              onClick={onOpenPrintEdition}
              className="hidden sm:flex items-center gap-1 text-[#0D1B2A] hover:text-[#0066FF] transition-colors px-1 py-0.5"
              title="Ver réplica da edição impressa em formato broadsheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline font-medium">Jornal Impresso (PDF)</span>
            </button>

            {/* Font scaling controls */}
            <div className="hidden sm:flex items-center gap-1 border border-[#E5E7EB] bg-white px-1 py-0.5">
              <button
                onClick={() => onAdjustFontSize(-1)}
                disabled={fontSizeLevel <= -1}
                className="text-[10px] font-bold px-1 hover:text-[#0066FF] disabled:opacity-30"
                title="Diminuir texto"
              >
                A-
              </button>
              <span className="text-[#c4c6cc]">/</span>
              <button
                onClick={() => onAdjustFontSize(1)}
                disabled={fontSizeLevel >= 2}
                className="text-[11px] font-bold px-1 hover:text-[#0066FF] disabled:opacity-30"
                title="Aumentar texto"
              >
                A+
              </button>
            </div>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1 text-[#0D1B2A] hover:text-[#0066FF] transition-colors px-1 py-0.5"
              aria-label="Abrir pesquisa"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-xs">Pesquisar</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { BREAKING_DISPATCHES, DispatchItem } from '@/data/articles';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface BreakingTickerProps {
  onSelectDispatch: (dispatch: DispatchItem) => void;
}

export default function BreakingTicker({ onSelectDispatch }: BreakingTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BREAKING_DISPATCHES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentDispatch = BREAKING_DISPATCHES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BREAKING_DISPATCHES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + BREAKING_DISPATCHES.length) % BREAKING_DISPATCHES.length);
  };

  return (
    <div className="w-full bg-[#0F1C2C] text-white border-y border-[#0D1B2A] py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2 sm:gap-3 text-xs">
        
        {/* Left: Urgent Status Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="bg-[#C91414] text-white px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase flex items-center gap-1 sm:gap-1.5 shadow-xs">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00D2FF] animate-pulse shrink-0" />
            <span>URGENTE</span>
          </div>
          <span className="text-[#00D2FF] font-mono text-[10px] sm:text-[11px] font-bold tabular-nums">
            {currentDispatch.time} CAT
          </span>
          <span className="text-[#778598] hidden sm:inline">|</span>
          <span className="text-[#bac8dc] text-[10px] font-semibold uppercase tracking-wider hidden md:inline">
            {currentDispatch.category}
          </span>
        </div>

        {/* Center: Headline with click-to-read */}
        <div className="flex-1 min-w-0 px-1 sm:px-2">
          <button
            onClick={() => onSelectDispatch(currentDispatch)}
            className="w-full text-left truncate font-medium text-white hover:text-[#00D2FF] transition-colors cursor-pointer group text-[11px] sm:text-xs"
          >
            <span className="group-hover:underline">{currentDispatch.title}</span>
          </button>
        </div>

        {/* Right: Controls (Previous, Next, Pause/Play) with min 36px hitboxes */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0 text-[#bac8dc]">
          <span className="text-[10px] sm:text-[11px] font-mono text-[#778598] mr-1 hidden sm:inline">
            {currentIndex + 1}/{BREAKING_DISPATCHES.length}
          </span>
          
          <button
            onClick={handlePrev}
            className="p-1.5 hover:text-white transition-colors cursor-pointer min-h-[36px] min-w-[32px] flex items-center justify-center"
            aria-label="Notícia anterior"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 hover:text-white transition-colors cursor-pointer min-h-[36px] min-w-[32px] flex items-center justify-center"
            aria-label={isPlaying ? "Pausar rotação" : "Retomar rotação"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleNext}
            className="p-1.5 hover:text-white transition-colors cursor-pointer min-h-[36px] min-w-[32px] flex items-center justify-center"
            aria-label="Próxima notícia"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}

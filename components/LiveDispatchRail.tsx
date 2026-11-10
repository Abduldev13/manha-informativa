'use client';

import React, { useState } from 'react';
import { BREAKING_DISPATCHES, DispatchItem } from '@/data/articles';
import { Radio, Tv, Volume2, VolumeX, Maximize2, Compass, Waves, Clock, Phone, HeartPulse, Shield } from 'lucide-react';

interface LiveDispatchRailProps {
  onSelectDispatch: (dispatch: DispatchItem) => void;
  onOpenLiveBroadcastModal: () => void;
}

export default function LiveDispatchRail({
  onSelectDispatch,
  onOpenLiveBroadcastModal
}: LiveDispatchRailProps) {
  const [streamType, setStreamType] = useState<'tv' | 'radio'>('tv');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-col gap-4 sm:gap-5">
      
      {/* 1. Live Television & Radio Broadcast Mini-Deck */}
      <div className="bg-[#0A192F] text-white border border-[#0D1B2A] p-3 flex flex-col justify-between">
        <div>
          {/* Telemetry Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="bg-[#C91414] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                <span>DIRETO</span>
              </span>
              <span className="text-[11px] font-mono text-[#00D2FF] font-semibold">
                SINAL NACIONAL
              </span>
            </div>

            <button
              onClick={onOpenLiveBroadcastModal}
              className="text-[#bac8dc] hover:text-white transition-colors p-1 cursor-pointer min-h-[32px] min-w-[32px] flex items-center justify-center"
              title="Expandir emissão ao vivo"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Video / Stream Screen Frame */}
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border border-white/10 flex flex-col justify-between p-2.5 sm:p-3">
            {/* Background visual for broadcast studio */}
            <div className="absolute inset-0 bg-radial from-slate-800 via-slate-900 to-slate-950 opacity-90" />
            
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.4)_51%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

            {/* Studio Telemetry Overlays */}
            <div className="relative z-10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono">
              <span className="bg-[#0D1B2A]/90 text-white px-1.5 py-0.5 border border-white/20">
                ESTÚDIO · MAPUTO
              </span>
              <span className="text-[#00D2FF] font-bold">1080p · 50 FPS</span>
            </div>

            {/* Central graphic anchor indicator */}
            <div className="relative z-10 text-center my-auto">
              <div className="inline-block p-1.5 sm:p-2 bg-[#0D1B2A]/80 border border-[#0066FF]/40 backdrop-blur-xs">
                <p className="text-[9px] uppercase font-mono tracking-widest text-[#778598]">Telejornal</p>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-white mt-0.5">
                  Emissão Contínua
                </h4>
                <p className="text-[9px] sm:text-[10px] text-[#00D2FF]">Dr. Bento Tamele & Sandra Machava</p>
              </div>
            </div>

            {/* Bottom Stream Control Bar */}
            <div className="relative z-10 flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/10 text-[11px]">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setStreamType('tv')}
                  className={`px-1.5 py-0.5 uppercase text-[9px] sm:text-[10px] font-bold cursor-pointer ${
                    streamType === 'tv' ? 'bg-[#0066FF] text-white' : 'text-[#bac8dc] hover:text-white'
                  }`}
                >
                  TV 24H
                </button>
                <button
                  onClick={() => setStreamType('radio')}
                  className={`px-1.5 py-0.5 uppercase text-[9px] sm:text-[10px] font-bold flex items-center gap-1 cursor-pointer ${
                    streamType === 'radio' ? 'bg-[#0066FF] text-white' : 'text-[#bac8dc] hover:text-white'
                  }`}
                >
                  <Radio className="w-2.5 h-2.5" />
                  <span>92.3 FM</span>
                </button>
              </div>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1 text-[#bac8dc] hover:text-white transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Audio Spectrum Waves below frame */}
        <div className="mt-2 flex items-center justify-between gap-0.5 h-2.5 sm:h-3 px-1">
          {[12, 28, 45, 80, 60, 95, 40, 70, 85, 30, 50, 90, 65, 35, 75, 45, 60, 20].map((val, idx) => (
            <span
              key={idx}
              className="flex-1 bg-[#00D2FF]/80 transition-all duration-150"
              style={{
                height: isPlaying ? `${(val % 90) + 10}%` : '20%',
                opacity: isMuted ? 0.3 : 0.9
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. Live Dispatch Wire: Fio de Notícias ao Minuto */}
      <div className="bg-white border border-[#E5E7EB] p-3 flex flex-col justify-between">
        <div>
          {/* Section Header */}
          <div className="border-b-2 border-[#0D1B2A] pb-1.5 mb-2.5 flex items-center justify-between">
            <h4 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D1B2A] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Fio de Notícias</span>
            </h4>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#74777d]">
              AO MINUTO
            </span>
          </div>

          {/* Chronological Wire Items */}
          <div className="divide-y divide-[#E5E7EB] space-y-2.5 max-h-[360px] overflow-y-auto no-scrollbar pr-0.5">
            {BREAKING_DISPATCHES.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectDispatch(item)}
                className="pt-2.5 first:pt-0 cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#0066FF] tabular-nums">
                    {item.time}
                  </span>
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1 bg-[#f1f3ff] text-[#44474c]">
                    {item.category}
                  </span>
                </div>

                <h5 className="font-serif text-xs font-semibold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h5>

                <p className="font-sans text-[10px] sm:text-[11px] text-[#74777d] mt-0.5 line-clamp-2 leading-tight">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Maritime & Weather Bulletin */}
      <div className="bg-[#f1f3ff] border border-[#E5E7EB] p-3 text-xs flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 font-bold uppercase text-[10px] sm:text-[11px] text-[#0D1B2A] border-b border-[#E5E7EB] pb-1.5 mb-2">
            <Waves className="w-3.5 h-3.5 text-[#0050cc]" />
            <span>Boletim Marítimo & Costa</span>
          </div>
          
          <div className="space-y-1.5 text-[10px] sm:text-[11px] text-[#44474c]">
            <div className="flex justify-between">
              <span className="font-medium text-[#0D1B2A]">Baía de Maputo:</span>
              <span>Vagas 1.2m · Calmo</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[#0D1B2A]">Canal Moçambique:</span>
              <span>Ventos 20 nós SE</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[#0D1B2A]">Costa de Pemba:</span>
              <span>Visib. 10 milhas</span>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-2 border-t border-[#E5E7EB] flex items-center gap-1 text-[9px] sm:text-[10px] text-[#74777d]">
          <Compass className="w-3 h-3 text-[#74777d] shrink-0" />
          <span className="truncate">Instituto Nacional de Meteorologia</span>
        </div>
      </div>

      {/* 4. Linhas de Apoio & Serviços de Emergência Nampula */}
      <div className="bg-white border-2 border-[#0D1B2A] p-3 text-xs flex flex-col space-y-2">
        <div className="border-b border-[#0D1B2A] pb-1 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#ba1a1a] flex items-center gap-1">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Linhas de Apoio</span>
          </span>
          <span className="text-[9px] text-[#74777d] uppercase font-mono">NAMPULA</span>
        </div>

        <div className="space-y-2 text-[11px] text-[#141b2b]">
          <div className="p-1.5 bg-[#f1f3ff] border border-[#E5E7EB]">
            <span className="font-bold block text-[#0D1B2A] text-[10px] uppercase">Apoio à Família e Jovens:</span>
            <div className="flex items-center justify-between font-mono text-[#0066FF] font-bold text-xs mt-0.5">
              <span>Linha Fala Criança</span>
              <span>116</span>
            </div>
          </div>

          <div className="p-1.5 bg-[#f1f3ff] border border-[#E5E7EB]">
            <span className="font-bold block text-[#0D1B2A] text-[10px] uppercase">Saúde Mental & Dependência:</span>
            <div className="flex items-center justify-between font-mono text-[#0066FF] font-bold text-xs mt-0.5">
              <span>ICAP / Hosp. Geral</span>
              <span>800 112 233</span>
            </div>
          </div>

          <div className="p-1.5 bg-[#f1f3ff] border border-[#E5E7EB]">
            <span className="font-bold block text-[#0D1B2A] text-[10px] uppercase">Piquete SERNIC Nampula:</span>
            <div className="flex items-center justify-between font-mono text-[#0066FF] font-bold text-xs mt-0.5">
              <span>Denúncias & Apoio</span>
              <span>84 312 9000</span>
            </div>
          </div>
        </div>

        <p className="text-[9px] text-[#74777d] text-center pt-1 border-t border-[#E5E7EB]">
          Chamadas gratuitas e confidenciais.
        </p>
      </div>

    </div>
  );
}

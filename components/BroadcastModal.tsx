'use client';

import React, { useState } from 'react';
import { X, Radio, Tv, Volume2, VolumeX, Signal } from 'lucide-react';

interface BroadcastModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BroadcastModal({ isOpen, onClose }: BroadcastModalProps) {
  const [channel, setChannel] = useState<'tv' | 'radio'>('tv');
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0A192F] text-white border border-[#00D2FF]/40 shadow-2xl flex flex-col my-auto max-h-[96vh] sm:max-h-[92vh] overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-2.5 sm:p-3 bg-[#0D1B2A] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="bg-[#C91414] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>EM DIRETO</span>
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-[#00D2FF] truncate">
              TMT Moçambique · Canal 01 & FM 92.3 MHz
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 bg-white/10 p-0.5 text-xs font-bold">
              <button
                onClick={() => setChannel('tv')}
                className={`px-2 sm:px-2.5 py-1 flex items-center gap-1 text-[11px] cursor-pointer min-h-[32px] ${
                  channel === 'tv' ? 'bg-[#0066FF] text-white' : 'text-[#bac8dc] hover:text-white'
                }`}
              >
                <Tv className="w-3.5 h-3.5" />
                <span>TV 24H</span>
              </button>

              <button
                onClick={() => setChannel('radio')}
                className={`px-2 sm:px-2.5 py-1 flex items-center gap-1 text-[11px] cursor-pointer min-h-[32px] ${
                  channel === 'radio' ? 'bg-[#0066FF] text-white' : 'text-[#bac8dc] hover:text-white'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>Rádio</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Fechar emissão"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Screen Frame */}
        <div className="relative aspect-video w-full bg-slate-950 flex flex-col justify-between p-2.5 sm:p-4 overflow-hidden">
          
          {/* Background studio visual */}
          <div className="absolute inset-0 bg-radial from-slate-800 via-slate-900 to-slate-950 opacity-95" />
          
          {/* Scanline pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

          {/* Top Overlays */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="bg-[#0D1B2A]/90 px-2 py-0.5 text-white border border-white/20 text-[9px] sm:text-[10px]">
                MANHÃ INFORMATIVO TV · NAMPULA & MAPUTO
              </span>
              <span className="text-[#00D2FF] text-[9px] sm:text-[10px] hidden xs:flex items-center gap-1">
                <Signal className="w-3 h-3" />
                <span>SINAL ESTÁVEL</span>
              </span>
            </div>

            <span className="text-white/80 text-[9px] sm:text-[10px]">
              CAT 11:34:20
            </span>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 text-center my-auto px-2">
            <div className="inline-block p-3 sm:p-4 bg-[#0D1B2A]/90 border border-[#0066FF] shadow-2xl backdrop-blur-md max-w-lg">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#00D2FF] block mb-1">
                {channel === 'tv' ? 'TELEJORNAL NACIONAL CONTÍNUO' : 'EMISSÃO RADIOFÓNICA DE DEBATE'}
              </span>
              <h2 className="font-serif text-lg xs:text-xl sm:text-2xl font-bold text-white leading-tight">
                Debate: Corredor de Nacala e a Soberania Energética
              </h2>
              <p className="text-[11px] sm:text-xs text-[#bac8dc] mt-1.5 hidden xs:block">
                Em direto com enviados especiais a Nacala, Nampula e Maputo.
              </p>
            </div>
          </div>

          {/* Broadcast Lower Thirds News Strip */}
          <div className="relative z-10 bg-[#0D1B2A]/95 border-t border-[#0066FF] p-2 sm:p-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 truncate">
              <span className="bg-[#C91414] text-white px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0">
                DIRETO
              </span>
              <span className="truncate text-white font-medium text-[11px] sm:text-xs">
                Assembleia da República conclui parecer sobre incentivos fiscais e expansão portuária
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1 hover:text-[#00D2FF] text-[#bac8dc] transition-colors cursor-pointer min-h-[32px] min-w-[32px] flex items-center justify-center"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Schedule & Frequency Details */}
        <div className="p-3 sm:p-4 bg-[#0D1B2A] border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#778598] block mb-0.5 sm:mb-1">
              Próximo Programa
            </span>
            <p className="font-serif font-bold text-sm text-white">
              12:00 — Edição das Doze
            </p>
            <p className="text-[11px] text-[#bac8dc]">Apresentação: Sandra Machava</p>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold text-[#778598] block mb-0.5 sm:mb-1">
              Frequências de Emissão
            </span>
            <p className="text-[11px] text-[#bac8dc]">
              Nampula: 88.2 MHz · Maputo: 92.3 MHz · Beira: 96.5 MHz
            </p>
          </div>

          <div className="text-left md:text-right flex flex-col justify-end">
            <span className="text-[10px] text-[#778598]">
              Emissão sob licença do ARECOM (Moçambique)
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

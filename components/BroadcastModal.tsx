'use client';

import React, { useState } from 'react';
import { X, Radio, Tv, Volume2, VolumeX, Maximize2, Shield, Signal, Cast } from 'lucide-react';

interface BroadcastModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BroadcastModal({ isOpen, onClose }: BroadcastModalProps) {
  const [channel, setChannel] = useState<'tv' | 'radio'>('tv');
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex justify-center p-2 sm:p-4 lg:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#0A192F] text-white border border-[#00D2FF]/40 shadow-2xl flex flex-col my-auto max-h-[92vh] overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-3 bg-[#0D1B2A] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#C91414] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>EMISSÃO NACIONAL EM DIRETO</span>
            </span>
            <span className="text-xs font-mono text-[#00D2FF]">
              TMT Moçambique · Canal 01 & FM 92.3 MHz
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white/10 p-0.5 text-xs font-bold">
              <button
                onClick={() => setChannel('tv')}
                className={`px-2.5 py-1 flex items-center gap-1 ${
                  channel === 'tv' ? 'bg-[#0066FF] text-white' : 'text-[#bac8dc] hover:text-white'
                }`}
              >
                <Tv className="w-3.5 h-3.5" />
                <span>Televisão 24H</span>
              </button>

              <button
                onClick={() => setChannel('radio')}
                className={`px-2.5 py-1 flex items-center gap-1 ${
                  channel === 'radio' ? 'bg-[#0066FF] text-white' : 'text-[#bac8dc] hover:text-white'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>Rádio Pública</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Screen Frame */}
        <div className="relative aspect-video w-full bg-slate-950 flex flex-col justify-between p-4 overflow-hidden">
          
          {/* Background studio visual */}
          <div className="absolute inset-0 bg-radial from-slate-800 via-slate-900 to-slate-950 opacity-95" />
          
          {/* Scanline subtle pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

          {/* Top Overlays */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="bg-[#0D1B2A]/90 px-2 py-0.5 text-white border border-white/20 text-[10px]">
                MANHÃ INFORMATIVO TV · EMISSOR NAMPULA
              </span>
              <span className="text-[#00D2FF] text-[10px] flex items-center gap-1">
                <Signal className="w-3 h-3" />
                <span>SINAL ESTÁVEL</span>
              </span>
            </div>

            <span className="text-white/80 text-[10px]">
              HORA OFICIAL CAT: 11:34:20
            </span>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 text-center my-auto">
            <div className="inline-block p-4 bg-[#0D1B2A]/90 border border-[#0066FF] shadow-2xl backdrop-blur-md max-w-lg">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#00D2FF] block mb-1">
                {channel === 'tv' ? 'TELEJORNAL NACIONAL CONTÍNUO' : 'EMISSÃO RADIOFÓNICA DE DEBATE'}
              </span>
              <h2 className="font-serif text-2xl font-bold text-white leading-tight">
                Debate Estratégico: O Impacto do Corredor de Nacala e a Soberania Energética
              </h2>
              <p className="text-xs text-[#bac8dc] mt-2">
                Em direto com enviados especiais a Nacala, Beira e Maputo.
              </p>
            </div>
          </div>

          {/* Broadcast Lower Thirds News Strip */}
          <div className="relative z-10 bg-[#0D1B2A]/95 border-t border-[#0066FF] p-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 truncate">
              <span className="bg-[#C91414] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0">
                DIRETO
              </span>
              <span className="truncate text-white font-medium">
                Assembleia da República conclui parecer conjunto sobre modernização portuária e incentivos fiscais
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0 ml-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1 hover:text-[#00D2FF] text-[#bac8dc] transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Schedule & Frequency Details */}
        <div className="p-4 bg-[#0D1B2A] border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#778598] block mb-1">
              Próximo Programa
            </span>
            <p className="font-serif font-bold text-sm text-white">
              12:00 — Edição de Notícias das Doze
            </p>
            <p className="text-[11px] text-[#bac8dc]">Apresentação: Sandra Machava</p>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold text-[#778598] block mb-1">
              Frequências de Emissão
            </span>
            <p className="text-[11px] text-[#bac8dc]">
              Maputo: 92.3 MHz · Beira: 96.5 MHz · Nampula: 88.2 MHz · Tete: 90.1 MHz
            </p>
          </div>

          <div className="text-right flex flex-col justify-end">
            <span className="text-[10px] text-[#778598]">
              Emissão autorizada sob licença do Instituto das Comunicações de Moçambique (ARECOM)
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

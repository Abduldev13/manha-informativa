'use client';

import React, { useState } from 'react';
import { Play, Pause, Radio, Tv, Headphones, Film, Share2, Check, Clock, Eye } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'video' | 'podcast';
  title: string;
  duration: string;
  show: string;
  presenter: string;
  description: string;
  thumbnail: string;
  viewsOrListens: string;
  videoSrc?: string;
}

const BROADCAST_ITEMS: MediaItem[] = [
  {
    id: 'vid-nampula-drogas-campo',
    type: 'video',
    title: 'Reportagem Especial: Consumo de drogas entre jovens preocupa a sociedade em Nampula',
    duration: '01:43 min',
    show: 'Emissão Especial Nampula',
    presenter: 'Equipa de Reportagem de Campo',
    description: 'A problemática do consumo de substâncias psicoativas entre os jovens levanta preocupações sobre o futuro da juventude e a necessidade de maior consciencialização nas comunidades.',
    thumbnail: '/assets/aistudio/WhatsApp_Image_2026-11-09_at_09.39.40_624df156.jpeg',
    videoSrc: '/assets/aistudio/whatsapp-video-2026-11-09-at-172750_AGxcINv2_659203cc.mp4',
    viewsOrListens: '16.8K visualizações'
  },
  {
    id: 'pod-1',
    type: 'podcast',
    title: 'Podcast Manhã Diplomática: A Presidência de Moçambique no Conselho de Segurança da ONU',
    duration: '38:40 min',
    show: 'Grande Entrevista Semanal',
    presenter: 'Dr. Bento Tamele entrevista Embaixador Pedro Comissário',
    description: 'Análise profunda sobre a agenda da paz africana, a proteção ambiental em zonas de conflito e a cooperação regional na SADC.',
    thumbnail: '/assets/images/parlamento_assembleia_debate_1794183536677.jpg',
    viewsOrListens: '12.1K audições'
  },
  {
    id: 'vid-2',
    type: 'video',
    title: 'Reportagem Especial: Parque Nacional e Infraestruturas Energéticas de Cahora Bassa',
    duration: '18:50 min',
    show: 'Fronteiras Naturais',
    presenter: 'Helena Mondlane, em Songo',
    description: 'A grandiosidade da engenharia hidroelétrica e a preservação do ecossistema do vale do Zambeze.',
    thumbnail: '/assets/images/cahora_bassa_barragem_1794183564236.jpg',
    viewsOrListens: '29.3K visualizações'
  }
];

export default function MultimediaBroadcastSection() {
  const [activeMedia, setActiveMedia] = useState<MediaItem>(BROADCAST_ITEMS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="w-full bg-[#0A192F] text-white border-y border-[#0D1B2A] py-8 sm:py-10 my-6 sm:my-8">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-white/20 pb-3 mb-5 sm:mb-6 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-[#C91414] text-white px-2 sm:px-2.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>EMISSÃO MULTIMÉDIA</span>
            </div>
            <h3 className="font-serif text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Manhã Audiovisual & Podcasting
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#bac8dc]">
            <span className="flex items-center gap-1">
              <Tv className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="hidden xs:inline">Televisão Digital</span>
            </span>
            <span className="hidden xs:inline">·</span>
            <span className="flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>92.3 FM Nacional</span>
            </span>
          </div>
        </div>

        {/* Main Cinema Grid: Left big player, right playlist stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* Big Featured Video Frame (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950 border border-white/10 p-2 sm:p-4">
            <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
              {activeMedia.videoSrc && isPlaying ? (
                <video
                  src={activeMedia.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                >
                  O seu navegador não suporta a reprodução de vídeo.
                </video>
              ) : (
                <>
                  <img
                    src={activeMedia.thumbnail}
                    alt={activeMedia.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Central Play/Pause Trigger */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0066FF] hover:bg-[#00D2FF] hover:text-[#0D1B2A] transition-colors flex items-center justify-center text-white cursor-pointer shadow-xl min-h-[48px] min-w-[48px]"
                    aria-label="Reproduzir vídeo"
                  >
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-current" />
                  </button>
                </>
              )}

              {/* Overlay Indicators */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-2 pointer-events-none">
                <span className="bg-[#0D1B2A]/90 text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 sm:py-1 border border-white/20">
                  {activeMedia.show}
                </span>
                {isPlaying && (
                  <span className="bg-emerald-600 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 animate-pulse">
                    EM REPRODUÇÃO
                  </span>
                )}
              </div>

              {!isPlaying && (
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-black/80 text-white text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:py-1">
                  {activeMedia.duration}
                </div>
              )}
            </div>

            {/* Video metadata description */}
            <div className="pt-3 sm:pt-4">
              <div className="flex flex-wrap items-center justify-between text-xs text-[#bac8dc] mb-1 gap-1">
                <span>{activeMedia.presenter}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px] sm:text-xs">
                    <Eye className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>{activeMedia.viewsOrListens}</span>
                  </span>
                  <button
                    onClick={handleShare}
                    className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer min-h-[32px]"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado!' : 'Partilhar'}</span>
                  </button>
                </div>
              </div>

              <h4 className="font-serif text-lg sm:text-2xl font-bold text-white mt-1 leading-snug">
                {activeMedia.title}
              </h4>

              <p className="font-sans text-xs sm:text-sm text-[#bac8dc] mt-2 leading-relaxed">
                {activeMedia.description}
              </p>
            </div>
          </div>

          {/* Right Playlist Stack (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#778598] pb-1 border-b border-white/10">
              Próximas Emissões & Documentários
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {BROADCAST_ITEMS.map((item) => {
                const isSelected = item.id === activeMedia.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveMedia(item);
                      setIsPlaying(true);
                    }}
                    className={`p-2.5 sm:p-3 border transition-colors cursor-pointer min-h-[64px] ${
                      isSelected
                        ? 'bg-white/10 border-[#00D2FF]'
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex gap-2.5 sm:gap-3 items-center">
                      <div className="relative w-24 sm:w-28 aspect-video shrink-0 bg-slate-900 overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                        <span className="absolute bottom-0.5 right-0.5 text-[8px] sm:text-[9px] bg-black/80 font-mono px-1 text-white">
                          {item.duration}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider text-[#00D2FF] block mb-0.5">
                          {item.show}
                        </span>
                        <h5 className="font-serif text-xs font-semibold text-white line-clamp-2 leading-tight">
                          {item.title}
                        </h5>
                        <span className="text-[9px] sm:text-[10px] text-[#778598] mt-0.5 sm:mt-1 block">
                          {item.viewsOrListens}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live radio callout box */}
            <div className="p-3 bg-[#0D1B2A] border border-white/10 text-xs">
              <div className="flex items-center gap-2 text-[#00D2FF] font-bold uppercase text-[10px] tracking-wider mb-1">
                <Headphones className="w-3.5 h-3.5 shrink-0" />
                <span>Rádio Pública em Direto</span>
              </div>
              <p className="text-[11px] text-[#bac8dc]">
                Sintonize a grelha de programação informativa 24 horas por dia em streaming de alta fidelidade sem anúncios.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

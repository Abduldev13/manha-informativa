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
}

const BROADCAST_ITEMS: MediaItem[] = [
  {
    id: 'vid-1',
    type: 'video',
    title: 'Documentário Exclusivo: O Renascimento do Porto da Beira e a Ligação ao Zimbabué',
    duration: '24:18 min',
    show: 'Emissão Especial',
    presenter: 'Equipa de Reportagem de Sofala',
    description: 'Investigação no terreno sobre o novo cais de granéis agrícolas e a dragagem contínua do canal de acesso após a época ciclónica.',
    thumbnail: '/assets/images/porto_beira_logistica_1794183565074.jpg',
    viewsOrListens: '18.4K visualizações'
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
    <section className="w-full bg-[#0A192F] text-white border-y border-[#0D1B2A] py-10 my-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-white/20 pb-3 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#C91414] text-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>EMISSÃO MULTIMÉDIA</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Manhã Audiovisual & Podcasting de Serviço Público
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#bac8dc]">
            <span className="flex items-center gap-1">
              <Tv className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Televisão Digital Aberta</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Ondas Médias & FM Nacional</span>
            </span>
          </div>
        </div>

        {/* Main Cinema Grid: Left big player, right playlist stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Big Featured Video Frame (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950 border border-white/10 p-2 sm:p-4">
            <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
              <img
                src={activeMedia.thumbnail}
                alt={activeMedia.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Central Play/Pause Trigger */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#0066FF] hover:bg-[#00D2FF] hover:text-[#0D1B2A] transition-colors flex items-center justify-center text-white cursor-pointer shadow-xl"
                aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1 fill-current" />}
              </button>

              {/* Overlay Indicators */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-[#0D1B2A]/90 text-white text-[10px] uppercase font-bold tracking-widest px-2 py-1 border border-white/20">
                  {activeMedia.show}
                </span>
                {isPlaying && (
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 animate-pulse">
                    EM REPRODUÇÃO
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-mono px-2 py-1">
                {activeMedia.duration}
              </div>
            </div>

            {/* Video metadata description */}
            <div className="pt-4">
              <div className="flex items-center justify-between text-xs text-[#bac8dc] mb-1">
                <span>{activeMedia.presenter}</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>{activeMedia.viewsOrListens}</span>
                  </span>
                  <button
                    onClick={handleShare}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado!' : 'Partilhar'}</span>
                  </button>
                </div>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
                {activeMedia.title}
              </h4>

              <p className="font-sans text-sm text-[#bac8dc] mt-2 leading-relaxed">
                {activeMedia.description}
              </p>
            </div>
          </div>

          {/* Right Playlist Stack (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[11px] uppercase font-bold tracking-widest text-[#778598] pb-1 border-b border-white/10">
              Próximas Emissões & Documentários
            </div>

            <div className="space-y-3">
              {BROADCAST_ITEMS.map((item) => {
                const isSelected = item.id === activeMedia.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveMedia(item);
                      setIsPlaying(true);
                    }}
                    className={`p-3 border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border-[#00D2FF]'
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="relative w-28 aspect-video shrink-0 bg-slate-900 overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                        <span className="absolute bottom-0.5 right-0.5 text-[9px] bg-black/80 font-mono px-1 text-white">
                          {item.duration}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-[#00D2FF] block mb-0.5">
                          {item.show}
                        </span>
                        <h5 className="font-serif text-xs font-semibold text-white line-clamp-2 leading-tight">
                          {item.title}
                        </h5>
                        <span className="text-[10px] text-[#778598] mt-1 block">
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
                <Headphones className="w-3.5 h-3.5" />
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

'use client';

import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, MapPin, Clock, Phone, Sparkles, Check, Coffee, Cake, ExternalLink } from 'lucide-react';

export function KoffeinVideoAd() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [copied, setCopied] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const copyLocation = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText('Rua Dar-es-Salam, Próximo ao Hotel Millénio, Nampula, Moçambique');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#1b2620] text-white border-2 border-[#2b3a32] p-4 sm:p-6 shadow-md">
      
      {/* Top Broadsheet Ad Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/20 pb-2 mb-4 text-[10px] uppercase font-bold tracking-widest text-[#a8b8ae] gap-2">
        <span className="flex items-center gap-1.5 text-[#e5f0ea]">
          <Coffee className="w-3.5 h-3.5 text-[#c59b6d] shrink-0" />
          <span>Espaço Publicitário · Guia Comercial Nampula</span>
        </span>
        <span className="border border-white/30 px-1.5 py-0.5 text-[9px]">
          Anúncio Patrocinado
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
        
        {/* Video Player Column (5 cols) */}
        <div className="md:col-span-5 relative aspect-[3/4] max-w-[260px] xs:max-w-[280px] mx-auto md:mx-0 w-full bg-black overflow-hidden border border-white/20 shadow-xl group">
          <video
            ref={videoRef}
            src="/assets/aistudio/HOR_RIOS_DE_FUNCIONAMENTOTER_A_-_S_BADO_07-00_-_21-00DOMINGO_08-00_-_21-00NAMPULARUA_DAR-ES-SALA__1__45094719.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Video Control Overlays */}
          <div className="absolute top-2 right-2 flex items-center gap-1.5">
            <button
              onClick={toggleMute}
              className="p-2 bg-black/70 hover:bg-black text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
              title={isMuted ? "Ativar som" : "Desativar som"}
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-300" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
            </button>
            <button
              onClick={togglePlay}
              className="p-2 bg-black/70 hover:bg-black text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
              title={isPlaying ? "Pausar" : "Reproduzir"}
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            </button>
          </div>

          <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 text-[9px] font-mono text-[#e5f0ea]">
            KOFFEIN · VÍDEO OFICIAL
          </div>
        </div>

        {/* Brand Information & Hours Column (7 cols) */}
        <div className="md:col-span-7 space-y-3.5 sm:space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#c59b6d] font-bold block mb-1">
              EST. 2024 · NAMPULA
            </span>
            <h4 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              KOFFEIN
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#d0ded5] mt-1 leading-relaxed">
              O seu destino de eleição em Nampula para cafés de especialidade, pastelaria fresca e um ambiente sofisticado para encontros de negócios e lazer.
            </p>
          </div>

          {/* Operating Hours Box */}
          <div className="bg-[#121c16] border border-[#2b3a32] p-3 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#c59b6d] font-bold uppercase tracking-wider text-[10px] sm:text-[11px] border-b border-white/10 pb-1">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Horários de Funcionamento</span>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-[11px] sm:text-[12px]">
              <div>
                <span className="block font-semibold text-white">Terça a Sábado:</span>
                <span className="font-mono text-[#d0ded5]">07:00 – 21:00</span>
              </div>
              <div>
                <span className="block font-semibold text-white">Domingo:</span>
                <span className="font-mono text-[#d0ded5]">08:00 – 21:00</span>
              </div>
            </div>
          </div>

          {/* Location details */}
          <div className="flex items-start gap-2.5 text-xs text-[#d0ded5]">
            <MapPin className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Nampula, Cidade Capital</p>
              <p className="text-[11px] text-[#a8b8ae]">Rua Dar-es-Salam · Próximo ao Hotel Millénio</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
            <button
              onClick={copyLocation}
              className="px-4 py-2.5 bg-[#c59b6d] hover:bg-[#b08759] text-[#1b2620] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#1b2620]" />
                  <span>Endereço Copiado!</span>
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4" />
                  <span>Copiar Localização</span>
                </>
              )}
            </button>

            <a
              href="tel:+258879761113"
              className="px-4 py-2.5 bg-transparent border border-white/40 hover:bg-white/10 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Informações & Reservas</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

export function GrecyEventsAd() {
  const [copied, setCopied] = useState(false);

  const copyPhone = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText('+258879761113');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#fffcf7] text-[#141b2b] border-2 border-[#e6d8c3] p-4 sm:p-6 shadow-md">
      
      {/* Broadsheet Ad Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#e6d8c3] pb-2 mb-4 text-[10px] uppercase font-bold tracking-widest text-[#78350F] gap-2">
        <span className="flex items-center gap-1.5">
          <Cake className="w-3.5 h-3.5 text-[#b45309] shrink-0" />
          <span>Publicidade Especial · Confeitaria & Eventos Nampula</span>
        </span>
        <span className="border border-[#e6d8c3] px-1.5 py-0.5 text-[9px] text-[#78350F]">
          Anúncio Comercial
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
        
        {/* Banner Graphic Column (6 cols) */}
        <div className="md:col-span-6 relative overflow-hidden border border-[#e6d8c3] shadow-md bg-white">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-11-08_at_20.33.03_524f53a6.jpeg"
            alt="Grecy Services & Events - Bolos, Catering, Salgados, Pizzas, Refeições, Eventos Nampula"
            className="w-full h-auto object-contain max-h-[460px] mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Offer Details Column (6 cols) */}
        <div className="md:col-span-6 space-y-3.5 sm:space-y-4">
          <div>
            <span className="text-[10px] sm:text-xs uppercase font-serif tracking-widest text-[#b45309] font-bold block mb-1">
              SERVICES & EVENTS · NAMPULA
            </span>
            <h4 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-[#0D1B2A] leading-tight">
              Grecy Services & Events
            </h4>
            <p className="font-serif italic text-base sm:text-lg text-[#b45309] mt-0.5 font-medium">
              &ldquo;Sabores que Marcam Momentos&rdquo;
            </p>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#44474c] leading-relaxed">
            Especialistas em tornar as suas comemorações inesquecíveis. Bolos artísticos personalizados para casamentos e aniversários, serviços de catering completo para eventos corporativos e particulares, salgados finos, pizzas artesanais e refeições preparadas com o mais alto padrão gastronómico.
          </p>

          {/* Services highlights grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {[
              'Bolos Personalizados',
              'Serviço de Catering',
              'Salgados para Festas',
              'Pizzas Artesanais',
              'Refeições Especiais',
              'Eventos Corporativos'
            ].map((service) => (
              <div key={service} className="p-2 bg-white border border-[#e6d8c3] flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#0D1B2A]">
                <Sparkles className="w-3 h-3 text-[#b45309] shrink-0" />
                <span className="truncate">{service}</span>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="p-3 bg-[#fdf8f0] border border-[#e6d8c3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div>
              <span className="block text-[10px] uppercase font-bold text-[#78350F]">
                Encomendas & Informações Diretas
              </span>
              <a
                href="tel:+258879761113"
                className="font-mono font-bold text-base sm:text-lg text-[#0D1B2A] hover:text-[#b45309] transition-colors"
              >
                +258 87 976 1113
              </a>
              <span className="block text-[11px] text-[#74777d]">Nampula, República de Moçambique</span>
            </div>

            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2">
              <button
                onClick={copyPhone}
                className="px-3.5 py-2.5 bg-[#0D1B2A] hover:bg-[#b45309] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                {copied ? 'Copiado!' : 'Copiar Telefone'}
              </button>

              <a
                href="https://wa.me/258879761113?text=Olá,%20gostaria%20de%20fazer%20uma%20encomenda%20com%20a%20Grecy%20Services%20&%20Events."
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="text-[11px] text-[#74777d] italic">
            Celebre os seus momentos especiais connosco. Atendimento personalizado para encomendas com entrega em Nampula.
          </div>

        </div>

      </div>

    </div>
  );
}

export default function CommercialShowcase() {
  return (
    <section className="w-full my-8 sm:my-10 space-y-6 sm:space-y-8">
      {/* Classic Broadsheet Divider */}
      <div className="broadsheet-double-rule py-1" />

      <div className="flex flex-wrap items-center justify-between border-b border-[#E5E7EB] pb-2 gap-2">
        <h3 className="font-serif text-base sm:text-lg font-bold uppercase tracking-tight text-[#0D1B2A] flex items-center gap-2">
          <span>Caderno Comercial & Anúncios de Nampula</span>
        </h3>
        <span className="text-[10px] sm:text-[11px] text-[#74777d] uppercase tracking-wider font-semibold">
          Edição de Domingo
        </span>
      </div>

      {/* Grid of the two featured advertisements */}
      <div className="space-y-6 sm:space-y-8">
        <KoffeinVideoAd />
        <GrecyEventsAd />
      </div>

      <div className="broadsheet-double-rule py-1" />
    </section>
  );
}

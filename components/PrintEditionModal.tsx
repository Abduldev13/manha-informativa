'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, FileText, Check } from 'lucide-react';

interface PrintEditionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintEditionModal({ isOpen, onClose }: PrintEditionModalProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const totalPages = 24;

  const pageNames: Record<number, string> = {
    1: 'Primeira Página · Manchete Nacional',
    2: 'Editorial & Política de Estado',
    3: 'Grande Reportagem · Nacala & Infraestruturas',
    4: 'Economia & Finanças Públicas',
    5: 'Bolsa de Valores & Mercados de Matérias-Primas',
    6: 'Sociedade, Educação & Saúde Pública',
    7: 'Justiça & Auditoria do Tribunal Administrativo',
    8: 'Tribuna de Opinião · Ensaios Cívicos',
    9: 'Caderno Regional · Beira & Sofala',
    10: 'Caderno Regional · Nampula & Cabo Delgado',
    11: 'Caderno Regional · Zambézia & Niassa',
    12: 'África Austral & Integração na SADC',
    13: 'Diplomacia & Relações Internacionais',
    14: 'Cultura, Letras & Artes Vivas',
    15: 'Ciência, Inovação & Tecnologias Agrárias',
    16: 'Ambiente & Bacias Hidrográficas',
    17: 'Guia Televisivo & Grelha de Programação 24H',
    18: 'Desporto Nacional & Campeonato Moçambola',
    19: 'Anúncios Oficiais & Concursos Públicos',
    20: 'Balanço Semanal das Empresas Públicas',
    21: 'Necrologia & Atos Oficiais do Estado',
    22: 'Passatempos & Palavras Cruzadas em Português',
    23: 'Crónica da Cidade de Maputo',
    24: 'Contracapa · Fotografia Editorial do Dia'
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex flex-col justify-between p-1 sm:p-4 animate-fadeIn">
      
      {/* Top Header Controls */}
      <div className="bg-[#0D1B2A] text-white px-3 sm:px-4 py-2 sm:py-3 flex flex-wrap items-center justify-between border-b border-white/20 gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <FileText className="w-5 h-5 text-[#00D2FF] shrink-0" />
          <div>
            <h3 className="font-serif text-sm sm:text-base font-bold">
              Edição Impressa Fac-símile (PDF)
            </h3>
            <p className="text-[10px] sm:text-[11px] text-[#bac8dc]">
              Nº 9.842 · Domingo, 8 de Novembro de 2026
            </p>
          </div>
        </div>

        {/* Page Switcher & Zoom */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          <div className="flex items-center gap-1 bg-white/10 px-1.5 sm:px-2 py-1">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="p-1 hover:text-[#00D2FF] disabled:opacity-30 min-h-[32px] min-w-[28px] flex items-center justify-center cursor-pointer"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono font-bold px-1 text-[11px] sm:text-xs">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="p-1 hover:text-[#00D2FF] disabled:opacity-30 min-h-[32px] min-w-[28px] flex items-center justify-center cursor-pointer"
              aria-label="Próxima página"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-white/10 px-2 py-1">
            <button
              onClick={() => setZoomLevel((z) => Math.max(80, z - 10))}
              className="p-1 hover:text-[#00D2FF] cursor-pointer"
              aria-label="Diminuir zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="font-mono text-[11px] w-10 text-center">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(140, z + 10))}
              className="p-1 hover:text-[#00D2FF] cursor-pointer"
              aria-label="Aumentar zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-[#0066FF] hover:bg-[#00D2FF] hover:text-[#0D1B2A] transition-colors font-bold text-xs min-h-[36px] cursor-pointer"
          >
            {downloaded ? <Check className="w-4 h-4 text-white" /> : <Download className="w-4 h-4" />}
            <span className="hidden xs:inline">{downloaded ? 'A descarregar...' : 'PDF'}</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            aria-label="Fechar visualizador"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Main Broadsheet Paper Viewport */}
      <div className="flex-1 overflow-auto p-2 sm:p-4 flex justify-center items-start">
        <div
          className="bg-white text-[#141b2b] shadow-2xl p-4 sm:p-8 lg:p-12 border border-[#E5E7EB] transition-all duration-200 w-full max-w-[920px]"
        >
          {/* Top Running Header of Broadsheet */}
          <div className="flex flex-wrap justify-between items-center text-[9px] sm:text-[10px] uppercase font-bold text-[#74777d] pb-2 border-b border-[#0D1B2A] gap-1">
            <span>MANHÃ INFORMATIVO · EDIÇÃO IMPRESSA</span>
            <span className="hidden sm:inline">{pageNames[currentPage]}</span>
            <span>PÁG. {currentPage}</span>
          </div>

          {currentPage === 1 ? (
            /* Front Page BroadSheet Simulation */
            <div className="mt-4 space-y-4">
              <div className="broadsheet-double-rule py-2 text-center">
                <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-[#0D1B2A]">
                  MANHÃ INFORMATIVO
                </h1>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#44474c] mt-1 font-semibold">
                  O Diário Nacional de Investigação e Emissão Pública · Nampula & Maputo
                </p>
              </div>

              {/* Front Page Breaking Box */}
              <div className="bg-[#fff8f8] border-2 border-[#ba1a1a] p-2.5 sm:p-3 text-left">
                <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#ba1a1a] pb-1 border-b border-[#fecaca]">
                  <span>DESTAQUE JUDICIAL · TRIBUNAL SUPREMO</span>
                  <span className="font-mono">17 NOV 2026</span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#0D1B2A] mt-1 leading-snug">
                  Julgamento de Venâncio Mondlane marcado para 17 de Novembro no Tribunal Supremo
                </h3>
                <p className="font-sans text-[11px] text-[#4b5563] mt-1">
                  Antigo candidato presidencial responde a cinco acusações relacionadas com manifestações de 2024. Tribunal rejeita emissão em direto na TV mas autoriza registo escrito.
                </p>
              </div>

              {/* Front Page Sports Box */}
              <div className="bg-[#f1f3ff] border border-[#0D1B2A] p-2.5 text-left">
                <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#0D1B2A] pb-1 border-b border-[#d1d5db]">
                  <span>CADERNO DE DESPORTO · PREMIER LEAGUE</span>
                  <span className="font-mono text-[#ba1a1a]">1.º LUGAR · 27 PTS</span>
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#0D1B2A] mt-1 leading-snug">
                  Arsenal reforça liderança da Premier League e aumenta pressão sobre City e Brighton
                </h4>
                <p className="font-sans text-[11px] text-[#44474c] mt-0.5">
                  Golo de Ødegaard aos 72&apos; dá triunfo sobre o Hull City; Man City perde 3-1 ante o Forest e fica a 6 pontos.
                </p>
              </div>

              {/* Front Page Obituary Box: UCM */}
              <div className="bg-white border-2 border-[#0D1B2A] p-2.5 text-left">
                <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#0D1B2A] pb-1 border-b border-[#0D1B2A]">
                  <span>† NOTA DE FALECIMENTO · UCM NAMPULA</span>
                  <span className="font-mono text-[#ba1a1a]">1957–2026</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#0D1B2A] mt-1 leading-snug">
                  UCM anuncia morte do docente Tarcísio Abibo, da Faculdade de Educação e Comunicação
                </h4>
                <p className="font-sans text-[11px] text-[#44474c] mt-0.5">
                  A instituição manifesta profunda consternação pelo desaparecimento do académico de Nampula.
                </p>
              </div>

              {/* Front Page Headline */}
              <div className="border-y-2 border-[#0D1B2A] py-3 sm:py-4 text-center">
                <span className="text-[11px] sm:text-xs uppercase font-bold text-[#0066FF] tracking-widest block mb-1">
                  GRANDE INVESTIGAÇÃO ECONÓMICA
                </span>
                <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[#0D1B2A] leading-tight">
                  A Transformação do Corredor de Nacala e o Novo Polo Energético da África Austral
                </h2>
                <p className="font-serif italic text-sm sm:text-base text-[#44474c] max-w-2xl mx-auto mt-2">
                  Dragagem profunda para 14 metros, modernização digital portuária e interligação férrea consolidam a liderança logística de Moçambique no Índico.
                </p>
              </div>

              {/* 3-Column Newspaper Article Grid (Responsive stack on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs leading-relaxed font-sans text-justify divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
                <div className="pt-2 sm:pt-0 sm:pr-2">
                  <p className="editorial-drop-cap">
                    Nas margens serenas da baía de águas profundas de Nacala, o ritmo compassado das gruas pórtico de última geração desenha o perfil de uma nova geografia económica. O Corredor de Nacala, outrora limitado por estrangulamentos operacionais, emerge agora como o complexo mais competitivo da costa leste africana.
                  </p>
                </div>
                <div className="pt-2 sm:pt-0 sm:px-2">
                  <p>
                    A conclusão das obras de aprofundamento do cais permite a atracação de navios Post-Panamax sem necessidade de alívio prévio de carga. O tempo médio de desalfandegamento desceu vertiginosamente para escassas 8 horas, acelerando o escoamento de mercadorias estratégicas para os países vizinhos.
                  </p>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-2">
                  <p>
                    A vertente energética é outro pilar estruturante. A combinação de energia renovável solar com a rede de alta tensão de Cahora Bassa viabiliza a instalação de parques agroindustriais de transformação local com alto valor acrescentado para as províncias do Norte.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Inside Page View */
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <div className="border-b-2 border-[#0D1B2A] pb-2">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0D1B2A]">
                  {pageNames[currentPage]}
                </h2>
                <p className="text-xs text-[#74777d]">
                  Secção especializada de jornalismo analítico e dados documentais.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs text-[#141b2b] leading-relaxed">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0D1B2A]">
                    Relatório Especial & Documentação Pública
                  </h3>
                  <p>
                    O conteúdo impresso desta secção reflete as atas e inquéritos recolhidos pelas equipas de investigação do jornal nas dez províncias e na cidade capital de Maputo.
                  </p>
                  <p>
                    Todos os artigos publicados na edição física beneficiam de anotações cruzadas acessíveis através dos arquivos digitais do jornal mediante código de registo de leitor.
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-[#f1f3ff] border border-[#E5E7EB] space-y-2">
                  <h4 className="font-bold text-xs uppercase text-[#0066FF]">
                    Índice da Página {currentPage}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-[#44474c]">
                    <li>Análise setorial e pareceres técnicos de catedráticos</li>
                    <li>Declarações dos deputados e bancadas parlamentares</li>
                    <li>Séries estatísticas do Instituto Nacional de Estatística (INE)</li>
                    <li>Crónicas territoriais e reportagem de campo</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="bg-[#0D1B2A] text-white px-3 sm:px-4 py-2 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] border-t border-white/20 gap-2">
        <span className="truncate">Para assinar o envio postal diário do jornal impresso, contacte a Direção de Circulação.</span>
        <button
          onClick={onClose}
          className="text-[#00D2FF] font-bold hover:underline cursor-pointer min-h-[32px] flex items-center"
        >
          Fechar Visualizador
        </button>
      </div>

    </div>
  );
}

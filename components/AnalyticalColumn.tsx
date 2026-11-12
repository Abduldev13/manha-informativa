'use client';

import React from 'react';
import { 
  Article, 
  OPINION_COLUMNISTS, 
  ARTICLE_OPINIAO_NASSECO, 
  ARTICLE_OPINIAO_MARISSA, 
  ARTICLE_OPINIAO_NURA 
} from '@/data/articles';
import { Feather, TrendingUp } from 'lucide-react';

interface AnalyticalColumnProps {
  onSelectArticle: (article: Article) => void;
}

export default function AnalyticalColumn({ onSelectArticle }: AnalyticalColumnProps) {
  const allOpinionPieces = [
    ARTICLE_OPINIAO_NASSECO,
    ARTICLE_OPINIAO_MARISSA,
    ARTICLE_OPINIAO_NURA,
    ...OPINION_COLUMNISTS
  ];

  return (
    <aside className="w-full flex flex-col space-y-5 sm:space-y-6">
      
      {/* Section Masthead Header */}
      <div className="border-b-2 border-[#0D1B2A] pb-1">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight uppercase text-[#0D1B2A] flex items-center gap-2">
            <Feather className="w-4 h-4 text-[#0066FF]" />
            <span>Tribuna & Artigos</span>
          </h3>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#74777d]">
            Opinião & Ensaios
          </span>
        </div>
      </div>

      {/* Columnists Stack */}
      <div className="divide-y divide-[#E5E7EB] space-y-5 sm:space-y-6">
        {allOpinionPieces.map((col, index) => (
          <div
            key={col.id}
            onClick={() => onSelectArticle(col)}
            className={`cursor-pointer group pt-5 sm:pt-6 first:pt-0 ${
              index === 0 ? 'bg-[#f1f3ff]/50 p-3 sm:p-4 border border-[#E5E7EB]' : ''
            }`}
          >
            {/* Category tag */}
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#0050cc] mb-2 flex items-center justify-between">
              <span>{col.category}</span>
              <span className="text-[#74777d]">{col.readTime}</span>
            </div>

            {/* Author Presentation: Centered Portraiture & Signature */}
            <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0D1B2A] text-white flex items-center justify-center font-serif text-base font-bold shrink-0 border border-[#0066FF]/30">
                {col.author.avatar}
              </div>
              <div className="min-w-0">
                <h4 className="font-sans text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-tight">
                  {col.author.name}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#74777d] truncate">
                  {col.author.affiliation}
                </p>
              </div>
            </div>

            {/* Essay Title */}
            <h5 className="font-serif text-lg sm:text-xl font-semibold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug mb-2">
              {col.title}
            </h5>

            {/* Italic Quote */}
            <div className="relative pl-3 border-l-2 border-[#0D1B2A]/40 my-2">
              <p className="font-serif italic text-xs text-[#44474c] leading-relaxed">
                &ldquo;{col.leadParagraph.slice(0, 140)}...&rdquo;
              </p>
            </div>

            {/* Read essay link with min 32px touch target */}
            <div className="mt-2 text-right">
              <span className="text-[11px] font-bold text-[#0066FF] group-hover:underline uppercase tracking-wider inline-flex items-center min-h-[32px]">
                Ler Ensaio Completo →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Analytical Barometer Widget */}
      <div className="p-3 sm:p-4 bg-white border border-[#E5E7EB] mt-2 sm:mt-4">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-2 mb-3">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0D1B2A]">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
            <span>Barómetro CTA 2026</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5">
            +3.2 Pts
          </span>
        </div>

        <p className="text-xs text-[#44474c] leading-normal mb-3">
          Índice de Robustez Empresarial sinaliza recuperação acelerada na construção civil e logística interprovincial.
        </p>

        {/* Progress bars */}
        <div className="space-y-2 text-[11px]">
          <div>
            <div className="flex justify-between text-[#74777d] mb-0.5">
              <span>Construção & Obras</span>
              <span className="font-bold text-[#0D1B2A]">68% (+4%)</span>
            </div>
            <div className="w-full bg-[#f1f3ff] h-1.5">
              <div className="bg-[#0066FF] h-1.5 w-[68%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[#74777d] mb-0.5">
              <span>Transportes & Portos</span>
              <span className="font-bold text-[#0D1B2A]">82% (+7%)</span>
            </div>
            <div className="w-full bg-[#f1f3ff] h-1.5">
              <div className="bg-[#0D1B2A] h-1.5 w-[82%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-[#74777d] mb-0.5">
              <span>Agroindústria</span>
              <span className="font-bold text-[#0D1B2A]">74% (+2%)</span>
            </div>
            <div className="w-full bg-[#f1f3ff] h-1.5">
              <div className="bg-emerald-700 h-1.5 w-[74%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Caderno Académico UCM & Extensão Universitária Nampula */}
      <div className="p-3.5 sm:p-4 bg-[#f9f9ff] border-2 border-[#0D1B2A] space-y-3">
        <div className="border-b border-[#0D1B2A] pb-1.5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#ba1a1a]">
            UCM · NAMPULA
          </span>
          <span className="text-[9px] font-mono text-[#74777d] uppercase">
            FEC
          </span>
        </div>

        <h4 className="font-serif font-bold text-sm text-[#0D1B2A] leading-snug">
          Faculdade de Educação e Comunicação: Extensão & Cidadania
        </h4>

        <p className="font-sans text-xs text-[#44474c] leading-relaxed">
          Projetos de investigação de campo aproximam estudantes de Relações Públicas, Marketing e Jornalismo às realidades sociais de Nampula.
        </p>

        <div className="space-y-2 pt-1 border-t border-[#E5E7EB] text-xs">
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
            <div>
              <p className="font-bold text-[#0D1B2A] text-[11px]">Estágios Curriculares Obrigatórios</p>
              <p className="text-[10px] text-[#74777d]">Protocolos com empresas do Corredor de Nacala e órgãos de comunicação.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
            <div>
              <p className="font-bold text-[#0D1B2A] text-[11px]">Fórum Académico sobre Inteligência Artificial</p>
              <p className="text-[10px] text-[#74777d]">Debate com docentes e universitários sobre ética e pensamento crítico.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />
            <div>
              <p className="font-bold text-[#0D1B2A] text-[11px]">Apoio Comunitário nos Belenenses</p>
              <p className="text-[10px] text-[#74777d]">Brigadas de sensibilização juvenil e prevenção ao consumo de drogas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* In Memoriam: Mestre Tarcísio Abibo */}
      <div className="p-3.5 sm:p-4 bg-white border-2 border-[#0D1B2A] shadow-xs space-y-2.5">
        <div className="flex items-center justify-between border-b border-[#0D1B2A] pb-1 text-[10px] uppercase font-bold text-[#0D1B2A]">
          <span>† In Memoriam</span>
          <span className="font-mono text-[#ba1a1a]">1957–2026</span>
        </div>
        <h5 className="font-serif font-bold text-sm text-[#0D1B2A]">
          Mestre Tarcísio Abibo: O Legado de um Pedagogo
        </h5>
        <p className="text-xs text-[#44474c] leading-relaxed">
          Docente dedicado da Faculdade de Educação e Comunicação em Nampula. O seu compromisso com a formação ética de gerações de comunicadores perdura na memória viva da academia.
        </p>
        <div className="pt-1.5 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
          <span className="text-[10px] text-[#74777d]">Comunidade UCM em luto</span>
          <span className="text-[#0066FF] font-bold text-[11px] hover:underline cursor-pointer">
            Ver notas & condolências →
          </span>
        </div>
      </div>

      {/* Agenda Académica & Colóquios Nampula */}
      <div className="p-3.5 sm:p-4 bg-white border border-[#E5E7EB] space-y-3">
        <div className="border-b border-[#0D1B2A] pb-1 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D1B2A]">
            Agenda Académica do Norte
          </span>
          <span className="text-[9px] font-mono text-[#74777d]">NAMPULA</span>
        </div>

        <div className="divide-y divide-[#E5E7EB] space-y-2 text-xs">
          <div className="pt-2 first:pt-0">
            <span className="text-[10px] font-mono text-[#0066FF] font-bold block">14 NOV · 09:00</span>
            <p className="font-serif font-bold text-xs text-[#0D1B2A]">Seminário: O Papel dos Meios Comunitários na Paz Social</p>
            <p className="text-[10px] text-[#74777d]">Auditório Nobre da FEC · Aberto ao público</p>
          </div>
          <div className="pt-2">
            <span className="text-[10px] font-mono text-[#0066FF] font-bold block">18 NOV · 14:30</span>
            <p className="font-serif font-bold text-xs text-[#0D1B2A]">Mesa-Redonda: Transparência nas Finanças Autárquicas</p>
            <p className="text-[10px] text-[#74777d]">Parceria UCM e Conselho Municipal de Nampula</p>
          </div>
          <div className="pt-2">
            <span className="text-[10px] font-mono text-[#0066FF] font-bold block">22 NOV · 10:00</span>
            <p className="font-serif font-bold text-xs text-[#0D1B2A]">Exposição Documental: Fotografia Histórica da Ilha de Moçambique</p>
            <p className="text-[10px] text-[#74777d]">Centro Cultural de Nampula</p>
          </div>
        </div>
      </div>

      {/* Reflexão Cívica do Dia */}
      <div className="p-3 sm:p-4 bg-[#f1f3ff] border border-[#E5E7EB] text-xs text-[#141b2b]">
        <span className="text-[9px] uppercase font-bold text-[#74777d] tracking-widest block mb-1">
          Pensamento Editorial do Dia
        </span>
        <blockquote className="font-serif italic text-xs sm:text-sm text-[#0D1B2A] leading-relaxed">
          &ldquo;A juventude moçambicana é a seiva do nosso desenvolvimento. Acolher, orientar e formar para o pensamento crítico é o maior ato de soberania patriótica.&rdquo;
        </blockquote>
        <span className="block text-right text-[10px] font-bold text-[#0066FF] mt-1.5">
          — Redação Manhã Informativo
        </span>
      </div>

      {/* Carta do Leitor em Destaque */}
      <div className="p-3.5 sm:p-4 bg-white border border-[#E5E7EB] text-xs space-y-2">
        <div className="border-b border-[#0D1B2A] pb-1 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066FF]">
            Espaço do Leitor · Carta da Semana
          </span>
          <span className="text-[9px] font-mono text-[#74777d]">CORREIO</span>
        </div>
        <p className="font-serif italic text-xs text-[#374151] leading-relaxed">
          &ldquo;Gostaria de saudar o Manhã Informativo pela coragem de descer às comunidades de Nampula para ouvir os cidadãos dos bairros periféricos. O jornalismo de proximidade é a ferramenta mais nobre para construir a paz e o progresso social.&rdquo;
        </p>
        <div className="flex items-center justify-between pt-1 border-t border-[#E5E7EB] text-[10px] text-[#74777d]">
          <span>Albino Matusse · Nampula</span>
          <span className="font-bold text-[#0D1B2A]">Leitor Verificado</span>
        </div>
      </div>

    </aside>
  );
}

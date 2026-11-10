'use client';

import React, { useState, useMemo } from 'react';
import { 
  Article, 
  PRIMARY_LEAD_STORY, 
  SECONDARY_LEAD_STORY, 
  OPINION_COLUMNISTS, 
  GENERAL_ARTICLES, 
  ARTICLE_VENANCIO_MONDLANE,
  ARTICLE_DROGAS_BELENENSES, 
  ARTICLE_DETENTOS_ARREPENDIDOS, 
  ARTICLE_UCM_VISITA_PENITENCIARIO,
  ARTICLE_VIDEO_REPORTAGEM_DROGAS,
  ARTICLE_OPINIAO_NASSECO,
  ARTICLE_OPINIAO_MARISSA,
  ARTICLE_OPINIAO_NURA
} from '@/data/articles';
import { Search, X, ArrowRight, Clock, Tag } from 'lucide-react';

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export default function SearchDrawer({ isOpen, onClose, onSelectArticle }: SearchDrawerProps) {
  const [query, setQuery] = useState('');

  const allArticles: Article[] = useMemo(() => {
    return [
      ARTICLE_VENANCIO_MONDLANE,
      PRIMARY_LEAD_STORY,
      ARTICLE_VIDEO_REPORTAGEM_DROGAS,
      ARTICLE_DROGAS_BELENENSES,
      ARTICLE_UCM_VISITA_PENITENCIARIO,
      ARTICLE_DETENTOS_ARREPENDIDOS,
      ARTICLE_OPINIAO_NASSECO,
      ARTICLE_OPINIAO_MARISSA,
      ARTICLE_OPINIAO_NURA,
      SECONDARY_LEAD_STORY,
      ...OPINION_COLUMNISTS,
      ...GENERAL_ARTICLES
    ];
  }, []);

  const filteredArticles = useMemo(() => {
    if (!query.trim()) return allArticles;
    const lower = query.toLowerCase();
    return allArticles.filter(
      (art) =>
        art.title.toLowerCase().includes(lower) ||
        art.subtitle.toLowerCase().includes(lower) ||
        art.author.name.toLowerCase().includes(lower) ||
        art.category.toLowerCase().includes(lower) ||
        art.tags.some((t) => t.toLowerCase().includes(lower))
    );
  }, [query, allArticles]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-[#0D1B2A] shadow-2xl flex flex-col my-auto max-h-[85vh]">
        
        {/* Search Input Bar (matching specification) */}
        <div className="p-4 border-b border-[#E5E7EB] flex items-center gap-3 bg-[#f9f9ff]">
          <Search className="w-5 h-5 text-[#0066FF] shrink-0" />
          <input
            type="text"
            placeholder="Pesquisar notícias, relatórios económicos, autores e ensaios..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-b border-[#D1D5DB] focus:border-[#0066FF] text-[#0D1B2A] placeholder-[#74777d] py-1 text-sm font-sans focus:outline-none transition-colors"
          />
          <button
            onClick={onClose}
            className="p-1 hover:text-[#C91414] text-[#74777d] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 bg-[#f1f3ff] border-b border-[#E5E7EB] flex items-center gap-2 overflow-x-auto text-xs text-[#44474c]">
          <span className="font-bold text-[10px] uppercase text-[#74777d]">Tópicos Rápidos:</span>
          {['Venâncio Mondlane', 'Tribunal Supremo', 'Vídeo Reportagem Nampula', 'Artigos de Opinião', 'João Nasseco', 'Inteligência Artificial', 'Marissa Alexandre', 'Sem Estágios (UCM)', 'Estudantes da UCM', 'Penitenciário Regional Norte', 'Bairro dos Belenenses'].map((quick) => (
            <button
              key={quick}
              onClick={() => setQuery(quick)}
              className="text-[11px] px-2 py-0.5 bg-white border border-[#E5E7EB] hover:border-[#0066FF] text-[#0D1B2A] whitespace-nowrap cursor-pointer"
            >
              {quick}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#E5E7EB]">
          {filteredArticles.length === 0 ? (
            <div className="py-12 text-center text-[#74777d] text-sm">
              Nenhum artigo encontrado para o termo pesquisado.
            </div>
          ) : (
            filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  onSelectArticle(art);
                  onClose();
                }}
                className="py-3 cursor-pointer group hover:bg-[#f9f9ff] px-2 transition-colors"
              >
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-[#0066FF] mb-1">
                  <span>{art.category}</span>
                  <span className="text-[#c4c6cc]">·</span>
                  <span className="text-[#74777d]">{art.dateline}</span>
                </div>

                <h4 className="font-serif text-base font-bold text-[#0D1B2A] group-hover:text-[#0066FF] transition-colors leading-snug">
                  {art.title}
                </h4>

                <p className="font-sans text-xs text-[#44474c] line-clamp-2 mt-1">
                  {art.subtitle}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#74777d] mt-2">
                  <span>Por {art.author.name}</span>
                  <span className="flex items-center gap-1 text-[#0066FF] font-medium group-hover:underline">
                    Ler artigo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#f1f3ff] border-t border-[#E5E7EB] text-center text-xs text-[#74777d]">
          Pressione <kbd className="px-1 py-0.5 bg-white border border-[#E5E7EB] text-[10px] font-mono">ESC</kbd> para fechar a pesquisa
        </div>

      </div>
    </div>
  );
}

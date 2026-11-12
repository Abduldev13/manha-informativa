'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { CommentItem, getCommentsForArticle } from '@/data/comments';
import { MessageSquare, ThumbsUp, Send, CheckCircle2, CornerDownRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface CommentSectionProps {
  articleId: string;
  articleTitle: string;
}

export default function CommentSection({ articleId, articleTitle }: CommentSectionProps) {
  const [comments, setComments] = useState<CommentItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(`comments_${articleId}`);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch (e) {
        console.error('Error loading comments from localStorage', e);
      }
    }
    return getCommentsForArticle(articleId, articleTitle);
  });
  const [sortBy, setSortBy] = useState<'recent' | 'top'>('top');
  
  // New comment form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Active reply input state
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  // Synchronize when articleId changes if component is reused
  useEffect(() => {
    let loaded: CommentItem[] = [];
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(`comments_${articleId}`);
        if (stored) {
          loaded = JSON.parse(stored);
        }
      } catch (e) {
        console.error('Error loading comments from localStorage', e);
      }
    }
    if (loaded.length === 0) {
      loaded = getCommentsForArticle(articleId, articleTitle);
    }
    const timer = setTimeout(() => {
      setComments(loaded);
    }, 0);
    return () => clearTimeout(timer);
  }, [articleId, articleTitle]);

  // Persist comments when updated
  const saveComments = (newComments: CommentItem[]) => {
    setComments(newComments);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(`comments_${articleId}`, JSON.stringify(newComments));
      } catch (e) {
        console.error('Error saving comments to localStorage', e);
      }
    }
  };

  // Handle like toggle
  const handleLike = (commentId: string) => {
    const updated = comments.map((c) => {
      if (c.id === commentId) {
        const liked = !c.userLiked;
        return {
          ...c,
          userLiked: liked,
          likes: liked ? c.likes + 1 : Math.max(0, c.likes - 1)
        };
      }
      return c;
    });
    saveComments(updated);
  };

  // Handle new comment submission
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsSubmitting(true);

    const initials = name
      .trim()
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    const newComment: CommentItem = {
      id: `c-user-${Date.now()}`,
      authorName: name.trim(),
      authorLocation: location.trim() || 'Moçambique',
      authorRole: 'Leitor Verificado',
      avatar: initials || 'LT',
      content: content.trim(),
      timestamp: 'Agora mesmo',
      likes: 1,
      userLiked: true
    };

    const updated = [newComment, ...comments];
    saveComments(updated);

    setName('');
    setLocation('');
    setContent('');
    setIsSubmitting(false);
    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 4000);
  };

  // Handle reply submission
  const handleSubmitReply = (parentCommentId: string) => {
    if (!replyText.trim()) return;

    const targetComment = comments.find((c) => c.id === parentCommentId);
    if (!targetComment) return;

    const replyComment: CommentItem = {
      id: `c-reply-${Date.now()}`,
      authorName: name.trim() || 'Leitor do Manhã Informativo',
      authorLocation: location.trim() || 'Nampula / Maputo',
      authorRole: 'Resposta a ' + targetComment.authorName,
      avatar: 'RP',
      content: `@${targetComment.authorName}: ${replyText.trim()}`,
      timestamp: 'Agora mesmo',
      likes: 0
    };

    const updated = [replyComment, ...comments];
    saveComments(updated);
    setReplyingToId(null);
    setReplyText('');
  };

  // Sort comments
  const sortedComments = useMemo(() => {
    const list = [...comments];
    if (sortBy === 'top') {
      return list.sort((a, b) => b.likes - a.likes);
    }
    return list; // recent order preserved as submitted/loaded
  }, [comments, sortBy]);

  return (
    <section className="pt-8 border-t-2 border-[#0D1B2A] mt-8 space-y-6">
      
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E7EB] pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#0066FF]" />
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0D1B2A]">
            Debate dos Leitores & Espaço Cívico
          </h3>
          <span className="bg-[#0D1B2A] text-white text-xs font-mono font-bold px-2 py-0.5">
            {comments.length}
          </span>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-1 text-xs">
          <span className="text-[#74777d] mr-1 hidden sm:inline">Ordenar:</span>
          <button
            onClick={() => setSortBy('top')}
            className={`px-2.5 py-1 text-xs font-bold transition-colors cursor-pointer min-h-[32px] ${
              sortBy === 'top'
                ? 'bg-[#0D1B2A] text-white'
                : 'bg-white border border-[#E5E7EB] text-[#44474c] hover:bg-[#f1f3ff]'
            }`}
          >
            Mais Votados
          </button>
          <button
            onClick={() => setSortBy('recent')}
            className={`px-2.5 py-1 text-xs font-bold transition-colors cursor-pointer min-h-[32px] ${
              sortBy === 'recent'
                ? 'bg-[#0D1B2A] text-white'
                : 'bg-white border border-[#E5E7EB] text-[#44474c] hover:bg-[#f1f3ff]'
            }`}
          >
            Mais Recentes
          </button>
        </div>
      </div>

      {/* Moderation Rules Notice */}
      <div className="p-3 bg-[#f1f3ff] border border-[#d1d5db] flex items-start gap-2.5 text-xs text-[#44474c]">
        <ShieldCheck className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Princípios de Convivência Cívica:</strong> Este espaço promove o debate plural, informado e construtivo. Não são tolerados discursos de ódio, ofensas pessoais ou desinformação deliberada.
        </p>
      </div>

      {/* Comment Creation Form */}
      <form onSubmit={handleSubmitComment} className="p-4 sm:p-5 bg-white border border-[#0D1B2A] shadow-xs space-y-3">
        <h4 className="font-serif font-bold text-sm text-[#0D1B2A] uppercase tracking-wider flex items-center gap-2">
          <span>Deixe a sua reflexão sobre esta notícia</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-[#44474c] uppercase mb-1">
              Nome / Pseudónimo <span className="text-[#ba1a1a]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Albino Matusse ou Jurista em Nampula"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#f9f9ff] border border-[#d1d5db] focus:border-[#0066FF] text-[#0D1B2A] px-3 py-1.5 text-xs focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#44474c] uppercase mb-1">
              Cidade / Província
            </label>
            <input
              type="text"
              placeholder="Ex: Nampula, Maputo, Beira, Pemba..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-[#f9f9ff] border border-[#d1d5db] focus:border-[#0066FF] text-[#0D1B2A] px-3 py-1.5 text-xs focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-[#44474c] uppercase mb-1">
            Comentário <span className="text-[#ba1a1a]">*</span>
          </label>
          <textarea
            required
            rows={3}
            placeholder="Partilhe a sua análise fundamentada com os restantes leitores..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-[#f9f9ff] border border-[#d1d5db] focus:border-[#0066FF] text-[#0D1B2A] p-3 text-xs focus:outline-none leading-relaxed"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <span className="text-[10px] text-[#74777d]">
            Os comentários são públicos e abertos à comunidade de leitores.
          </span>

          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !content.trim()}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0D1B2A] hover:bg-[#0066FF] disabled:opacity-40 text-white text-xs font-bold uppercase tracking-wider transition-colors min-h-[36px] cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Publicar Comentário</span>
          </button>
        </div>

        {successMessage && (
          <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>O seu comentário foi publicado com sucesso no debate deste artigo!</span>
          </div>
        )}
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {sortedComments.map((comment) => (
          <article
            key={comment.id}
            className="p-3.5 sm:p-4 bg-white border border-[#E5E7EB] hover:border-[#0D1B2A] transition-colors space-y-2.5"
          >
            {/* Author info header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0D1B2A] text-white flex items-center justify-center font-bold text-xs shrink-0 border border-[#0066FF]/30">
                  {comment.avatar}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h5 className="font-sans font-bold text-xs sm:text-sm text-[#0D1B2A]">
                      {comment.authorName}
                    </h5>
                    {comment.authorRole && (
                      <span className="text-[10px] bg-[#f1f3ff] text-[#0050cc] px-1.5 py-0.2 font-semibold border border-[#d1d5db]">
                        {comment.authorRole}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#74777d]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#74777d]" />
                      {comment.authorLocation}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#74777d]" />
                      {comment.timestamp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Like Button */}
              <button
                onClick={() => handleLike(comment.id)}
                className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-mono transition-colors min-h-[30px] cursor-pointer ${
                  comment.userLiked
                    ? 'bg-rose-50 text-[#ba1a1a] font-bold border border-rose-200'
                    : 'bg-[#f9f9ff] text-[#44474c] hover:bg-[#f1f3ff] border border-[#E5E7EB]'
                }`}
                title="Gostar deste comentário"
                aria-label={`Gostar do comentário de ${comment.authorName}`}
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${comment.userLiked ? 'fill-[#ba1a1a]' : ''}`} />
                <span>{comment.likes}</span>
              </button>
            </div>

            {/* Comment Text */}
            <p className="font-sans text-xs sm:text-sm text-[#1f2937] leading-relaxed pl-10 sm:pl-11">
              {comment.content}
            </p>

            {/* Reply trigger & reply box */}
            <div className="pl-10 sm:pl-11 pt-1 flex items-center gap-3 text-xs">
              <button
                onClick={() => setReplyingToId(replyingToId === comment.id ? null : comment.id)}
                className="text-[11px] font-bold text-[#0066FF] hover:underline flex items-center gap-1 min-h-[28px] cursor-pointer"
              >
                <CornerDownRight className="w-3 h-3" />
                <span>{replyingToId === comment.id ? 'Cancelar' : 'Responder'}</span>
              </button>
            </div>

            {/* In-line Reply Input */}
            {replyingToId === comment.id && (
              <div className="mt-2 ml-10 sm:ml-11 p-3 bg-[#f9f9ff] border border-[#d1d5db] space-y-2 animate-fadeIn">
                <span className="text-[11px] font-bold text-[#0D1B2A] block">
                  Responder a {comment.authorName}:
                </span>
                <textarea
                  rows={2}
                  placeholder="Escreva a sua resposta..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full bg-white border border-[#d1d5db] text-xs p-2 focus:outline-none focus:border-[#0066FF]"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setReplyingToId(null);
                      setReplyText('');
                    }}
                    className="px-2.5 py-1 text-xs text-[#74777d] hover:text-[#0D1B2A] cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSubmitReply(comment.id)}
                    disabled={!replyText.trim()}
                    className="px-3 py-1 bg-[#0D1B2A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0066FF] disabled:opacity-40 cursor-pointer"
                  >
                    Publicar Resposta
                  </button>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { X, Check, ShieldCheck } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<'digital' | 'completo'>('completo');
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-center p-2 sm:p-4 animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#f9f9ff] border border-[#0D1B2A] shadow-2xl p-4 sm:p-8 flex flex-col my-auto text-[#141b2b]">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 text-[#74777d] hover:text-[#0D1B2A] transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#E5E7EB] pb-3 mb-4 pr-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0066FF] block mb-1">
            Apoie o Jornalismo Independente de Moçambique
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0D1B2A]">
            Assinatura do Manhã Informativo
          </h3>
          <p className="text-xs text-[#44474c] mt-1">
            Acesso ilimitado às grandes investigações, emissões especiais e arquivo histórico.
          </p>
        </div>

        {/* Plan Selector (Responsive 1-col on mobile, 2-col on sm+) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-5 sm:mb-6">
          <div
            onClick={() => setSelectedPlan('digital')}
            className={`p-3 border cursor-pointer transition-colors ${
              selectedPlan === 'digital'
                ? 'border-[#0066FF] bg-white shadow-xs'
                : 'border-[#E5E7EB] bg-[#f1f3ff]'
            }`}
          >
            <span className="block font-serif font-bold text-sm text-[#0D1B2A]">Plano Digital 24H</span>
            <span className="font-serif font-bold text-base sm:text-lg text-[#0066FF] block mt-1">
              350 MT <span className="text-xs font-normal text-[#74777d]">/mês</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#74777d] mt-1 block">
              Acesso web, mobile e streaming de áudio.
            </span>
          </div>

          <div
            onClick={() => setSelectedPlan('completo')}
            className={`p-3 border cursor-pointer transition-colors relative ${
              selectedPlan === 'completo'
                ? 'border-[#0066FF] bg-white shadow-xs'
                : 'border-[#E5E7EB] bg-[#f1f3ff]'
            }`}
          >
            <span className="absolute -top-2 right-2 bg-[#0D1B2A] text-white text-[9px] font-bold uppercase px-1.5 py-0.5">
              Recomendado
            </span>
            <span className="block font-serif font-bold text-sm text-[#0D1B2A]">Digital + Impresso PDF</span>
            <span className="font-serif font-bold text-base sm:text-lg text-[#0066FF] block mt-1">
              650 MT <span className="text-xs font-normal text-[#74777d]">/mês</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#74777d] mt-1 block">
              Inclui réplica fac-símile diária do jornal físico.
            </span>
          </div>
        </div>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] uppercase font-bold text-[#74777d] mb-1">
              Correio Eletrónico
            </label>
            <input
              type="email"
              required
              placeholder="seu.nome@exemplo.co.mz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-[#E5E7EB] px-3 py-2 text-xs text-[#0D1B2A] focus:outline-none focus:border-[#0066FF] min-h-[40px]"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0D1B2A] hover:bg-[#0066FF] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Assinatura Ativada com Sucesso!</span>
                </>
              ) : (
                <span>Confirmar Adesão ao Plano</span>
              )}
            </button>
          </div>
        </form>

        <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-center gap-2 text-[10px] text-[#74777d] text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
          <span>Pagamento seguro via M-Pesa, E-Mola, SIMO Rede ou Cartão</span>
        </div>

      </div>
    </div>
  );
}

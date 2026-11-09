'use client';

import React, { useState } from 'react';
import { FINANCIAL_TICKER, MarketItem } from '@/data/articles';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, ArrowUpDown, Shield } from 'lucide-react';

export default function MarketsSection() {
  const [calcAmount, setCalcAmount] = useState<number>(1000);
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'ZAR'>('USD');

  const exchangeRates = {
    USD: 63.85,
    EUR: 69.14,
    ZAR: 3.54
  };

  const convertedValue = (calcAmount * exchangeRates[selectedCurrency]).toLocaleString('pt-MZ', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return (
    <section className="w-full bg-white border border-[#E5E7EB] my-6 sm:my-8 p-3.5 sm:p-6">
      
      {/* Broadsheet Section Header */}
      <div className="border-b-2 border-[#0D1B2A] pb-2 mb-5 sm:mb-6 flex flex-wrap items-end justify-between gap-2">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0066FF] block mb-1">
            Caderno Financeiro Especial
          </span>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#0D1B2A]">
            Bolsa de Valores de Moçambique & Mercados Globais
          </h3>
        </div>

        <div className="text-left sm:text-right text-[11px] sm:text-xs text-[#74777d]">
          <span>Dados em tempo diferido de 15 minutos · BVM Maputo</span>
        </div>
      </div>

      {/* Grid: 3 columns on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: BVM Equities Table (5 cols) */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] pb-5 lg:pb-0 lg:pr-6">
          <h4 className="font-serif text-sm sm:text-base font-bold text-[#0D1B2A] mb-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-[#0066FF]" />
              <span>Ações & Títulos Cotados</span>
            </span>
            <span className="text-[10px] uppercase font-mono text-[#74777d]">BVM (MT)</span>
          </h4>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs font-sans min-w-[300px]">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-[#74777d] uppercase text-[9px] sm:text-[10px] tracking-wider">
                  <th className="py-2">Código</th>
                  <th className="py-2">Empresa</th>
                  <th className="py-2 text-right">Último</th>
                  <th className="py-2 text-right">Var %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] tabular-nums">
                {FINANCIAL_TICKER.slice(3).map((item: MarketItem) => (
                  <tr key={item.code} className="hover:bg-[#f1f3ff] transition-colors">
                    <td className="py-2 font-mono font-bold text-[#0D1B2A]">{item.code}</td>
                    <td className="py-2 text-[#44474c]">{item.name}</td>
                    <td className="py-2 text-right font-medium">{item.price}</td>
                    <td className={`py-2 text-right font-bold ${item.isUp ? 'text-emerald-700' : 'text-red-600'}`}>
                      {item.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Middle Column: Commodities & Strategic Minerals (4 cols) */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#E5E7EB] pb-5 lg:pb-0 lg:pr-6">
          <h4 className="font-serif text-sm sm:text-base font-bold text-[#0D1B2A] mb-3 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#0050cc]" />
            <span>Mercadorias Estratégicas</span>
          </h4>

          <div className="space-y-2.5 sm:space-y-3 text-xs">
            <div className="p-2.5 bg-[#f9f9ff] border border-[#E5E7EB] flex items-center justify-between">
              <div>
                <span className="font-bold text-[#0D1B2A] block text-[11px] sm:text-xs">Gás Natural LNG Rovuma</span>
                <span className="text-[10px] text-[#74777d]">Área 4 Coral Sul FLNG</span>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-[#0D1B2A] text-[11px] sm:text-xs">12,65 $/MMBtu</span>
                <span className="block text-[10px] font-bold text-emerald-700">+1,18% ▲</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#f9f9ff] border border-[#E5E7EB] flex items-center justify-between">
              <div>
                <span className="font-bold text-[#0D1B2A] block text-[11px] sm:text-xs">Carvão de Moatize</span>
                <span className="text-[10px] text-[#74777d]">FOB Porto da Beira</span>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-[#0D1B2A] text-[11px] sm:text-xs">214,00 $/ton</span>
                <span className="block text-[10px] font-bold text-emerald-700">+0,42% ▲</span>
              </div>
            </div>

            <div className="p-2.5 bg-[#f9f9ff] border border-[#E5E7EB] flex items-center justify-between">
              <div>
                <span className="font-bold text-[#0D1B2A] block text-[11px] sm:text-xs">Alumínio Mozal</span>
                <span className="text-[10px] text-[#74777d]">LME Cash Settlement</span>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-[#0D1B2A] text-[11px] sm:text-xs">2.580,00 $/ton</span>
                <span className="block text-[10px] font-bold text-red-600">-0,35% ▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Currency Converter (3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-sm sm:text-base font-bold text-[#0D1B2A] mb-3 flex items-center gap-1.5">
            <ArrowUpDown className="w-4 h-4 text-[#0066FF]" />
            <span>Conversor Cambial Oficial</span>
          </h4>

          <div className="p-3 bg-[#f1f3ff] border border-[#E5E7EB] space-y-3 text-xs">
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#74777d] mb-1">
                Moeda Base
              </label>
              <div className="grid grid-cols-3 gap-1">
                {(['USD', 'EUR', 'ZAR'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`py-2 text-center font-mono font-bold text-xs border cursor-pointer min-h-[36px] ${
                      selectedCurrency === curr
                        ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]'
                        : 'bg-white text-[#44474c] border-[#E5E7EB] hover:bg-slate-50'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-[#74777d] mb-1">
                Quantia em {selectedCurrency}
              </label>
              <input
                type="number"
                value={calcAmount}
                onChange={(e) => setCalcAmount(Math.max(1, Number(e.target.value)))}
                className="w-full bg-white border border-[#E5E7EB] px-2.5 py-2 font-mono text-sm text-[#0D1B2A] focus:outline-none focus:border-[#0066FF] min-h-[38px]"
              />
            </div>

            <div className="pt-2 border-t border-[#E5E7EB]">
              <span className="block text-[10px] uppercase font-bold text-[#74777d]">
                Equivalente em Meticais (MZN)
              </span>
              <div className="font-serif font-bold text-base sm:text-lg text-[#0050cc] mt-0.5">
                {convertedValue} MT
              </div>
              <span className="block text-[10px] text-[#74777d] mt-1">
                Taxa oficial: 1 {selectedCurrency} = {exchangeRates[selectedCurrency]} MT
              </span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

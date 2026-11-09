'use client';

import React, { useState } from 'react';
import { Newspaper, Mail, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#f9f9ff] text-[#141b2b] border-t-2 border-[#0D1B2A] mt-12 pt-8 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Bar */}
        <div className="bg-[#0F1C2C] text-white p-6 sm:p-8 mb-8 border border-[#0D1B2A]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00D2FF] block mb-1">
                Serviço de Correio Informativo Diário
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                O Boletim da Manhã — Todos os Dias às 06:00
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#bac8dc] mt-2 max-w-xl leading-relaxed">
                Receba no seu correio eletrónico a síntese executiva das principais manchetes políticas, os fechos de mercado da BVM e as grandes investigações de Moçambique.
              </p>
            </div>

            <div className="lg:col-span-5">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Seu endereço de correio eletrónico..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white placeholder-white/60 px-3 py-2 text-xs focus:outline-none focus:border-[#00D2FF] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0066FF] hover:bg-[#00D2FF] hover:text-[#0D1B2A] text-white transition-colors text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  {subscribed ? 'Inscrito com Sucesso!' : 'Subscrever'}
                </button>
              </form>
              <span className="block text-[10px] text-[#778598] mt-2">
                Sem publicidade invasiva. Respeitamos a confidencialidade dos seus dados.
              </span>
            </div>
          </div>
        </div>

        {/* Broadsheet Columns of Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-6 border-b border-[#E5E7EB] text-xs">
          
          {/* Col 1: Brand & Historic Statement */}
          <div className="lg:col-span-2 space-y-3 pr-4">
            <h4 className="font-serif text-2xl font-bold text-[#0D1B2A] tracking-tight">
              MANHÃ INFORMATIVO
            </h4>
            <p className="text-[#44474c] leading-relaxed">
              O Diário Nacional de Investigação e Emissão Pública é um órgão de comunicação social independente fundado em 1998, dedicado à salvaguarda do interesse público, rigor factual e transparência cívica em toda a República de Moçambique.
            </p>
            <div className="pt-2 text-[11px] text-[#74777d] space-y-1">
              <p>Sede Editorial: Av. Samora Machel, nº 412, 4º Andar, Baixa de Maputo</p>
              <p>Delegações Regionais: Beira (Sofala) e Nampula (Norte)</p>
              <p>Central Telefónica: +258 21 320 800 · Redação: redaccao@manhainformativo.co.mz</p>
            </div>
          </div>

          {/* Col 2: Secções Editoriais */}
          <div className="space-y-2">
            <h5 className="font-serif font-bold text-sm text-[#0D1B2A] uppercase tracking-wider border-b border-[#E5E7EB] pb-1">
              Secções
            </h5>
            <ul className="space-y-1.5 text-[#44474c]">
              <li><a href="#primeira-pagina" className="hover:text-[#0066FF] transition-colors">Primeira Página</a></li>
              <li><a href="#politica" className="hover:text-[#0066FF] transition-colors">Política & Soberania</a></li>
              <li><a href="#economia" className="hover:text-[#0066FF] transition-colors">Economia & BVM</a></li>
              <li><a href="#justica" className="hover:text-[#0066FF] transition-colors">Justiça & Legislação</a></li>
              <li><a href="#investigacao" className="hover:text-[#0066FF] transition-colors">Grandes Investigações</a></li>
              <li><a href="#cultura" className="hover:text-[#0066FF] transition-colors">Caderno de Cultura</a></li>
            </ul>
          </div>

          {/* Col 3: Emissão Pública & Rádio */}
          <div className="space-y-2">
            <h5 className="font-serif font-bold text-sm text-[#0D1B2A] uppercase tracking-wider border-b border-[#E5E7EB] pb-1">
              Emissão Pública
            </h5>
            <ul className="space-y-1.5 text-[#44474c]">
              <li><span className="text-[#0D1B2A] font-semibold">Canal de Televisão 24H</span></li>
              <li><span className="text-[#0D1B2A]">Rádio Nacional 92.3 FM</span></li>
              <li><span className="text-[#0D1B2A]">Podcasts Oficiais</span></li>
              <li><span className="text-[#0D1B2A]">Documentários Temáticos</span></li>
              <li><span className="text-[#0D1B2A]">Arquivo Audiovisual desde 1998</span></li>
              <li><span className="text-[#0D1B2A]">Estatuto Editorial e Deontologia</span></li>
            </ul>
          </div>

          {/* Col 4: Conselho & Transparência */}
          <div className="space-y-2">
            <h5 className="font-serif font-bold text-sm text-[#0D1B2A] uppercase tracking-wider border-b border-[#E5E7EB] pb-1">
              Conselho & Expediente
            </h5>
            <ul className="space-y-1 text-[#74777d] text-[11px]">
              <li><strong className="text-[#0D1B2A]">Director Editorial:</strong> Dr. Bento Tamele</li>
              <li><strong className="text-[#0D1B2A]">Editor-Chefe de Investigação:</strong> Dr. Arlindo Muthemba</li>
              <li><strong className="text-[#0D1B2A]">Editora de Economia:</strong> Helena Mondlane</li>
              <li><strong className="text-[#0D1B2A]">Provedor do Leitor:</strong> Prof. Dr. Armando Guebuza Jr.</li>
              <li><strong className="text-[#0D1B2A]">Propriedade:</strong> Empresa Editorial de Notícias, SARL</li>
              <li><strong className="text-[#0D1B2A]">Depósito Legal:</strong> INLD Nº 402/26</li>
            </ul>
          </div>

        </div>

        {/* Bottom Broadsheet Signature Strip */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#74777d]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
            <span>© 1998–2026 Manhã Informativo Editorial & Broadcast System. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#termos" className="hover:underline">Estatuto Editorial</a>
            <a href="#privacidade" className="hover:underline">Política de Privacidade</a>
            <a href="#arquivo" className="hover:underline">Consulta de Arquivo</a>
            <a href="#publicidade" className="hover:underline">Tabela de Publicidade Institucional</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

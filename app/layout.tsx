import type {Metadata} from 'next';
import {Newsreader, Public_Sans} from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-public-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manhã Informativo — Diário Nacional & Emissão Pública',
  description: 'O Diário Nacional de Investigação e Emissão Pública de Moçambique. Jornalismo de referência, análises estruturais e transmissão em direto.',
  openGraph: {
    title: 'Manhã Informativo — Diário Nacional & Emissão Pública',
    description: 'O Diário Nacional de Investigação e Emissão Pública de Moçambique. Jornalismo de referência, análises estruturais e transmissão em direto.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manhã Informativo — Diário Nacional & Emissão Pública',
    description: 'O Diário Nacional de Investigação e Emissão Pública de Moçambique.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" className={`${newsreader.variable} ${publicSans.variable}`}>
      <body className="bg-[#f9f9ff] text-[#141b2b] min-h-screen antialiased selection:bg-[#0066FF] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

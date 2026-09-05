import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { company } from '@/data/company';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ['latin'], 
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://futurextrade.com'),
  title: {
    default: 'Futurex Trade Fair & Events | Global B2B Exhibitions',
    template: '%s | Futurex'
  },
  description: company.description,
  openGraph: {
    type: 'website',
    siteName: 'Futurex Trade Fair & Events',
    title: 'Futurex Trade Fair & Events | Global B2B Exhibitions',
    description: company.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Futurex Trade Fair & Events',
    description: company.description,
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.legalName,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://futurextrade.com',
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'E52, 1st Floor, Kalkaji',
      addressLocality: 'New Delhi',
      addressCountry: 'IN',
      postalCode: '110019'
    },
    foundingDate: String(company.established)
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-off text-ink selection:bg-red selection:text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} 
        />
      </body>
    </html>
  );
}
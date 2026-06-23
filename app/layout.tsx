import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.vercel.app'),
  title: 'Ahmed Awan - AI Engineer',
  description:
    'AI Engineer building RAG systems, multi-agent AI, and LLM-powered applications. From frontend developer to AI builder — I build real, deployed AI products.',
  keywords: [
    'Ahmed Awan',
    'AI Engineer',
    'RAG Systems',
    'LangChain',
    'LangGraph',
    'Agentic AI',
    'LLM Applications',
    'Next.js Developer',
  ],
  authors: [{ name: 'Ahmed Awan' }],
  openGraph: {
    title: 'Ahmed Awan - AI Engineer',
    description:
      'AI Engineer building RAG systems, multi-agent AI, and LLM-powered applications. From frontend developer to AI builder — I build real, deployed AI products.',
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.vercel.app',
    siteName: 'Ahmed Awan - AI Engineer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ahmed Awan - AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Awan - AI Engineer',
    description:
      'AI Engineer building RAG systems, multi-agent AI, and LLM-powered applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-bg text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}

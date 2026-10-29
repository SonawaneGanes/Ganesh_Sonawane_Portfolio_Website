import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ganesh Sonawane | AI-ML Developer & Backend Engineer',
  description:
    'Portfolio of Ganesh Sonawane - Computer Engineering graduate specializing in scalable backend systems, REST APIs, and AI/ML pipelines with Java, Python, Flask, FastAPI, and DevOps.',
  keywords: [
    'Ganesh Sonawane',
    'AI-ML Developer',
    'Backend Engineer',
    'Python Developer',
    'FastAPI',
    'Flask',
    'REST APIs',
    'Machine Learning',
    'DevOps',
    'Pune',
  ],
  authors: [{ name: 'Ganesh Sonawane', url: 'https://github.com/SonawaneGanes' }],
  creator: 'Ganesh Sonawane',
  openGraph: {
    title: 'Ganesh Sonawane | AI-ML Developer & Backend Engineer',
    description:
      'Explore AI/ML projects, microservices, and backend enterprise systems by Ganesh Sonawane.',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#05070f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-[#05070f] text-slate-100 min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}

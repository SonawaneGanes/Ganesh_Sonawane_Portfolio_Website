import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ganesh Sonawane - AI-ML Developer & Backend Engineer',
  description: 'Portfolio of Ganesh Sonawane - B.Tech Computer Engineering graduate specializing in backend development, AI/ML integration, and enterprise application architecture. Experienced in Java, Python, Flask, FastAPI, and DevOps.',
  keywords: [
    'Ganesh Sonawane',
    'AI-ML Developer',
    'Backend Engineer',
    'Full Stack Developer',
    'Python Developer',
    'Flask',
    'FastAPI',
    'REST APIs',
    'Machine Learning',
    'DevOps',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Ganesh Sonawane - AI-ML Developer & Backend Engineer',
    description:
      'Portfolio showcasing AI/ML projects, backend systems, and enterprise applications. Open to opportunities with leading tech companies.',
    url: 'https://ganeshsonawane.com',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark bg-black`}>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-black text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

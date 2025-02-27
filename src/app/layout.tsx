// src/app/layout.tsx
import '@/styles/global.css'
import { ReactNode } from 'react'
import { indexPageDesc, indexPageTitle, keywords } from './layout.metadata'
import Providers from './providers'
import { Container } from '@/components/Container/Container'
import localFont from 'next/font/local'

const fastSans = localFont({
  src: [
    {
      path: '../shared/fonts/Fast_Sans.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../shared/fonts/Fast_Sans_Dotted.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-fast-sans',
})

export const metadata = {
  title: indexPageTitle,
  description: indexPageDesc,
  keywords: keywords,
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/ico',
        url: '/favicons/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicons/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicons/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicons/android-chrome-512x512.png',
      },
    ],
  },

  manifest: '/manifest.webmanifest',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Providers className={`${fastSans.variable} ${fastSans.className}`}>
      <Container>{children}</Container>
    </Providers>
  )
}

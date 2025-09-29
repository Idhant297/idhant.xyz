import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Background from './components/background'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'idhant',
  description: 'idhant.xyz',
  openGraph: {
    title: 'idhant',
    description: 'idhant.xyz',
    url: baseUrl,
    siteName: 'idhant',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <link rel="icon" href="image/ig.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const savedTheme = localStorage.getItem('theme')
                  if (savedTheme) return savedTheme
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                }
                document.documentElement.classList.toggle('dark', getTheme() === 'dark')
              })()
            `,
          }}
        />
      </head>
      <body className="antialiased max-w-6xl mx-8 mt-4 lg:mx-auto relative">
        <Background />
        <div className="flex-auto min-w-0 mt-2 flex flex-col px-6 md:px-8 relative z-10">
          <div className="flex justify-end">
            <Navbar />
          </div>
          <main>
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}

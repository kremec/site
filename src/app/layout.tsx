import type { Metadata } from 'next'
import './globals.css'
import { baseUrl } from './sitemap'
import Footer from './_components/footer'
import HorizontalHeader from './_components/header_horizontal'
import VerticalHeader from './_components/header_vertical'
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_TITLE,
} from './constants/names'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_TITLE,
    template: '%s | ' + SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: baseUrl,
    siteName: SITE_TITLE,
    locale: 'en_US',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  keywords: SITE_KEYWORDS,
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  generator: 'Next.js',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col p-4 font-normal md:p-10">
        <div className="md:hidden">
          <HorizontalHeader />
          <div className="py-4"></div>
        </div>
        <div className="grow md:flex">
          <aside className="hidden md:block md:w-1/4">
            <VerticalHeader />
          </aside>
          <main className="w-full md:w-3/4 md:max-w-2xl">{children}</main>
        </div>
        <div className="py-7"></div>
        <Footer />
      </body>
    </html>
  )
}

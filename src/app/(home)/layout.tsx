import { ReactNode } from 'react'
import '../globals.css'
import { Roboto } from 'next/font/google'

import Script from 'next/script'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { HeaderCollapsible } from '@/components/microComponents/HeaderCollapsible'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
})

export const metadata = {
  title: 'Zenon Tecnologia e inovação',
  description: 'Aplicações Web para todos os tipos de negócios',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="../../assets/banner.jpg" />
      </Head>
      {/* Analytics Tags */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QYNZTSYH7Y"
      ></Script>
      <Script
        id="Analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-QYNZTSYH7Y');
          `,
        }}
      />

      {/* Google ADS Tags */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11175505980"
      ></Script>
      <Script
        id="Analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-11175505980');
          `,
        }}
      />

      <body
        className={`${roboto.className} overflow-x-hidden bg-neutral-900 flex flex-col`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJ8B4JL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <HeaderCollapsible />
        <main className="bg-neutral-900 flex flex-col md:z-10 md:overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

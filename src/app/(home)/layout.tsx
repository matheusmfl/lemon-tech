import { ReactNode } from 'react'
import '../globals.css'
import { Roboto } from 'next/font/google'

import Head from 'next/head'
import Script from 'next/script'

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

      <body className={`${roboto.className} overflow-x-hidden`}>
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
        <main className="bg-neutral-900 flex flex-col md:z-10 md:overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}

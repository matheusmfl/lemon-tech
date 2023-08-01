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

      {/* <!-- Meta Pixel Code --> */}
      <Script
        id="pixel"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '303318218736507');
          fbq('track', 'PageView');`,
        }}
      />

      {/* <!-- End Meta Pixel Code --> */}

      {/* Google ADS Tags */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-WJ8B4JL"
      ></Script>
      <Script
        id="Analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'GTM-WJ8B4JL');
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

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=303318218736507&ev=PageView&noscript=1"
          />
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

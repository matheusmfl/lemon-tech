import { ReactNode } from 'react'
import '../globals.css'
import { Roboto } from 'next/font/google'
import { Analitycs } from '@/components/Analytics'
import Head from 'next/head'

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
        <Head>
          <Analitycs />
        </Head>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <main className="bg-neutral-900 flex flex-col md:z-10 md:overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}

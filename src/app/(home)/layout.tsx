import { ReactNode } from 'react'
import '../globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
})

export const metadata = {
  title: 'Lemon Tecnologia e inovação',
  description: 'Aplicações Web para todos os tipos de negócios',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="bg-neutral-900 flex flex-col md:z-10">{children}</main>
      </body>
    </html>
  )
}

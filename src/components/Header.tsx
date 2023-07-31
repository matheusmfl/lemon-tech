import { Menu } from 'lucide-react'
import logo from '../assets/logo.svg'
import Image from 'next/image'

export function Header() {
  return (
    <header className="px-6 py-8 flex justify-between md:px-20 overflow-hidden">
      <a href="/" className="cursor-pointer">
        <Image src={logo} alt="Logomarca da empresa" />
      </a>

      <button className="text-white">
        <Menu />
      </button>
    </header>
  )
}

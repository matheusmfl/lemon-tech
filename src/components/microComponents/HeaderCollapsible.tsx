/* eslint-disable prettier/prettier */
'use client'
import * as Collapsible from '@radix-ui/react-collapsible'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import logo from '../../assets/logo.svg'
import { useState } from 'react'
import Link from 'next/link'

export function HeaderCollapsible() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => {
    setOpen(false)
  }
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <header className="px-6 py-8 flex justify-between md:px-20 overflow-hidden">
        <div>
          <a href="/">

            <Image src={logo} alt="Logomarca da empresa" />
          </a>
        </div>
        <Collapsible.Trigger asChild className=''>
          <button aria-label="Menu" className="text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Collapsible.Trigger>
      </header>

      <Collapsible.Content
        className={`${open && ' animate-slideDown'} ${!open && 'animate-slideUp'
          } ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300`}
      >
        {/* Container com links de navegação */}
        <div>
          <ul className="text-slate-50 text-base leading-5 flex flex-col px-6">
            <li>
              <Link href={''} onClick={closeMenu}>
                <div className="py-3 border-b border-neutral-700">
                  <div className="flex justify-between px-3 h-14 items-center cursor-pointer  hover:bg-teal-700 hover:rounded-[40px]">
                    <span>Serviços</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={''} onClick={closeMenu}>
                <div className="py-3 border-b border-neutral-700">
                  <div className="flex justify-between px-3 h-14 items-center cursor-pointer  hover:bg-teal-700 hover:rounded-[40px]">
                    <span>Quem somos</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/contato'} onClick={closeMenu}>
                <div className="py-3">
                  <div className="flex justify-between px-3 h-14 items-center cursor-pointer w-full  hover:bg-teal-700 hover:rounded-[40px]">
                    <span>Contato</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

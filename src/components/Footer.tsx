import Image from 'next/image'
import logo from '../assets/logo.svg'
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'

export function Footer() {
  return (
    <footer className="flex flex-col py-10 px-6 md:px-20 relative gap-10 overflow-hidden">
      {/* logo */}
      <div className="flex items-center justify-center py-5">
        <Image src={logo} alt="Logo" className="h-10 w-[94px]" />
      </div>
      {/* Bg Gradients */}
      <div
        className="absolute right-0 md:left-0 top-1/2 h-[348px] w-[325px] md:-translate-x-1/2 -translate-y-48 rounded-full translate-x-1/2
     opacity-50 blur-full bg-gradient-image"
      />
      <div
        className="absolute left-0 bottom-0 md:right-0 md:left-full md:-translate-x-1/2 h-[282px] w-[286px] translate-y-32 rounded-full -translate-x-1/2
     opacity-50 blur-full bg-gradient-image rotate-45"
      />
      {/* List Footer */}

      <div className="flex flex-col gap-5 z-10">
        <span className="text-slate-50 font-medium text-sm leading-5">
          Contato
        </span>
        <ul className="text-xs flex flex-col gap-5 text-slate-50 leading-5 font-normal">
          <li className="hover:underline">
            <a href="/">+ 55 81 97324-5224</a>
          </li>
          <li className="hover:underline">
            <a href="/">+ 55 81 97324-5224</a>
          </li>
        </ul>
        <span className="text-slate-50 font-medium text-sm leading-5">
          Sobre nós
        </span>
        <ul className="text-xs flex flex-col gap-5 text-slate-50 leading-5 font-normal">
          <li className="hover:underline">
            <a href="/">Quem somos (história e valores)</a>
          </li>
          <li className="hover:underline">
            <a href="/">Membros e parceiros</a>
          </li>
        </ul>
      </div>
      {/* Endereço */}

      <span className="text-slate-50 font-medium text-sm leading-5 z-10 text-center hover:underline cursor-pointer">
        Av. Fernando simoes barbosa, 380 - Boa viagem - Recife, PE/Brasil
      </span>

      {/* SocialMedia */}
      <div className="flex flex-col gap-5 z-10">
        <Image src={linkedin} alt="Logo Linkedin" className="cursor-pointer" />
        <Image
          src={instagram}
          alt="Logo do instagram"
          className="cursor-pointer"
        />
      </div>
      {/* Copy */}

      <div className="flex justify-between z-10 text-slate-50">
        <span>© 2023 Zenon Tech</span>
        <div>
          <ul className="flex gap-5">
            <li className="hover:underline cursor-pointer">Privacidade</li>
            <li className="hover:underline cursor-pointer">Termos</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

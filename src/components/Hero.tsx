import Image from 'next/image'
import { Separator } from './Separator'
import arrow from '../assets/arrowRight.svg'

export function Hero() {
  return (
    <section className="relative px-6 flex flex-col py-5 gap-10 md:px-20 md:overflow-y-visible md:overflow-x-hidden md:z-10">
      <div
        className="absolute left-0 top-1/2 h-[271px] w-[208px] md:h-[344px] md:w-[275px] -translate-y-48 rounded-full -translate-x-1/2
     opacity-50 blur-full bg-gradient-image"
      />
      <div className="pt-14 z-10">
        <h1 className="font-semibold text-4xl leading-[48px] text-slate-50 text-left">
          Design e<br className="md:hidden" /> Tecnologia para
          <br className="hidden md:block" /> vendas e gestão administrativa
        </h1>
      </div>

      <Separator />

      <span className="font-normal text-base leading-6 text-slate-50 md:w-[482px] z-10">
        De pequenos empreendedores a grandes corporações, encontre a melhor
        solução tecnológica para fomentar suas vendas, posicionar sua marca e
        auxiliar seus projetos
        <br /> de gestão estratégica.
      </span>

      <button className="font-medium md:w-[192px] leading-5 hover:brightness-95 text-slate-50 py-[10px] w-full text-center bg-teal-700 rounded-[4px]">
        Comece agora
      </button>

      <a
        href="/"
        className="flex gap-2 pr-4 text-slate-50 font-medium text-base hover:underline"
      >
        Fale com a equipe de vendas{' '}
        <Image src={arrow} alt="Seta para a direita" />
      </a>
    </section>
  )
}

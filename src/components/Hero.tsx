import Image from 'next/image'
import { Separator } from './Separator'
import arrow from '../assets/arrowRight.svg'

export function Hero() {
  return (
    <section className="relative px-6 flex flex-col py-5 gap-10 md:px-20 md:overflow-y-visible md:overflow-x-hidden md:z-10">
      <div
        className="absolute left-0 top-1/2 h-[271px] lg:top-1/2 w-[208px] md:h-[344px] md:w-[275px] lg:w-[363px] lg:h-[450px] -translate-y-48 rounded-full -translate-x-1/2
     opacity-50 blur-full bg-gradient-image"
      />
      <div className="pt-14 z-10">
        <h1 className="font-semibold text-4xl leading-[48px] lg:leading-[76px] lg:w-[720px] lg:text-6xl text-slate-50 text-left">
          Criamos uma
          <br className="md:hidden" /> máquina de vendas para seu negócio
        </h1>
      </div>

      <Separator />

      <span className="font-medium text-2xl leading-10 text-slate-50 md:w-[482px] z-10">
        Sites institucionais <br />
        E-commerce <br />& Sistemas de gestão
      </span>

      <button className="font-medium md:w-[192px] leading-5 hover:brightness-95 text-slate-50 py-[10px] w-full text-center bg-teal-700 rounded-[4px]">
        <a
          href="https://wa.me/5581991176822?text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+seus+produtos%21"
          rel="noreferrer"
        >
          Comece agora
        </a>
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

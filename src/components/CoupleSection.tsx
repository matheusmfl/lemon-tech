import Image from 'next/image'
import { Separator } from './Separator'
import separator from '../assets/rightSeparator.svg'
import mockup from '../assets/mockupCoupleSection.svg'

export function CoupleSection() {
  return (
    <section className="relative">
      {/* Container com a imagem */}
      <div className="absolute h-[648px] top-[280px]">
        <Image
          src={mockup}
          alt="mockup com nossos projetos"
          width={405}
          height={405}
        />
      </div>
      {/* Parte branca da section */}
      <div className="bg-slate-50">
        {/* parte de texto */}
        <div className="flex flex-col gap-5 px-6 pt-10">
          <h2 className="font-medium text-[32px] leading-10 text-slate-900">
            Controle total
          </h2>

          <Separator />

          <span className="font-normal text-base leading-6 text-slate-900">
            Com um site próprio, você tem controle total sobre o design, o
            conteúdo e a funcionalidade. Você pode personalizá-lo de acordo com
            a identidade da sua marca e adaptá-lo às suas necessidades
            específicas.
          </span>
        </div>
        {/* Separador com PT para caber imagem */}
        <div className="pt-[326px]">
          <Image
            src={separator}
            width={1800}
            height={1800}
            alt="separador da página"
          />
        </div>
      </div>

      {/* Parte preta da section */}

      <div className="flex flex-col gap-5 px-6 pt-[357px] pb-[80px] bg-neutral-900">
        <span className="font-normal text-base leading-6 text-slate-50">
          Reduza sua dependência de terceiros e evite mudanças inesperadas nas
          políticas e regras de plataformas terceirizadas. Isso proporciona mais
          estabilidade e controle sobre suas estratégias de publicidade a longo
          prazo.
        </span>

        {/* botão */}
        <button className="w-full py-[10px] text-center bg-teal-700 rounded-[4px] font-medium text-slate-50 text-base">
          Entenda como podemos te ajudar
        </button>
      </div>
    </section>
  )
}

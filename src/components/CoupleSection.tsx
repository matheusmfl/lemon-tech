import Image from 'next/image'
import { Separator } from './Separator'
import separator from '../assets/rightSeparator.svg'
import mockup from '../assets/mockupCoupleSection.svg'
import mediumMockup from '../assets/medium-mockup.svg'
import mdRightSeparator from '../assets/mediumRightSeparator.svg'

export function CoupleSection() {
  return (
    <section className="relative overflow-x-hidden md:overflow-y-hidden">
      {/* bg-gradient somente para medium */}
      <div
        className="absolute hidden md:block right-0 bottom-0   md:h-[344px] md:w-[275px] translate-y-48 rounded-full translate-x-1/2
     opacity-50 blur-full bg-gradient-image"
      />
      {/* Container com a imagem */}
      <div className="absolute h-[648px] md:w-1/2 top-[280px] md:top-[124px] right-0 z-10">
        <Image
          src={mockup}
          alt="mockup com nossos projetos"
          width={405}
          height={405}
          className="md:hidden"
        />
        <Image
          src={mediumMockup}
          alt="Mockup"
          width={1200}
          height={1200}
          className="hidden md:block"
        />
      </div>
      {/* Parte branca da section */}
      <div className="bg-slate-50">
        {/* parte de texto */}
        <div className="flex flex-col gap-5 px-6 pt-10 md:pt-20 md:px-20 md:[400px]">
          <span className="font-medium text-sm text-gray-500 leading-4 md:text-lg">
            Sistemas independentes
          </span>
          <h2 className="font-medium text-[32px] leading-10 text-slate-900">
            Controle total
          </h2>

          <Separator />

          <span className="font-normal text-base leading-6 text-slate-900 md:w-[400px]">
            Com um site próprio, você tem controle total sobre o design, o
            conteúdo e a funcionalidade. Você pode personalizá-lo de acordo com
            a identidade da sua marca e adaptá-lo às suas necessidades
            específicas.
          </span>
        </div>
        {/* Separador com PT para caber imagem */}
        <div className="pt-[326px] md:pt-[160px] translate-x-1">
          <Image
            src={separator}
            width={1800}
            height={1800}
            alt="Separador de página"
            className="md:hidden"
          />
          <Image
            src={mdRightSeparator}
            width={1800}
            height={1800}
            alt="Separador de página"
            className="hidden md:block"
          />
        </div>
      </div>

      {/* Parte preta da section */}

      <div className="flex flex-col gap-5 px-6 pt-[357px] md:pt-20 md:px-20 pb-[80px] bg-neutral-900">
        <span className="font-normal text-base leading-6 text-slate-50 md:w-[400px]">
          Reduza sua dependência de terceiros e evite mudanças inesperadas nas
          políticas e regras de plataformas terceirizadas. Isso proporciona mais
          estabilidade e controle sobre suas estratégias de publicidade a longo
          prazo.
        </span>

        {/* botão */}
        <button className="w-full py-[10px] md:w-[305px] text-center bg-teal-700 rounded-[4px] font-medium text-slate-50 text-base">
          Entenda como podemos te ajudar
        </button>
      </div>
    </section>
  )
}

import Image from 'next/image'
import separator from '../assets/separator.svg'
import mockup from '../assets/mockupFirstSection.svg'
import { Separator } from './Separator'
import rightSeparator from '../assets/rightSeparator.svg'
import mdSeparator from '../assets/mediumSeparator.svg'
import mdRightSeparator from '../assets/mediumRightSeparator.svg'

export function Section1() {
  return (
    <section className="flex flex-col bg-slate-50 overflow-x-hidden md:overflow-y-visible">
      <div className="-translate-x-1">
        <Image
          src={separator}
          alt="Separador de página"
          width={1800}
          height={1400}
          className=" md:hidden"
        />
        <Image
          src={mdSeparator}
          alt="Separador medio"
          width={1800}
          height={1400}
          className="hidden md:block w-full"
        />
      </div>
      {/* Essa DIV serve para responsividade, para colocar a imagem e o container alinhado */}
      <div className="md:flex">
        {/* Main container */}
        <div className="pt-10 pb-10 px-6 md:px-20 bg-slate-50 md:pb-0">
          {/* Hero text Div */}
          <div className="flex flex-col gap-5 md:w-[412px]">
            <span className="font-medium text-sm text-gray-500 leading-4">
              Pagamento integrado
            </span>

            <h2 className="font-medium text-[32px] leading-10 text-slate-900">
              Implemente formas de pagamento sem dificuldades
            </h2>

            <Separator />

            <span className="font-normal text-base leading-6 text-slate-900">
              Muitas empresas sofrem com a falta de agilidade e baixo controle
              financeiro por ainda dependerem de pagamentos por Whatsapp, isso
              prejudica a agilidade do processo de compra, o controle financeiro
              e a credibilidade do seu negócio.
            </span>
            {/* Botão só existe na responsividade */}
            <button className="w-full py-[10px] hidden md:block font-medium text-white text-base leading-5 bg-neutral-900 rounded-[4px] hover:brightness-95  ">
              Comece a aceitar pagamentos
            </button>
          </div>
        </div>
        {/* Div de imagem */}
        <div className="translate-x-1 bg-slate-50 md:-translate-y-36 right-0 md:bg-transparent md:z-50 md:absolute md:w-[394px] md:h-[645px]">
          <Image
            src={mockup}
            width={1200}
            height={1200}
            alt="Mockup alt text"
          />
        </div>
        {/* Div fantasma pois o position precisa dela */}
        <div className="hidden md:block md:w-[394px] md:h-[645px]" />
        {/* div do button */}
        <div className="px-6 py-4 md:hidden">
          <button className="w-full py-[10px] font-medium text-white text-base leading-5 bg-neutral-900 rounded-[4px] hover:brightness-95  ">
            Comece a aceitar pagamentos
          </button>
        </div>
      </div>

      <div className="translate-x-1">
        <Image
          src={rightSeparator}
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
    </section>
  )
}

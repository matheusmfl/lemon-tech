import Image from 'next/image'
import separator from '../assets/separator.png'
import mockup from '../assets/mockupFirstSection.webp'
import { Separator } from './Separator'
import rightSeparator from '../assets/rightSeparator.svg'
import mdSeparator from '../assets/mediumSeparator.svg'
import mdRightSeparator from '../assets/mediumRightSeparator.svg'

export function Section1() {
  return (
    <section className="flex flex-col bg-slate-50 overflow-x-hidden md:overflow-y-visible md:overflow-x-hidden">
      <div className="w-full">
        <Image
          src={separator}
          alt="Separador de página"
          width={2400}
          height={1400}
          className=" md:hidden object-fill w-full inline-block"
        />
        <Image
          src={mdSeparator}
          alt="Separador medio"
          width={2400}
          height={1400}
          className="hidden md:block w-full"
        />
      </div>
      {/* Essa DIV serve para responsividade, para colocar a imagem e o container alinhado */}
      <div className="md:flex lg:overflow-x-hidden">
        {/* Main container */}
        <div className="pt-10 pb-10 px-6 md:px-20 bg-slate-50 md:pb-0">
          {/* Hero text Div */}
          <div className="flex flex-col gap-5 md:w-[412px] lg:w-[620px] lg:gap-10 lg:pt-20">
            <span className="font-medium text-sm text-gray-500 leading-4 md:text-lg">
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
            <button className="w-full py-[10px] lg:w-[326px] hidden md:block font-medium text-white text-base leading-5 bg-neutral-900 rounded-[4px] hover:brightness-95  ">
              Comece a aceitar pagamentos
            </button>
          </div>
        </div>
        {/* Div de imagem */}
        <div className="translate-x-1 bg-slate-50 md:-translate-y-36 right-0 md:bg-transparent md:z-50 md:absolute md:w-[394px] md:h-[645px] lg:w-[518px] lg:-translate-y-96">
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

      <div className="w-full">
        <Image
          src={rightSeparator}
          width={2400}
          height={1800}
          alt="Separador de página"
          className="md:hidden"
        />
        <Image
          src={mdRightSeparator}
          width={2400}
          height={1800}
          alt="Separador de página"
          className="hidden md:block"
        />
      </div>
    </section>
  )
}

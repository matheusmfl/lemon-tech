import Image from 'next/image'
import separator from '../assets/separator.svg'
import mockup from '../assets/mockupFirstSection.svg'
import { Separator } from './Separator'
import rightSeparator from '../assets/rightSeparator.svg'

export function Section1() {
  return (
    <section className="flex flex-col bg-slate-50 overflow-x-hidden">
      <div className="-translate-x-1">
        <Image
          src={separator}
          alt="Separador de página"
          width={1800}
          height={1400}
        />
      </div>

      {/* Main container */}
      <div className="pt-10 pb-10 px-6 bg-slate-50">
        {/* Hero text Div */}
        <div className="flex flex-col gap-5">
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
            prejudica a agilidade do processo de compra, o controle financeiro e
            a credibilidade do seu negócio.
          </span>
        </div>
      </div>
      {/* Div de imagem */}
      <div className="translate-x-1 bg-slate-50">
        <Image src={mockup} width={1200} height={1200} alt="Mockup alt text" />
      </div>
      {/* div do button */}
      <div className="px-6 py-4">
        <button className="w-full py-[10px] font-medium text-white text-base leading-5 bg-neutral-900 rounded-[4px] hover:brightness-95  ">
          Comece a aceitar pagamentos
        </button>
      </div>
      <div className="translate-x-1">
        <Image
          src={rightSeparator}
          width={1800}
          height={1800}
          alt="Separador de página"
        />
      </div>
    </section>
  )
}

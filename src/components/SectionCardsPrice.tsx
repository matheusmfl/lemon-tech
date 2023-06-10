import Image from 'next/image'
import { Separator } from './Separator'
import { PriceCards } from './microComponents/PriceCards'
import separator from '../assets/rightSeparator.svg'

export function SectionCardsPrice() {
  return (
    <section className="bg-slate-100 ">
      {/* Main Container */}
      <div className="px-6 py-10 flex flex-col gap-10">
        {/* Div Texts */}
        <div className="flex flex-col gap-5">
          <h2 className="font-medium text-[32px] leading-10 text-slate-900">
            Adquira seu site de forma progressiva
          </h2>
          <Separator />
          <span className="font-normal text-base leading-6 text-slate-900">
            Site mínimo viável é construído e pago por etapas facilitando seu
            primeiro passo para o digital.
          </span>
        </div>
        {/* div cards */}
        <div className="flex flex-col gap-5">
          <PriceCards
            cardType="step1"
            title="Crie um MVP do seu site e arrecade dinheiro"
            content="Site de página única “landing page” para primeiras vendas online e ter um canal sólido para apresentar sua marca"
          />
          <PriceCards
            cardType="step2"
            title="Site com várias páginas"
            content="Amplie a comunicação com seu cliente, implemente funcionalidades como pagamentos online, catálogos ou blog"
          />
          <PriceCards
            cardType="step3"
            title="Sistemas de gestão"
            content="Funcionalidades de acordo com as necessidades no seu negócio, Sistema de Gerenciamento de Relacionamento com o Cliente (CRM), gerenciamento de comissões e análise de dados são algumas das muitas possibilidades"
          />
        </div>
        {/* Div preços */}
        <div className="flex flex-col gap-5 text-center">
          <span className="font-medium leading-6 text-slate-900 text-base">
            Começando com apenas
          </span>
          <span className="font-light text-5xl leading-[76px] text-slate-900">
            R$ 1.200
          </span>

          <button className="w-full py-[10px] text-center bg-teal-700 rounded-[4px] font-medium text-slate-50 text-base">
            Saiba mais
          </button>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full">
        <Image src={separator} alt="separador da página" />
      </div>
    </section>
  )
}

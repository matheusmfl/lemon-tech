import Image from 'next/image'
import { Separator } from './Separator'
import { PriceCards } from './microComponents/PriceCards'
import separator from '../assets/rightSeparator.png'
import mdRightSeparator from '../assets/mediumRightSeparator.svg'

export function SectionCardsPrice() {
  return (
    <section className="bg-slate-100 overflow-x-hidden">
      {/* Main Container */}
      <div className="px-6 py-10 flex flex-col gap-10 md:px-20">
        {/* Div Texts */}
        <div className="flex flex-col gap-5 md:w-[400px] lg:w-[660px]">
          <span className="font-medium text-sm text-gray-500 leading-4 md:text-lg">
            Níveis de produto
          </span>
          <h2 className="font-medium text-[32px] leading-10 text-slate-900">
            Adquira seu site de forma progressiva
          </h2>
          <Separator />
          <span className="font-normal text-base leading-6 lg:w-[400px] text-slate-900">
            Aumente sua presença on-line hoje mesmo com um site incrível! <br />
            Assuma o controle de seu sucesso e crie uma impressão duradoura.
            Comece por etapas pequenas até alcançar um gigante sistema de
            tecnologia
          </span>
        </div>
        {/* div cards */}
        <div className="flex flex-col gap-5 md:flex-row md:grid md:grid-cols-3">
          <PriceCards
            cardType="step1"
            title="Crie o primeiro protótipo do seu site e arrecade dinheiro"
            content="Plano mais básico onde construiremos sua marca no digital, site institucional de página única completo para suas necessidades"
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
        <div className="flex flex-col gap-5 text-center md:text-left">
          <span className="font-medium leading-6 text-slate-900 text-base">
            Começando com apenas
          </span>
          <span className="font-light text-5xl leading-[76px] text-slate-900">
            R$ 1.200
          </span>

          <a
            href="https://wa.me/5581991176822?text=Ol%C3%A1%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+seus+produtos%21"
            rel="noreferrer"
          >
            <button className="w-full py-[10px] md:w-[140px] hover:brightness-90 text-center bg-teal-700 rounded-[4px] font-medium text-slate-50 text-base">
              Saiba mais
            </button>
          </a>
        </div>
      </div>

      {/* Separator */}
      <div className="w-screen">
        <Image
          src={separator}
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

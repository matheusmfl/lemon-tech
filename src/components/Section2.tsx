import { Separator } from './Separator'
import { CardsGlasmorfism } from './microComponents/CardsGlasmorfism'
import arrowbg from '../assets/arrow-bg.svg'
import Image from 'next/image'

export function Section2() {
  return (
    <section className="py-10 px-6 flex flex-col lg:flex-row md:px-20 gap-10 overflow-x-hidden md:overflow-y-hidden relative md:overflow-x-hidden">
      {/* bg da seta */}
      <div className="absolute left-0 top-[336px] h-[420px] lg:top-[170px] lg:left-44">
        <Image
          src={arrowbg}
          height={1100}
          width={900}
          alt="Setas de background"
        />
      </div>
      {/* TextDiv */}
      <div className="flex flex-col gap-5 md:pt-5 lg:w-[540px]">
        <span className="font-medium text-sm text-gray-500 leading-4 md:text-lg">
          Identidade da marca
        </span>

        <h2 className="font-medium text-[32px] leading-10 text-slate-50 md:w-[342px]">
          Melhore a presença digital da sua marca
        </h2>

        <Separator />

        <span className="font-normal text-base leading-6 z-20 text-slate-50 md:w-[640px] lg:w-[540px]">
          Empresas com sites mal estruturados correm o risco de prejudicar seu
          valor aos olhos dos clientes. A experiência negativa, a dificuldade em
          encontrar informações relevantes e o design pouco atraente podem levar
          os clientes a buscar alternativas mais eficientes e profissionais.
          Investir em um site bem feito, intuitivo e visualmente atraente é
          essencial para transmitir uma imagem positiva e atrair a confiança dos
          clientes.
        </span>
      </div>
      {/* Container dos cards */}
      <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
        <CardsGlasmorfism
          title="Posicionamento"
          content="A forma como a sua marca é vista influencia nas tomadas de decisões de compra"
          cardType="posicionamento"
        />

        <CardsGlasmorfism
          title="SEO"
          content="Tenha a estrutura necessária para aparecer nas primeiras posições em pesquisas do Google"
          cardType="seo"
        />

        <CardsGlasmorfism
          title="Experiência do usuário"
          content="Converta mais vendas ao ter uma experiência projetada de forma estratégica para o seu público"
          cardType="experiencia"
        />

        <CardsGlasmorfism
          title="Tecnologia agregada"
          content="Desenvolvemos o seu projeto para alcançar as melhores notas nos testes de desempenho"
          cardType="tecnologia"
        />
      </div>
    </section>
  )
}

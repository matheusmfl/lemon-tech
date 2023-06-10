import { Separator } from './Separator'
import { CardsGlasmorfism } from './microComponents/CardsGlasmorfism'

export function Section2() {
  return (
    <section className="py-10 px-6 flex flex-col gap-10 overflow-x-hidden">
      {/* TextDiv */}
      <div className="flex flex-col gap-5">
        <span className="font-medium text-sm text-gray-500 leading-4">
          Identidade da marca
        </span>

        <h2 className="font-medium text-[32px] leading-10 text-slate-50">
          Melhore a presença digital da sua marca
        </h2>

        <Separator />

        <span className="font-normal text-base leading-6 text-slate-50">
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
      <div className="flex flex-col gap-5">
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

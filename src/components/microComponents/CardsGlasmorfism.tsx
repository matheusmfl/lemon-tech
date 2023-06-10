import Image from 'next/image'
import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'

interface Iprops {
  title: string
  cardType: 'posicionamento' | 'seo' | 'experiencia' | 'tecnologia'
  content: string
}

const getIconByCardType = (cardType: Iprops['cardType']) => {
  switch (cardType) {
    case 'posicionamento':
      return icon1
    case 'seo':
      return icon2
    case 'experiencia':
      return icon3
    case 'tecnologia':
      return icon4
    default:
      return null
  }
}

export function CardsGlasmorfism({ title, cardType, content }: Iprops) {
  const icon = getIconByCardType(cardType)
  return (
    <div className="py-5 px-10 flex flex-col gap-[10px] rounded-lg backdrop-blur-[20px] shadow-glasmorphosm-shadow bg-glasmorphism-opacity ">
      {/* Icone e label */}
      <div className="flex gap-[10px] items-center">
        {icon && <Image src={icon} alt="Icon do card" />}
        <span className="text-slate-50 font-medium text-xl leading-8">
          {title}
        </span>
      </div>
      {/* Div do separador */}
      <div className="w-1/2 bg-teal-700 h-[4px]" />

      <span className="text-slate-50 font-normal leading-6 text-base">
        {content}
      </span>
    </div>
  )
}

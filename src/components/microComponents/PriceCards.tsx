import Image from 'next/image'
import icon1 from '../../assets/priceIcons/icon1.svg'
import icon2 from '../../assets/priceIcons/icon2.svg'
import icon3 from '../../assets/priceIcons/icon3.svg'

interface Iprops {
  title: string
  cardType: 'step1' | 'step2' | 'step3'
  content: string
}

const getIconByCardType = (cardType: Iprops['cardType']) => {
  switch (cardType) {
    case 'step1':
      return icon1
    case 'step2':
      return icon2
    case 'step3':
      return icon3
    default:
      return null
  }
}

export function PriceCards({ title, cardType, content }: Iprops) {
  const icon = getIconByCardType(cardType)
  return (
    <div className="px-6 py-10 bg-neutral-100 flex flex-col gap-5 shadow-card-price rounded-lg">
      {/* Icone e title */}
      <div className="flex flex-col gap-[10px]">
        {cardType === 'step1' && (
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <Image src={icon} alt="Icon do card" />
            <span className="font-medium text-2xl text-lime-500 leading-8">
              Etapa 1
            </span>
          </div>
        )}
        {cardType === 'step2' && (
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <Image src={icon} alt="Icon do card" />
            <span className="font-medium text-2xl text-teal-600 leading-8">
              Etapa 2
            </span>
          </div>
        )}
        {cardType === 'step3' && (
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <Image src={icon} alt="Icon do card" />
            <span className="font-medium text-2xl text-purple-600 leading-8">
              Etapa 3
            </span>
          </div>
        )}
        <span className="font-medium leading-8 text-slate-900 text-2xl text-center">
          {title}
        </span>
      </div>

      <span className="text-slate-600 font-normal leading-6 text-base">
        {content}
      </span>
    </div>
  )
}

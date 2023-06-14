import { CoupleSection } from '@/components/CoupleSection'

import { Hero } from '@/components/Hero'
import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import { SectionCardsPrice } from '@/components/SectionCardsPrice'
import { SectionFaq } from '@/components/SectionFaq'

export default function Home() {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <CoupleSection />
      <SectionCardsPrice />
      <SectionFaq />
    </>
  )
}

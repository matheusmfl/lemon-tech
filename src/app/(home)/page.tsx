import { CoupleSection } from '@/components/CoupleSection'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Section1 } from '@/components/Section1'
import { Section2 } from '@/components/Section2'
import { SectionCardsPrice } from '@/components/SectionCardsPrice'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <CoupleSection />
      <SectionCardsPrice />
    </>
  )
}

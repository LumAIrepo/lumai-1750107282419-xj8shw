import { Hero } from '@/components/sections/Hero'
import { FeaturedTokens } from '@/components/sections/FeaturedTokens'
import { Stats } from '@/components/sections/Stats'
import { HowItWorks } from '@/components/sections/HowItWorks'

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Stats />
      <FeaturedTokens />
      <HowItWorks />
    </div>
  )
}
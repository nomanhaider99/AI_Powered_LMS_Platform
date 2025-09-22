import React from 'react'
import HeroText from '../ui/hero-text'
import { pricingGoals } from '@/data/goals'
import PricingGoalCard from '../ui/pricing-goal-card'

const Pricing = () => {
  return (
    <div className='w-full flex flex-col gap-4 md:px-10 px-4'>
      <div className='flex flex-col gap-2'>
        <div><HeroText text='Enjoy AI Features - Completely Free' /></div>
        <div>Our pricing is simple — it’s completely free. As an early user, you’ll get full access to our LMS platform with AI Agents integration at zero cost. No hidden fees, no trials ending, and no credit card required. We believe learning and experimenting with AI should be accessible to everyone, so we’re giving you 100% free access to explore, create, and scale your learning experience with powerful AI-driven tools.</div>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          pricingGoals.map((item, index) => (
            <PricingGoalCard
              {...item}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pricing
import React from 'react'
import HeroText from '../ui/hero-text'
import { AIIntegrationFeature } from '../ui/ai-integration-feature'
import { features } from '@/data/features'
import FeatureCard from '../ui/feature-card'

const Features = () => {
  return (
    <div className='w-full flex flex-col gap-4 md:px-10 px-4 pb-10'>
      <HeroText text='Upcoming AI Features' />
      <div>
        <AIIntegrationFeature />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          features.map((item, index) => (
            <FeatureCard
              {...item}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Features
import React from 'react'
import HeroText from './hero-text'
import { agents } from '@/data/agents'
import AgentCard from './agent'

const Agents = () => {
  return (
    <div className='md:px-10 px-4 flex flex-col gap-4'>
        <div><HeroText text='Upcoming Smart AI Agents' /></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                agents.map((item, index) => (
                    <AgentCard
                        key={index}
                        {...item}
                     />
                ))
            }
        </div>
    </div>
  )
}

export default Agents
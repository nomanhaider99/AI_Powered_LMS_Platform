import React from 'react'
import { Button } from './button'

interface FeatureCardProps {
    title: string,
    description: string
}

const FeatureCard = (
    {
        description,
        title
    }: FeatureCardProps
) => {
  return (
    <div className='p-3 rounded-md bg-zinc-100 dark:bg-zinc-950 border-[1px] border-zinc-50/10 flex flex-col gap-8 shadow-lg dark:shadow-zinc-800 shadow-zinc-200'>
        <div className='flex flex-col gap-1'>
            <div className='tracking-tighter font-extrabold text-[1.5rem]'>{title}</div>
            <div className='tracking-tighter text-zinc-500'>{description}</div>
        </div>
        <div>
            <Button variant='outline'>Explore this Feature</Button>
        </div>
    </div>
  )
}

export default FeatureCard
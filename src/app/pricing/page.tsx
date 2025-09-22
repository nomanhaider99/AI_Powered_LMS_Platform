import Navbar from '@/components/layouts/Navbar'
import Pricing from '@/components/widgets/pricing'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-between md:items-center md:px-10 px-4'>
        <Navbar />
        <Pricing />
    </div>
  )
}

export default page
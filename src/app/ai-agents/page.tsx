import Navbar from '@/components/layouts/Navbar'
import Agents from '@/components/ui/agents'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-4 md:px-10 px-4 justify-between'>
        <Navbar />
        <Agents />
    </div>
  )
}

export default page
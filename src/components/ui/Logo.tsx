import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='font-semibold tracking-tighter text-2xl'>
      <Link href="/">Noteflow</Link>
    </div>
  )
}

export default Logo
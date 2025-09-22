import React from 'react'
import Logo from '../ui/Logo'
import { Button } from '../ui/button'
import MobileNavbar from '../ui/mobile-navbar'
import { MenuIcon } from 'lucide-react'
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'
import SignUp from '../ui/sign-up'
import { CoolMode } from '../ui/cool-mode'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full py-6 md:px-10 px-4 flex justify-between items-center dark:bg-zinc-950/75 bg-zinc-50/60 z-10'>
      <div className='flex items-center gap-8'>
        <div><Logo /></div>
        <div className='md:flex hidden items-center gap-4 dark:text-zinc-400 text-zinc-600'>
          <Link href="/features">
            <div className='cursor-pointer'><CoolMode>Features</CoolMode>
            </div>
          </Link>
          <Link href="/ai-agents">
            <div className='cursor-pointer'><CoolMode>AI Agents</CoolMode>
            </div>
          </Link>
          <Link href="/pricing">
            <div className='cursor-pointer'><CoolMode>Pricing</CoolMode>
            </div>
          </Link>
          <Link href="/reach-us">
            <div className='cursor-pointer'><CoolMode>Reach Us</CoolMode></div>
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <AnimatedThemeToggler />
        <SignUp
          opener={
            <div>
              <Button variant="outline">Get Started Now</Button>
            </div>
          }
        />
        <MobileNavbar
          opener={
            <div>
              <MenuIcon className='cursor-pointer size-6' />
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Navbar
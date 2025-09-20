import React from 'react'
import { Button } from './button'
import SignUp from './sign-up'
import HeroText from './hero-text'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa6'
import AnnouncementBar from './announcement-bar'

const Hero = () => {
  return (
    <div className='w-full flex flex-col md:items-center gap-6 px-4 md:px-10 pt-10'>
        <div className='w-fit px-4 py-1 rounded-full dark:bg-zinc-200 bg-zinc-800 shadow-md dark:shadow-white shadow-zinc-950 min-w-0 dark:text-zinc-950 text-zinc-50 text-center flex items-center gap-2'>
            Designed & built — <Link href="https://www.linkedin.com/in/nomanhaider99/" className='text-pink-200 dark:text-pink-800 font-semibold'> Noman Haider</Link>
        </div>
        <div className='flex flex-col md:items-center gap-3 md:text-center'>
            <HeroText text='Create Your Assignments and Notes with one prompt.' />
            <div className='lg:px-20'>Noteflow is your AI-powered study assistant that transforms simple prompts into clear, structured notes. Preview, edit, and export directly to Google Docs in one click — making learning faster, smarter, and effortless.</div>
            <div className='flex justify-start gap-2'>
                <SignUp
                    opener={
                        <div>
                            <Button>Get Started</Button>
                        </div>
                    }
                 />
                <Button variant="outline">Write a Prompt</Button>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Hero
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Logo from './Logo'
import { Button } from './button'
import SignUp from './sign-up'
import { Skiper58 } from './navigations'

const MobileNavbar = (
    {
        opener
    }: {
        opener: React.ReactElement
    }
) => {
    return (
        <Sheet>
            <SheetTrigger>{opener}</SheetTrigger>
            <SheetContent className='rounded-l-md'>
                <SheetHeader>
                    <SheetTitle><Logo /></SheetTitle>
                    <SheetDescription>
                        Your Assessment and Notes Partner...
                    </SheetDescription>
                </SheetHeader>
                <div className='flex flex-col gap-6 px-4'>
                    <div className='flex flex-col gap-0 uppercase tracking-tighter text-[3.7rem] leading-16 font-extrabold'>
                        <Skiper58 />
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <SignUp
                            buttonText='Get Started Now'
                            variant='outline'
                        />
                        <Button variant="secondary">Login Your Account</Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar
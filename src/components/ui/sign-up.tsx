import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './button'
import Image from 'next/image'
import GoogleIcon from '../../../public/images/provider/google.png'
import GitHubIcon from '../../../public/images/provider/github.png'
import InstagramIcon from '../../../public/images/provider/instagram.png'


const SignUp = (
    {
        opener
    }: {
        opener: React.ReactElement
    }
) => {
    return (
        <Dialog>
            <DialogTrigger>{opener}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='tracking-tighter'>Authenticate Your Account</DialogTitle>
                    <DialogDescription className='tracking-tighter'>
                        Kindly authenticate your account to create write a prompt.
                    </DialogDescription>
                </DialogHeader>
                <div className='flex flex-col gap-5 tracking-tighter'>
                    <div className='flex flex-col gap-2'>
                        <Button variant="secondary">
                            <div><Image src={GoogleIcon} alt='google' width={20} height={20}  /></div>
                            <div>Continue with Google</div>
                        </Button>
                        <Button variant="default">
                            <div><Image src={GitHubIcon} alt='google' width={20} height={20}  /></div>
                            <div>Continue with GitHub</div>
                        </Button>
                        <Button variant="secondary">
                            <div><Image src={InstagramIcon} alt='google' width={25} height={25}  /></div>
                            <div>Continue with Instagram</div>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SignUp
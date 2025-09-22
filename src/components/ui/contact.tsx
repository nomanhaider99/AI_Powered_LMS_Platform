'use client'

import React from 'react'
import HeroText from './hero-text'
import { Input } from './input'
import { Label } from './label'
import { Textarea } from './textarea'
import { Button } from './button'
import { FieldValues, useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const submitContactForm = (data: FieldValues) => {
    console.log(data);
  }

  return (
    <div className='w-full flex flex-col items-center gap-4 overflow-y-hidden pb-10 md:px-10 px-4'>
      <div className='z-20 flex flex-col items-center gap-2 text-center'>
        <div><HeroText text="Let's Get In Touch" /></div>
        <div className='md:-translate-y-0 -translate-y-12'>If you have queries regarding this platform or to get any other information kindly fill this form below.</div>
      </div>
      <div className='z-20 md:w-[30%] w-full flex flex-col gap-3'>
        <form onSubmit={handleSubmit(submitContactForm)}>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <Label>Name</Label>
              <Input placeholder='e.g Abdul Rehman' {...register('name')} />
            </div>
            <div className='flex flex-col gap-1'>
              <Label>Email Address</Label>
              <Input type='email' placeholder='e.g abdulrehman@mail.com' {...register('email')} />
            </div>
            <div className='flex flex-col gap-1'>
              <Label>Message</Label>
              <Textarea className='min-h-[120px]' placeholder='Let us know how we can help' {...register('message')} />
            </div>
            <div>
              <Button variant="default" type='submit'>Send Message</Button>
            </div>
          </div>
        </form>
      </div>
      <div className='w-[30vw] h-[30vw] absolute bg-transparent border-[1px] border-zinc-400/25 rounded-full -translate-x-[400px] -translate-y-[300px]'></div>
      <div className='w-[30vw] h-[30vw] absolute bg-transparent border-[1px] border-zinc-400/25 rounded-full translate-x-[400px] -translate-y-[300px]'></div>
    </div>
  )
}

export default Contact
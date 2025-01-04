import React from 'react'
import { Brands } from '../ui/brands'
import GradualSpacing from '@/components/ui/gradual-spacing'

function Experience() {
  return (
    <section className='mt-[120px]'>
        <GradualSpacing
        className="text-center text-md font-bold -tracking-widest  text-black dark:text-white md:text-2xl"
        text="Tres generaciones de experiencia en Argentina, Chile y Uruguay"
      />
        <Brands/>
    </section>
  )
}

export default Experience
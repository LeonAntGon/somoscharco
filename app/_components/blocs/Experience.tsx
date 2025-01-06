import React from 'react'
import { Brands } from '../ui/brands'
import GradualSpacing from '@/components/ui/gradual-spacing'
import GradualSpacingDelayed from '@/components/ui/magicUi/gradual-spacing-delayed'

function Experience() {
  return (
    <section className='mt-[120px]' id='experiencia'>
      <GradualSpacing
        className="md:hidden text-center text-xs sm:text-md font-bold -tracking-widest text-black dark:text-white md:text-2xl"
        text="Tres generaciones de experiencia"
      />
      <GradualSpacingDelayed
      className="md:hidden text-center text-xs sm:text-md font-bold -tracking-widest text-black dark:text-white md:text-2xl"
      text="en Argentina, Chile y Uruguay"
    />

        {/*For md or more */}
        <GradualSpacing
        className="hidden md:block text-center text-md font-bold -tracking-widest  text-black dark:text-white md:text-2xl"
        text="Tres generaciones de experiencia en Argentina, Chile y Uruguay"
      />
        <Brands/>
    </section>
  )
}

export default Experience
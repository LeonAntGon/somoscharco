"use client"
import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import bgWaves from '@/public/assets/bg-waves.png'

const AboutSomos: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className=" mt-[-70vh] md:mt-[-60vh] h-[90vh] overflow-hidden"
      style={{
        backgroundImage: `url(${bgWaves.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    > 
      <motion.div
        className='pt-[30vh] px-[40px] md:px-[140px]'
        initial={{ x: '-50vh', opacity: 0 }}
        animate={{ x: isInView ? 0 : '50vh', opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
      >
        <p className='text-white text-center text-md'>
          Somos tres generaciones de publicitarios, con mas de 30 años de experiencia en el mercado,
          trabajando con marcas de primera línea, brindando servicios de comunicación 360º.
        </p>
      </motion.div>
      <motion.div
        className='mt-[5vh] px-[40px] md:px-[130px]'
        initial={{ x: '50vh', opacity: 0 }}
        animate={{ x: isInView ? 0 : '50vh', opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <p className='text-white text-center'>
          Charco evoca la idea de detenerse, reflexionar y luego dar un salto, simbolizando el
          impulso y la capacidad de trascender fronteras tanto físicas como creativas.
          Pensamos, diseñamos y ejecutamos proyectos, buscando la excelencia para
          darle valor agregado a las marcas de nuestros clientes.
        </p>
      </motion.div>
    </div>
  )
}

export default AboutSomos;
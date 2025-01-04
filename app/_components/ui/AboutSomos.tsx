import React from 'react'
import bgWaves from '@/public/assets/bg-waves.png'

function AboutSomos() {
  return (
    <div className="mt-[-60vh] h-[90vh]"
    style={{
      backgroundImage: `url(${bgWaves.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}> 
            <div className='pt-[30vh] px-[140px] '>
              <p className='text-white text-center text-md'>
              Somos tres generaciones de publicitarios, con mas de 30 años de experiencia en el mercado,
              trabajando con marcas de primera línea, brindando servicios de comunicación 360º.
              </p>
            </div>
            <div className='mt-[5vh] px-[130px]'>
              <p className='text-white text-center'>Charco evoca la idea de detenerse, reflexionar y luego dar un salto, simbolizando el
              impulso y la capacidad de trascender fronteras tanto físicas como creativas.
              Pensamos, diseñamos y ejecutamos proyectos, buscando la excelencia para
              darle valor agregado a las marcas de nuestros clientes.
              </p>
            </div>
    </div>
  )
}

export default AboutSomos
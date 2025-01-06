import Image from 'next/image'
import React from 'react'
import Activaciones from "@/public/assets/icons/Iconos-charco-activaciones-publicidad_Mesa-de-trabajo-1.png"
import Promociones from "@/public/assets/icons/Iconos-charco-promo-publicidad_Mesa-de-trabajo-1.png"
import Trade from "@/public/assets/icons/Iconos-charco-trade-marketing-publicidad_Mesa-de-trabajo-1_Mesa-de-trabajo-1.png"
import Events from "@/public/assets/icons/Iconos-charco-eventos-publicidad_Mesa-de-trabajo-1.png"
import Digital from "@/public/assets/icons/Iconos-charco-digital-publicidad_Mesa-de-trabajo-1.png"
import Intervenciones from "@/public/assets/icons/Iconos-charco-intervenciones-publicidad_Mesa-de-trabajo-1.png"

function Services() {
  return (
    <section className='my-8' id="servicios">
      <div className=''>
        <h3 className='text-center text-4xl font-semibold mt-8 mb-6'>Nuestros servicios</h3>
        <p className='text-center text-gray-500 text-lg'>Trabajamos intensamente para dar a nuestros clientes el todo. Ejecutamos lo que creamos y diseñamos.</p>
      </div>

      <div className='flex lg:gap-x-4 mx-20 my-20 lg:flex-nowrap flex-wrap 
      [&>div>div>div>h6]:text-center [&>div>div>div>p]:text-center [&>div>div>div>p]:py-2
      lg:[&>div>div>div>h6]:text-left lg:[&>div>div>div>p]:text-left
      flex-1'>
        
        <div className='flex lg:flex-wrap flex-nowrap flex-col '>
  
          <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          <Image src={Activaciones} width={80} height={20} alt="Activaciones"
        className='w-14 h-14 mx-0 lg:mx-6'/>
            <div className='my-4'>
              <h6 className='font-semibold text-2xl'>Activaciones</h6>
              <p className='text-gray-500/70 text-md'>Estrategias de marketing que generan interés y participación directa del consumidor a través de eventos, promociones y experiencias interactivas.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          <Image src={Promociones} width={80} height={20} alt="Promociones"
        className='w-14 h-14 mx-0 lg:mx-6'/>
            <div className='my-4'>
              <h6 className='font-semibold text-2xl'>Promociones</h6>
              <p className='text-gray-500/70 text-md'>Actividades y estrategias para aumentar la visibilidad y ventas de un producto o servicio mediante descuentos, ofertas especiales, concursos y muestras gratuitas.</p>
            </div>
          </div>
            </div>
          
          <div className='flex flex-col lg:gap-y-4'>
  
          <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          <Image src={Trade} width={80} height={20} alt="Trade"
        className='w-14 h-14 mx-0 lg:mx-6'/>
            <div className='my-4'>
              <h6 className='font-semibold text-2xl'>Trade</h6>
              <p className='text-gray-500/70 text-md'>Distribución, logística y colocación de materiales POP, marquesinas, y acciones de degustación y activaciones en punto de venta.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          <Image src={Events} width={80} height={20} alt="Eventos"
        className='w-14 h-14 mx-0 lg:mx-6'/>
            <div className='my-4'>
              <h6 className='font-semibold text-2xl'>Eventos</h6>
              <p className='text-gray-500/70 text-md'>Actividades organizadas para promocionar productos o servicios y generar interacción directa con los consumidores, como lanzamientos, ferias y demostraciones en vivo.</p>
            </div>
          </div>
            </div>

            <div className='flex flex-col'>
  
          <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          <Image src={Digital} width={80} height={20} alt="Digital"
        className='w-14 h-14 mx-0 lg:mx-6'/>
            <div className='my-4'>
              <h6 className='font-semibold text-2xl'>Digital</h6>
              <p className='text-gray-500/70 text-md'>Uso de plataformas y tecnologías digitales para publicidad en redes sociales, marketing por correo electrónico, SEM, SEO y publicidad en video</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center lg:items-start'>
          <Image src={Intervenciones} width={80} height={80} alt="Intervenciones"
        className='w-14 h-14 mx-0 lg:mx-6'/>
            <div className='my-4'>
              <h6 className='font-semibold text-2xl'>Intervenciones</h6>
              <p className='text-gray-500/70 text-md'>Acciones específicas para influir en la percepción y comportamiento del consumidor, ajustando la estrategia publicitaria y el mensaje.</p>
            </div>
          </div>
            </div>

            
        
        

        
        
      </div>
    </section>
  )
}

export default Services
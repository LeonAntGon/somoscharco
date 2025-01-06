import React from 'react';
import HeroVideo from '../ui/HeroVideo';
import CardXp from '../widgets/CardXp';
import WordRotate from '@/components/ui/word-rotate';
import ButtonCta from '../widgets/ButtonCta';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <div className="flex h-auto min-h-[90vh] pb-[10vh] bg-[#000814] flex-col md:flex-row items-center flex-wrap md:justify-around
        px-6"
        style={{
            maskImage: 'linear-gradient(black 99%, transparent)'
        }}>
            
            <div className="my-auto">
                <div className='flex'>
                    <p className='text-[#0e4597] text-4xl inline font-bold pt-[8px]'
                    > Somos </p> 
                    <WordRotate
                    className="text-4xl font-bold text-white ml-2"
                    words={["Activaciones", "Trade","Eventos", "Digital", "Promociones","Eventos","Intervenciones"]}
                    />
                </div>
                
                <h3 className='text-gray-300 max-w-2xl my-6 text-md'>Potenciamos tu marca con estrategias innovadoras y experiencias memorables <br className='md:block hidden'></br>que conectan con tu audiencia.</h3>
                
                <div className='flex justify-end pr-4'>
                <Link href={'#contacto'}>
                <ButtonCta/>
                </Link>
                </div>
                

                
                    <CardXp/>
                
            </div>
            <div className="">
                <HeroVideo/>
            </div>
        </div>
    );
};

export default HeroSection;

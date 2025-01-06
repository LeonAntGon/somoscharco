import React from 'react';
import HeroVideo from '../ui/HeroVideo';
import CardXp from '../widgets/CardXp';
import WordRotate from '@/components/ui/word-rotate';
import ButtonCta from '../widgets/ButtonCta';

const HeroSection: React.FC = () => {
    return (
        <div className="flex h-[90vh] pb-[10vh] bg-[#000814] flex-col md:flex-row items-center md:items-start flex-wrap md:justify-between lg:justify-around"
        style={{
            maskImage: 'linear-gradient(black 99%, transparent)'
        }}>
            
            <div className="my-auto">
                <div className='flex'>
                    <p className='text-[#0e4597] text-4xl inline font-semibold pt-2'
                    > Somos </p> 
                    <WordRotate
                    className="text-4xl font-bold text-white ml-2"
                    words={["Activaciones", "Trade","Eventos", "Digital", "Promociones","Eventos","Intervenciones"]}
                    />
                </div>
                
                <h2 className='text-gray-300 max-w-2xl my-6 text-md'>Potenciamos tu marca con estrategias innovadoras y experiencias memorables <br></br>que conectan con tu audiencia.</h2>
                
                <ButtonCta/>

                
                    <CardXp/>
                
            </div>
            <div className="">
                <HeroVideo/>
            </div>
        </div>
    );
};

export default HeroSection;

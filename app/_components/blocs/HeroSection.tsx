import React from 'react';
import HeroVideo from '../ui/HeroVideo';
import CardXp from '../widgets/CardXp';

const HeroSection: React.FC = () => {
    return (
        <div className="flex h-[100vh] bg-black flex-col md:flex-row items-center md:items-start flex-wrap md:justify-between lg:justify-around">
            
            <div className="my-auto">
                <h1 className='text-white'>Titulo h1</h1>
                <h2 className='text-white'>Titulo h2</h2>
                
                <p className='text-white'>CTA</p>

                <CardXp/>
            </div>
            <div className="">
                <HeroVideo/>
            </div>
        </div>
    );
};

export default HeroSection;

"use client"
import Link from "next/link"
import { dataHeader } from "../../blocs/Header/Header.data"
import ShimmerButton from "@/components/ui/magicUi/shimmer-button"
import Logo from "@/public/assets/cropped-Logo-Somos-Charco-Blanco-Azul-1.png"
import Image from "next/image"
import Hamburguer from "../../widgets/Hamburguer"
import { useState, useEffect } from "react"
import { Navbar } from "@/app/_components/widgets/Navbar/Index";
import LinkNavBar from "@/components/ui/LinksNavBar"

export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    useEffect(() => {
        if (openMobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [openMobileMenu]);

    return (
        <header className="px-auto py-5 bg-black w-full fixed md:block z-10">
            <div className="flex items-center justify-between px-5 sm:px-8 z-50">
                <Link href={"/"}>
                    <Image 
                        src={Logo} 
                        width={120} 
                        height={150} 
                        alt="Somos Chaco Logo" 
                        className="w-full md:w-3/4 lg:w-[200px]" 
                    />
                </Link>

                

                <Navbar openMobileMenu={openMobileMenu}/>

                <div className="sm:flex items-center gap-2 sm:gap-5 hidden">
                    <Link href={"/"} className="flex items-center gap-4 cursor-pointer">
                    <ShimmerButton className="shadow-2xl">
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Contacto
                      </span>
                    </ShimmerButton>
                    </Link>
                    
                </div>


                {/*responsive navbar*/}
                <div className="flex sm:hidden z-40 focus-within:"
                onClick={() => setOpenMobileMenu(!openMobileMenu)} >
                  <Hamburguer />
                </div>

                
                <nav className={`z-10 mt-[70px] w-full h-[100vh] items-center gap-5 ${openMobileMenu ? 'absolute top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-300 ease-in-out' : 'hidden'}`}>
                    
                    <LinkNavBar 
                        menuItems={dataHeader.map(({ name, link }) => ({ text: name, href: link }))}
                        onLinkClick={() => setOpenMobileMenu(false)}
                    />
                </nav>
                
                
            </div>
        </header>
    )
}

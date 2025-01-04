"use client"
import { CiMenuFries,} from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Navbar } from "@/app/_components/widgets/Navbar/Index";
import ShimmerButton from "@/components/ui/magicUi/shimmer-button"
import Logo from "@/public/assets/cropped-Logo-Somos-Charco-Blanco-Azul-1.png"
import Image from "next/image"
import Hamburguer from "../../widgets/Hamburguer"
export function Header() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

 
    return (
        <div className="px-auto py-5 bg-black w-full">
            <div className="flex items-center justify-between px-5 sm:px-8">
                <Link href={"/"}>
                    <Image 
                        src={Logo} 
                        width={120} 
                        height={150} 
                        alt="Somos Chaco Logo" 
                        className="w-1/2 md:w-3/4 lg:w-full" 
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
                <div className="flex sm:hidden">
                  <Hamburguer/>
                </div>
            </div>
        </div>
    )
}

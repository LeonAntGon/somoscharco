import { Brands } from "./_components/ui/brands";
import { Header } from "./_components/blocs/Header/Header";
import HeroSection from "./_components/blocs/HeroSection";
import Somos from "./_components/blocs/Somos";
import Experience from "./_components/blocs/Experience";
import Services from "./_components/blocs/Services";
import Footer from "./_components/blocs/Footer";
import  Contact from "@/app/_components/ui/Contact"

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Somos/>
    <Experience/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}

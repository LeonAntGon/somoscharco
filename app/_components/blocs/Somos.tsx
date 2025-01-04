import TextRevealByWord from "@/components/ui/TextRevealByWord";
import AboutSomos from "../ui/AboutSomos";

export default function Somos() {
    
  return (
    <section className="bg-black"
    style={{
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maskImage: 'linear-gradient(black 95%, transparent)'
    }}>
        <div className="z-10 flex min-h-64 items-center justify-center rounded-lg">
            <TextRevealByWord text="Somos Charco" />
        </div>
        <AboutSomos/>
    </section>
  );
}


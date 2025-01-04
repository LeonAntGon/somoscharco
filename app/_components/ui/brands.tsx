import Amarula from "@/public/brands/amarula.png";
import Brahma from "@/public/brands/brahma.png";
import BrancaUnico from "@/public/brands/branca-unico.png";
import Budweiser from "@/public/brands/budweiser.png";
import CarolinaHerrera from "@/public/brands/carolina-herrera.png";
import CoronaXParley from "@/public/brands/corona-x-parley.jpg";
import IssueProfessional from "@/public/brands/issue professional.png";
import Levite from "@/public/brands/levite.png";
import MercadoPago from "@/public/brands/mercado-pago.png";
import MrJeff from "@/public/brands/mr-jeff.png";
import Natura from "@/public/brands/natura.png";
import Nissan from "@/public/brands/nissan.png";
import PedidosYa from "@/public/brands/pedidos ya.png";
import Pepsi from "@/public/brands/pepsi.png";
import Serenisima from "@/public/brands/serenisima.png";
import Splenda from "@/public/brands/splenda.png";
import StellaArtois from "@/public/brands/stella-artois.png";
import Zillertal from "@/public/brands/zillertal.png";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/magicUi/marquee";
import Image from "next/image";


const brands = [
  {
    name: "Amarula",
    img: Amarula,
  },
  {
    name: "Brahma",
    img: Brahma,
  },
  {
    name: "Branca Unico",
    img: BrancaUnico,
  },
  {
    name: "Budweiser",
    img: Budweiser,
  },
  {
    name: "Carolina Herrera",
    img: CarolinaHerrera,
  },
  {
    name: "Corona x Parley",
    img: CoronaXParley,
  },
  {
    name: "Issue Professional",
    img: IssueProfessional,
  },
  {
    name: "Levite",
    img: Levite,
  },
  {
    name: "Mercado Pago",
    img: MercadoPago,
  },
  {
    name: "Mr. Jeff",
    img: MrJeff,
  },
  {
    name: "Natura",
    img: Natura,
  },
  {
    name: "Nissan",
    img: Nissan,
  },
  {
    name: "Pedidos Ya",
    img: PedidosYa,
  },
  {
    name: "Pepsi",
    img: Pepsi,
  },
  {
    name: "Serenisima",
    img: Serenisima,
  },
  {
    name: "Splenda",
    img: Splenda,
  },
  {
    name: "Stella Artois",
    img: StellaArtois,
  },
  {
    name: "Zillertal",
    img: Zillertal,
  },
];

const firstRow = brands.slice(0, brands.length / 2);
const secondRow = brands.slice(brands.length / 2);

type ReviewCardProps = {
  name: string;
  img: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, img }) => {
  return (
    <figure
      className={cn(
        "relative w-25 cursor-pointer overflow-hidden rounded-xl p-2 bg-[#ffffff]",
      )}
    >
      <div className="flex items-center gap-2">
        
        <Image width={110} height={80} alt={name} src={img} className="my-auto"/>
      </div>
    </figure>
  );
};

export function Brands() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...{ ...review, img: review.img.src }} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...{ ...review, img: review.img.src }} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

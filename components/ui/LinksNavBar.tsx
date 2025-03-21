import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface LinkNavBarProps {
  menuItems: { text: string; href: string }[];
  onLinkClick: () => void;
}

export default function LinkNavBar({ menuItems, onLinkClick }: LinkNavBarProps) {
  return (
    <div className="flex w-full flex-col gap-y-5 overflow-hidden pt-[50px] mt-auto">
        
      {menuItems.map((item, index) => (
        <div key={index} className="group flex justify-center gap-2 ">
          <ArrowRight className="size-5 -translate-x-full text-black opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:text-blue-500 group-hover:opacity-100 md:size-10" />

          <Link href={item.href} className="text-white z-30 -translate-x-6 cursor-pointer font-mono font-semibold transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:text-blue-500 dark:text-white md:-translate-x-12 md:text-4xl md:group-hover:translate-x-0" onClick={onLinkClick}>
            {item.text}
          </Link>
          
        </div>
      ))}
    </div>
  );
}

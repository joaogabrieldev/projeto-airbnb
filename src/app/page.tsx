"use client";

import Logo from "@/components/Logo";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const [activeItem, setActiveItem] = useState("Acomodações");

  const defaultTransition = `transition duration-150 ease-in-out`;

  const baseItemStyle = `font-semibold  opacity-50 ${defaultTransition} hover:opacity-100 hover:text-[#FF385C]`;

  const logoDefaultColor = `fill-[#FF385C]`;

  const defaultUseColor = `#FF385C`;

  function handleActiveItem(item: string): string {
    const teste =
      activeItem === `${item}`
        ? `opacity-100 text-[#FF385C]`
        : `text-gray-600 ${baseItemStyle} ${defaultTransition}`;

    return teste;
  }

  return (
    <div>
      <div>
        <div className="p-5 container mx-auto flex flex-row justify-between items-center">
          
          <Logo 
            width={102}
            textColor={"#FF385C"}
            firstColor={"#A50036"}
            lastColor={"#FF385C"}
          />
          <div className={`flex flex-row gap-6 ${poppins.className}`}>
            <Link
              onClick={() => setActiveItem("Acomodações")}
              className={`${baseItemStyle} ${handleActiveItem("Acomodações")}`}
              href={""}
            >
              Acomodações
            </Link>
            <Link
              onClick={() => setActiveItem("Experiências")}
              className={`${baseItemStyle} ${handleActiveItem("Experiências")}`}
              href={""}
            >
              Experiências
            </Link>
          </div>
          <div>
            <Link
              href=""
              className={`rounded-md border-2 px-3 py-1.5 ${defaultTransition}
              text-[${defaultUseColor}]
              border-[${defaultUseColor}] 
              font-semibold
              flex
              items-center
              justify-center 
              hover:bg-[#FF385C] hover:text-white
            hover:border-[#FF385C]`}
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
      <div className="border-2 border-green-600">Conteudo</div>
      <div className="border-2 border-purple-600">Rodapé</div>
    </div>
  );
}

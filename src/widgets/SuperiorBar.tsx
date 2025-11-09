import { Poppins } from "next/font/google";
import { useState } from "react";

import { defaultTransition } from "@/assets/defaultVariables";
import LoginButton from "@/components/LoginButton";
import Logo from "@/components/Logo";
import NavItem from "@/components/NavItem";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const SuperiorBar = () => {
  const [activeItem, setActiveItem] = useState("Acomodações");

  return (
    <div className="mx-auto flex flex-row items-center justify-between p-6">
      <Logo
        width={102}
        textColor={"#FF385C"}
        firstColor={"#A50036"}
        lastColor={"#FF385C"}
      />
      <div className={`flex flex-row gap-6 ${poppins.className}`}>
        <NavItem
          label="Acomodações"
          href="#"
          activeItem={activeItem}
          defaultTransition={defaultTransition}
          onClick={() => setActiveItem("Acomodações")}
        />
        <NavItem
          label="Experiências"
          href="#"
          activeItem={activeItem}
          defaultTransition={defaultTransition}
          onClick={() => setActiveItem("Experiências")}
        />
      </div>
      <div>
        <LoginButton
          href="#"
          value="Entrar"
          defaultTransition={defaultTransition}
        />
      </div>
    </div>
  );
};

export default SuperiorBar;

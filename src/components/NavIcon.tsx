import Image from "next/image";
import Link from "next/link";

import { defaultTransition, defaultUseColor } from "@/assets/defaultVariables";

import { INavIconProps } from "../types/components.types";

const NavIcon = ({ href, src, alt, label }: INavIconProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-0.5 ${defaultTransition} hover:text-[${defaultUseColor}] `}
    >
      <Image src={src} alt={alt} width={24} height={24} />
      <span className="text-sm font-semibold md:text-[14.5px]">{label}</span>
    </Link>
  );
};

export default NavIcon;

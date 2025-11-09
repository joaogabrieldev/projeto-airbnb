import { CircleUser } from "lucide-react";
import Link from "next/link";

import { defaultUseColor } from "@/assets/defaultVariables";

interface IButtonProps {
  href: string;
  value: string;
  defaultTransition: string;
}

const LoginButton = ({ value, defaultTransition, href }: IButtonProps) => {
  return (
    <Link
      className={`rounded-xl border-2 ${defaultTransition} px-3 py-2 text-[${defaultUseColor}] border-[${defaultUseColor}] flex flex-row items-center justify-center gap-1.5 font-semibold hover:border-[#FF385C] hover:bg-[#FF385C] hover:text-white`}
      href={href}
    >
      <CircleUser aria-label="Ícone de Usuário" />
      <span>{value}</span>
    </Link>
  );
};

export default LoginButton;

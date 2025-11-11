import { Inter } from "next/font/google";

import { BadgeProps } from "./components.types";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Badge = ({ children }: BadgeProps) => {
  return (
    <span
      className={`rounded-full bg-white px-3 font-medium ${inter.className} text-[12.5px] sm:text-[16px] md:text-[15px] lg:text-[15px] xl:py-0.5 xl:text-[12.5px]`}
    >
      {children}
    </span>
  );
};

export default Badge;

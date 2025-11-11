import { Star } from "lucide-react";
import { Figtree } from "next/font/google";

import { IAccommodationDescProps } from "./components.types";

const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  currencyDisplay: "symbol",
  maximumFractionDigits: 0,
});

const AcommodationDesc = ({
  date,
  host,
  location,
  price,
  rating,
}: IAccommodationDescProps) => {
  return (
    <div className={`${figtree.className} mt-0.5`}>
      <div className="flex justify-between py-1">
        <div className="font-semibold">{location.description}</div>
        <div className="flex items-center gap-1 ">
          <Star width={15} height={15} fill="black"/>
          <span className="font-semibold select-none pt-0.5">{rating}</span>
        </div>
      </div>
      <div className="select-none">
        <span className="font-semibold">Anfitriã(o): </span>
        <span>{host}</span>
      </div>
      <div className="after:content-['.']">
        <span>{date}</span>
      </div>
      <div className="flex flex-row gap-1">
        <span className="font-bold">{formatter.format(price)}</span>
        <span>noite</span>
      </div>
    </div>
  );
};

export default AcommodationDesc;

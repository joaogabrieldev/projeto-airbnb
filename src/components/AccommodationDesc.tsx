import { Star } from "lucide-react";
import { Figtree } from "next/font/google";

import { IAccommodationDescProps } from "../types/components.types";

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
    //* Div Principal
    <div className={`${figtree.className} mt-0.5`}>
      {/*Desc Title*/}
      <div className="-mb-2 flex justify-between pt-1 gap-1.5">
        <div className="font-semibold  leading-5">
          {location.description.replace("Brasil", `${location.city}`)}
        </div>
        <div className="flex items-center gap-1">
          <Star width={15} height={15} fill="black" />
          <span className="pt-0.5 font-semibold select-none">{rating}</span>
        </div>
      </div>
      <div className="pb-2">
        <span className="text-sm text-neutral-500">{location.state}</span>
      </div>
      {/*Desc Body*/}
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

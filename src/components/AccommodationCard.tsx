import { IAccomodation } from "@/assets/assets.types";
import { Heart } from "lucide-react";
import Image from "next/image";
import { IAccommodationCardProps } from "./components.types";

const AccommadationCard = ({
  className, 
  src,
  alt,
  width,
  height, 
  date, 
  hasBadge,
  host,
  id,
  location,
  number,
  photos,
  price,
  rating,
  slug,
  testimonials,
  title}:IAccomodation & IAccommodationCardProps) => {
  const fillHeartColor = "rgb(28, 25, 23. 0.6)";
  const strokeHeartColor = "white";

  return (
      <div>
        <div className="flex flex-row items-center justify-around gap-14">
              <span>Preferido dos Hóspedes</span>
              <button>
                <Heart
                  className="cursor-pointer"
                  style={{
                    fill: fillHeartColor,
                    stroke: strokeHeartColor,
                  }}
                />
              </button>
            </div>
            <Image src={""} alt={""} />
      </div>
  );
};

export default AccommadationCard;

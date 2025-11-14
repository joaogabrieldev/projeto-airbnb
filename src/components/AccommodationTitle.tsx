import { Heart } from "lucide-react";
import { useState } from "react";

import { IAccommodationTitleProps } from "../types/components.types";
import Badge from "./Badge";

const AccommodationTitle = ({ label, hasBadge }: IAccommodationTitleProps) => {
  const [isFilled, setIsFilled] = useState(false);

  const fillHeartColor = isFilled ? "rgb(239,68, 68)" : "rgba(28, 25, 23, 0.6)";
  const strokeHeartColor = isFilled ? "rgb(239, 68, 68)" : "white";

  const handleHeartClick = () => {
    setIsFilled((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <div className="absolute flex w-full flex-row items-center justify-between p-4 select-none">
        <div className="m-0 p-0">
          {hasBadge && <Badge className="opacity-100">{label}</Badge>}
        </div>
        <div>
          <button onClick={handleHeartClick}>
            <Heart
              aria-label="Favoritos"
              className="cursor-pointer"
              style={{
                fill: fillHeartColor,
                stroke: strokeHeartColor,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationTitle;

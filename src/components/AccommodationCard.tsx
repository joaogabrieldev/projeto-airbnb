import { Heart } from "lucide-react";

const AccommadationCard = () => {
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
    </div>
  );
};

export default AccommadationCard;

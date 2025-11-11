import { Heart } from "lucide-react";
import Image from "next/image";

import { accommodations } from "@/assets/accommodations";

const Accommodations = () => {
  const fillHeartColor = "rgba(28, 25, 23, 0.6)";
  const strokeHeartColor = "white";

  return (
    <section className="mt-14 grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {accommodations.map((item, index) => {
        return (
          <div key={index}>
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
            <Image
              className="aspect-square w-full rounded-xl object-cover"
              src={item.photos[0].source}
              alt={item.photos[0].description}
              width={300}
              height={300}
            />
            <div className="flex justify-between">
              <div>{}</div>
              <div>Rating</div>
            </div>
            <div>Horario</div>
            <div>Preço</div>
          </div>
        );
      })}
    </section>
  );
};

export default Accommodations;

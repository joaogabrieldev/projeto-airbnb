import { accommodationsData } from "@/assets/accommodations";

import AccommadationCard from "../components/AccommodationCard";
import AcommodationDesc from "./../components/AccommodationDesc";
import AccommodationTitle from "./../components/AccommodationTitle";

const Accommodations = () => {
  const accommodations = accommodationsData.accommodation;

  return (
    <section className="mt-14 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {accommodations.map((item, index) => {
        return (
          <div key={index}>
            <AccommodationTitle
              label="Preferído dos hóspedes"
              hasBadge={item.hasBadge}
            />
            <AccommadationCard
              key={index}
              alt={item.photos[0].description}
              src={item.photos[0].source}
              width={300}
              slug={item.slug}
            />
            <AcommodationDesc
              date={item.date}
              host={item.host}
              location={{
                description: item.location.description,
                city: item.location.city,
                state: item.location.state

              }}
              price={item.price}
              rating={item.rating}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Accommodations;

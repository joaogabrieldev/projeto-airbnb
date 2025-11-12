import { Star } from "lucide-react";

import AccomTestimonialsTitle from "../components/AccomTestimonialsTitle";
import AccomTestimonialsBody from './../components/AccomTestimonialsBody';

interface IAccTestimonialsProps {
  rating: number;
  accommodationArray: object[];
}

const AccommodationTestimonials = ({
  rating,
  accommodationArray,
}: IAccTestimonialsProps) => {
  const avaliations =
    accommodationArray.length > 2 ? "avaliações" : "avaliação";

  return (
    <div className="w-full py-4">
      <AccomTestimonialsTitle
        title="Depoimentos"
        rating={rating}
        accommodationArray={accommodationArray}
        avaliations={avaliations}
      />
      <AccomTestimonialsBody name={""} image={""} comment={""} rating={0} customerTime={0} createdAt={0} stayedAt={0} />
    </div>
  );
};

export default AccommodationTestimonials;

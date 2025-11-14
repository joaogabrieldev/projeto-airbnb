import { Star } from "lucide-react";

import { IAccomodation } from "@/types/assets.types";

interface IAccomTestimonialTitleProps {
  title: string;
  rating: number;
  accommodationArray: IAccomodation;
}

const AccomTestimonialTitle = ({
  accommodationArray,
  title,
  rating,
}: IAccomTestimonialTitleProps) => {
  const avaliationsSufix =
    accommodationArray.testimonials.length > 1 ? "avaliações" : "avaliação";

  return (
    <div>
      <div className="">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-row items-center gap-1">
        <Star width={15} height={15} fill="black" />
        <span className="font-semibold">{rating}</span>
        <span>
          ({accommodationArray.testimonials.length} {avaliationsSufix})
        </span>
      </div>
    </div>
  );
};

export default AccomTestimonialTitle;

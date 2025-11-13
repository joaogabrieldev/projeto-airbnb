import { IAccomodation } from "@/assets/assets.types";
import { Star } from "lucide-react";


interface IAccomTestimonialTitleProps {
  title: string;
  rating: number
  accommodationArray: IAccomodation

}

const AccomTestimonialTitle = ({
  accommodationArray,
  title,
  rating
}: IAccomTestimonialTitleProps) => {
  
  const avaliationsSufix =
    accommodationArray.testimonials.length > 1 ? "avaliações" : "avaliação";

  return (
    <div>
      <div className="">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <Star width={15} height={15} fill="black"/>
        <span className="font-semibold">{rating}</span>
        <span>({accommodationArray.testimonials.length} {avaliationsSufix})</span>
      </div>
    </div>
  );
};

export default AccomTestimonialTitle;

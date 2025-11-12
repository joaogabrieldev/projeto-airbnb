import { Star } from "lucide-react";

interface ITestimonialsTitleProps {
  title: string;
  rating: number;
  accommodationArray: object[];
  avaliations: string;
}

const AccomTestimonialsTitle = ({
  title,
  rating,
  accommodationArray,
  avaliations,
}: ITestimonialsTitleProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex flex-row items-center gap-1.5">
        <div className="flex flex-row items-center gap-1">
          <Star width={15} height={15} fill="black" />
          <span>{rating}</span>
        </div>
        <div>
          <span>
            ({accommodationArray.length} {avaliations})
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccomTestimonialsTitle;

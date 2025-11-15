import { Star } from "lucide-react";
import Image from "next/image";

interface IAccTestimonialBodyProps {
  profilePic: string;
  personName: string;
  comment: string;
  testimonialRating: number;
}

const AccomTestimonialBody = ({
  profilePic,
  personName,
  comment,
  testimonialRating,
}: IAccTestimonialBodyProps) => {
  return (
    <div className="mt-4.5">
      <div className="flex flex-row items-center gap-3">
        <div id="image" className="flex items-start py-2.5">
          <Image
            className="aspect-square rounded-full object-cover"
            width={50}
            height={50}
            src={profilePic}
            alt={"Profile Pic"}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex flex-row gap-1.5">
            <span className="font-semibold">{personName}</span>
            <span>•</span>
            <div className="flex flex-row items-center gap-0.5">
              <span>{testimonialRating}</span>
              <Star width={14} height={14} fill="black" />
            </div>
          </div>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default AccomTestimonialBody;

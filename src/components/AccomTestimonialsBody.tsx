import { Star } from "lucide-react";
import Image from "next/image";

interface ITestimonialsBodyProps {
  id?: number;
  name: string;
  image: string;
  comment: string;
  rating: number;
  customerTime: number;
  createdAt: number;
  stayedAt?: number;
}

const AccomTestimonialsBody = ({
  name,
  image,
  comment,
  rating,
  customerTime,
  createdAt,
}: ITestimonialsBodyProps) => {
  const CustomerTimePrep = customerTime > 1 ? "ano" : "anos";

  return (
    <div>
      <header id="title">
        <div>
          <Image src={image} alt="Profile Pic" />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold">{name}</h3>
          <div className="text-[14px] text-zinc-500">
            há {createdAt} {CustomerTimePrep} no Airbnb
          </div>
        </div>
      </header>
      <main id="testimonial-body" className="bg-amber-800 px-5 text-white">
        <div className="flex flex-row items-center gap-1.5">
          <Star width={10} height={10} fill="black" />
          <span id="testimonial-cardTitle" className="font-semibold">
            {rating}
          </span>
        </div>
      </main>
    </div>
  );
};

export default AccomTestimonialsBody;

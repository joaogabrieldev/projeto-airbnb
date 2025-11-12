import { Star } from "lucide-react";
import Image from 'next/image';

interface ITestimonialPhoto {
  id: number;
}

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
  const CustomerTimePrep = customerTime > 1 ? "ano" : "anos"
  
  return (
    <div id="title">
      <div>
        <Image src={image} alt="Profile Pic"/>
      </div>
      <div>
        <h3 className="text-[16px] font-semibold">{name}</h3>
        <div>há {createdAt} {CustomerTimePrep}</div>
      </div>
    </div>
  );
};

export default AccomTestimonialsBody;

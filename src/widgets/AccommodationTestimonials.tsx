import AccomTestimonialBody from "@/components/AccomTestimonialsBody";
import AccomTestimonialTitle from "@/components/AccomTestimonialsTitle";
import { IAccomodation } from "@/types/assets.types";

interface IAccomTestimonialProps {
  accommodationArray: IAccomodation;
}

const AccommodationTestimonials = ({
  accommodationArray,
}: IAccomTestimonialProps) => {
  const testimonials = accommodationArray.testimonials;

  return (
    <div className="w-full py-4">
      <header className="">
        <AccomTestimonialTitle
          title="Depoimentos"
          rating={accommodationArray.rating}
          accommodationArray={accommodationArray}
        />
      </header>
      <main className="mt-3.5">
        {testimonials.map((item, index) => (
          <AccomTestimonialBody
            key={index}
            profilePic={item.image}
            personName={item.name}
            comment={item.comment}
          />
        ))}
      </main>
    </div>
  );
};

export default AccommodationTestimonials;

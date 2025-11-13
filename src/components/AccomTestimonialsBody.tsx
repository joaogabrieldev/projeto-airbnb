import Image from "next/image";

interface IAccTestimonialBodyProps {
  profilePic: string;
  personName: string;
  comment: string;
}

const AccomTestimonialBody = ({
  profilePic,
  personName,
  comment,
}: IAccTestimonialBodyProps) => {
  return (
    <div>
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
          <span className="font-semibold">{personName}</span>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default AccomTestimonialBody;

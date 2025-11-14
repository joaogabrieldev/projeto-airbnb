import Image from "next/image";
import Link from "next/link";

import { IAccommodationCardProps } from "../types/components.types";

const AccommadationCard = ({
  src,
  alt,
  width,
  slug,
}: IAccommodationCardProps) => {
  const height = width;

  return (
    <div className="rounded-[11px] shadow-md select-none">
      <Link href={slug}>
        <Image
          className="aspect-square w-full rounded-xl object-cover"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </Link>
    </div>
  );
};

export default AccommadationCard;

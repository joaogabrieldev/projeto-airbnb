import { Grip } from "lucide-react";
import Image from "next/image";

import { defaultTransition, defaultUseColor } from "@/assets/defaultVariables";

type Image = {
  id: string;
  source: string;
  description: string;
};

interface IPhotoGalleryProps {
  images: Image[];
}

const PhotoGallery = ({ images }: IPhotoGalleryProps) => {
  return (
    <div>
      <div className="relative grid grid-cols-1 gap-2 rounded-xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.slice(0, 5).map((image, index) => {
          const firstImageSpan = index == 0 ? "col-span-2 row-span-2" : "";
          const firstImageBorder =
            index == 0 ? "rounded-tl-3xl rounded-bl-3xl " : "";
          const fourthImage = index == 2 ? "rounded-tr-3xl" : "";
          const fifthImage = index == 4 ? "rounded-br-3xl" : "";
          return (
            <div key={index} className={` ${firstImageSpan}`}>
              <Image
                className={`${firstImageBorder} ${fourthImage} ${fifthImage} aspect-square w-full object-cover`}
                src={image.source}
                alt={image.description}
                width={1280}
                height={720}
              />
            </div>
          );
        })}
        <div
          className={`absolute bottom-0 left-0 flex w-full -translate-x-4 justify-end py-3`}
        >
          <button
            className={`${defaultTransition} flex cursor-pointer flex-row items-center gap-1 rounded-md border bg-white px-3 py-1 font-medium hover:bg-[${defaultUseColor}] hover:text-white hover:border-[${defaultUseColor}]`}
            style={{}}
          >
            <Grip width={20} height={20} />
            <span>Mostrar todas as fotos</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

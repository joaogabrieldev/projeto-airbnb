"use client";

import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";

import { IAccomodation } from "@/types/assets.types";
import { fetchDataByID } from "@/utils/api";
import AccommodationDetails from "@/widgets/AccommodationDetails";
import AccommodationTestimonials from "@/widgets/AccommodationTestimonials";
import Footer from "@/widgets/Footer";
import PhotoGallery from "@/widgets/PhotosGallery";
import SearchBar from "@/widgets/SearchBar";
import SuperiorBar from "@/widgets/SuperiorBar";

interface IDetailsPageProps {
  params: {
    slug: string;
  };
}

export default function DetailsPage({
  params,
}: {
  params: Promise<IDetailsPageProps["params"]>;
}) {
  // console.log(params);

  const { slug } = use(params);

  const [accommodation, setAccommodation] = useState<IAccomodation | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAccommodationData = async () => {
      try {
        const data = await fetchDataByID(slug);

        if (!data) {
          notFound();
        } else {
          setAccommodation(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    loadAccommodationData();
  }, [slug]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!accommodation) {
    return null;
  }

  return (
    <div>
      <header className="container mx-auto">
        <SuperiorBar />
        <SearchBar />
      </header>

      <hr className="my-3 text-gray-400" />

      <main className="container mx-auto py-4">
        <h1 className="py-2.5 text-2xl font-semibold">
          {accommodation.location.description.replace(
            "Brasil",
            `${accommodation.location.state}`,
          )}{" "}
          - {accommodation.location.country}
        </h1>
        <PhotoGallery images={accommodation.photos} />
        <div className="flex flex-col md:flex-row">
          <AccommodationDetails accommodation={accommodation} />
          <AccommodationTestimonials accommodationArray={accommodation} />
        </div>
      </main>

      <footer className="mt-10 w-full">
        <Footer />
      </footer>
    </div>
  );
}

/* eslint-disable @next/next/no-async-client-component */
"use client";

import { notFound } from "next/navigation";

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

export default function DetailsPage({ params }: Promise<IDetailsPageProps>) {
  // console.log(params);

  const { slug } = params;
  const accommodation = await fetchDataByID(slug);

  if (!accommodation) {
    notFound();
  }

  return (
    <div>
      <header className="container mx-auto">
        <SuperiorBar />
        <SearchBar />
      </header>

      <hr className="my-3 text-gray-400" />

      <main className="container mx-auto py-4">
        <h1 className="py-2.5 text-2xl font-semibold">{accommodation.title}</h1>
        <PhotoGallery images={accommodation.photos} />
        <div className="flex flex-col md:flex-row">
          <AccommodationDetails />
          <AccommodationTestimonials accommodationArray={accommodation} />
        </div>
      </main>

      <footer className="mt-10 w-full">
        <Footer />
      </footer>
    </div>
  );
}

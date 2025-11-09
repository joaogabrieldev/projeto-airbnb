"use client";

import Accommodations from "../widgets/Accommodations";
import HorizontalNav from "./../widgets/HorizontalNav";
import SearchBar from "./../widgets/SearchBar";
import SuperiorBar from "./../widgets/SuperiorBar";

export default function Home() {
  return (
    <div>
      <header className="container mx-auto">
        <SuperiorBar />
        <SearchBar />
      </header>

      <hr className="my-3 text-gray-400" />

      <main className="container mx-auto">
        <HorizontalNav />
        <Accommodations />
      </main>

      <footer className="container mx-auto mt-20">Rodapé</footer>
    </div>
  );
}

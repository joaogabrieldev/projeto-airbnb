"use client";

import SearchBar from "./../widgets/SearchBar";
import SuperiorBar from "./../widgets/SuperiorBar";

export default function Home() {
  return (
    <div>
      <header className="container mx-auto">
        <SuperiorBar />
        <SearchBar />
      </header>

      <hr className="my-3" />

      <main className="container mx-auto">Conteúdo</main>

      <footer className="container mx-auto">Rodapé</footer>
    </div>
  );
}

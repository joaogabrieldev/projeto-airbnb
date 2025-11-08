"use client";

import SearchBar from "./../widgets/SearchBar";
import SuperiorBar from "./../widgets/SuperiorBar";

export default function Home() {
  return (
    <div>
      <div>
        <SuperiorBar />
        <SearchBar />
      </div>
      <div className="border-2 border-green-600">Conteudo</div>
      <div className="border-2 border-purple-600">Rodapé</div>
    </div>
  );
}

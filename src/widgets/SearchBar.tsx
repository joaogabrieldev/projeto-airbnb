import { defaultUseColor } from "@/assets/defaultVariables";

import SearchButton from "../components/SearchButton";

const SearchBar = () => {
  return (
    <div className="container mx-auto flex w-full max-w-2xl rounded-full border border-gray-200 px-2.5 py-1.5 shadow-2xl shadow-gray-300">
      <input
        type="text"
        className={`w-full px-2 placeholder-gray-400 outline-0`}
        placeholder="Comece a sua busca"
        id=""
        style={{
          color: defaultUseColor,
          fontWeight: 500,
        }}
      />
      <SearchButton />
    </div>
  );
};

export default SearchBar;

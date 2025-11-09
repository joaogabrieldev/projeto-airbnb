import { Search } from "lucide-react";

import { defaultUseColor } from "@/assets/defaultVariables";

const SearchButton = () => {
  return (
    <button
      className={`bg-[${defaultUseColor}] cursor-pointer rounded-full p-2`}
    >
      <Search size={30} color="#FFFFFF" />
    </button>
  );
};

export default SearchButton;

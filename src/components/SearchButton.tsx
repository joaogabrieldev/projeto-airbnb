import { Search } from "lucide-react";

import { defaultUseColor } from "@/assets/defaultVariables";

const SearchButton = () => {
  return (
    <button
      className={`cursor-pointer rounded-full p-2`}
      style={{
        backgroundColor: defaultUseColor,
      }}
    >
      <Search size={30} color="#FFFFFF" />
    </button>
  );
};

export default SearchButton;

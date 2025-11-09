import { SlidersHorizontal } from "lucide-react";

import { IFilterButtonProps } from "@/components/components.types";

const FilterButton = ({ value, defaultTransition }: IFilterButtonProps) => {
  return (
    <button
      className={`rounded-xl border-2 ${defaultTransition} flex cursor-pointer flex-row items-center justify-center gap-1.5 border-gray-400 px-3 py-2 font-semibold text-gray-400 hover:border-gray-600 hover:text-gray-600`}
    >
      <SlidersHorizontal />
      <span>{value}</span>
    </button>
  );
};

export default FilterButton;

"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { defaultTransition } from "@/assets/defaultVariables";
import { icons } from "@/assets/icons";

import FilterButton from "../components/FilterButton";
import NavIcon from "./../components/NavIcon";

const HorizontalNav = () => {
  return (
    <div className="flex flex-row items-center">
      {/* Nav */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          764: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 9 },
        }}
      >
        {icons.map((icon, index) => {
          return (
            <SwiperSlide key={index}>
              <NavIcon
                key={icon.id}
                href={icon.url}
                src={icon.source}
                alt={icon.description}
                label={icon.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <FilterButton
        defaultTransition={defaultTransition}
        value="Filtros"
        aria-label="Ícone de Filtro"
      />
    </div>
  );
};

export default HorizontalNav;

import { AccommodationLocation } from "./assets.types";

export interface ILogoProps {
  width: number;
  textColor: string;
  firstColor: string;
  lastColor: string;
  href: string;
}

export interface IFilterButtonProps {
  value: string;
  defaultTransition: string;
}

export interface ILoginButtonProps {
  href: string;
  value: string;
  defaultTransition: string;
}

export interface INavIconProps {
  href: string;
  src: string;
  alt: string;
  // iconWidth: number;
  // iconHeight: number;
  label: string;
}
export interface IAccommodationTitleProps {
  label: string;
  hasBadge: boolean;
}
export interface IAccommodationCardProps {
  src: string;
  alt: string;
  width: number;
  slug: string;
}

export interface IAccommodationDescProps {
  date: string;
  host: string;
  location: Omit<AccommodationLocation, "country">;
  price: number;
  rating: number;
}

export type BadgeProps = {
  children: React.ReactNode;
  className: string;
};

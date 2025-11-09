export type navIcon = {
  id: string;
  description: string;
  source: string;
  url: string;
};

export type AccommodationLocation = {
  description: string;
  city: string;
  state: string;
  country: string;
};

export type AccommodationTestimonials = {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
  customerTime: number;
  createdAt: number;
  stayedAt: number;
};

export type AccommodationPhotos = {
  id: string;
  source: string;
  description: string;
};

export interface IAccomodation {
  number: number;
  date: string;
  host: string;
  id: string;
  title: string;
  slug: string;
  location: AccommodationLocation;
  hasBadge: boolean;
  price: number;
  rating: number;
  testimonials: AccommodationTestimonials[];
  photos: AccommodationPhotos[];
}

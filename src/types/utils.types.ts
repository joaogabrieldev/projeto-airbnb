import { IAccommodationIcons, IAccomodation } from "./assets.types";

export interface IAirbnbAPI {
  accommodation: IAccomodation[];
  icons: IAccommodationIcons[];
}

import { IAccomodation } from "@/types/assets.types";
import { IAirbnbAPI } from "@/types/utils.types";

export async function fetchData(): Promise<IAirbnbAPI> {
  try {
    const response = await fetch("https://web.codans.com.br/airbnb");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchDataByID(
  slug: string,
): Promise<IAccomodation | undefined> {
  try {
    const data = await fetchData();
    const accommodation = data.accommodation.find((accommID) => {
      return accommID.slug === decodeURIComponent(slug);
    });

    return accommodation;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

import { IAccomodation } from "@/types/assets.types";
import { IAirbnbAPI } from "@/types/utils.types";

export async function fetchData(): Promise<IAirbnbAPI> {
  try {
    const response = await fetch("https://web.codans.com.br/airbnb");
    const text = await response.text(); // <-- Adicione isto
    console.log("RESPOSTA DA API (em texto):", text); // <-- Adicione isto

    // Agora, tente fazer o parse
    const data = JSON.parse(text);

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
      return accommID.slug === slug;
    });

    return accommodation;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

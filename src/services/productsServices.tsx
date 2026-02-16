import { dataType } from "@/types/product";

export const productsService = async (): Promise<dataType> => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }

    const data = response.json();
    console.log(data)
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

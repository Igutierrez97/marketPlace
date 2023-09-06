import { Shop, ShopsResponse } from "@/interfaces/shops/shops";


export async function getShopsData() {
  let url = "http://localhost:3000/api/shops";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data }:{data:Shop[]} = await response.json();

  return data;
}

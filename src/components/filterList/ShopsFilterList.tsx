
import { Shop } from "@/interfaces/shops/shops";
import ShopCard from "../card/ShopCard";

interface FilterProps {
  provincia: string | null;
  municipio: string | null;
  moneda: string | null;
}

async function filterShopData(filterProps: FilterProps) {
  const params = new URLSearchParams();

  if (filterProps) {
    Object.entries(filterProps).forEach(([key, value]) => {
      if (value !== null) {
        params.set(key, value);
      }
    });
  }

  let url = `http://localhost:3000/api/shops?${params.toString()}`;
  
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function ShopsFilterList({
  filterProps,
}: {
  filterProps: FilterProps;
}) {
    const { data }:{data:Shop[]} = await filterShopData(filterProps);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {data.map((el)=>{
          return  <ShopCard key={el.merchant_UUID} shop={el}/>
        })}
      </div>
    </>
  );
}

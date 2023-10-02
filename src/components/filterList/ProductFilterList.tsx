import { Root } from "@/interfaces/root";
import ProductsCard from "../card/ProductsCard";

interface FilterProps {
  provincia: string | null;
  municipio: string | null;
  moneda: string | null;
  max_price: string | null;
  min_price: string | null;
}

async function filterData(filterProps: FilterProps) {
  const params = new URLSearchParams();

  if (filterProps) {
    Object.entries(filterProps).forEach(([key, value]) => {
      if (value !== null) {
        params.set(key, value);
      }
    });
  }

  let url = `http://localhost:3000/api/products?${params.toString()}`;
  console.log(url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function ProductFilterList({
  filterProps,
}: {
  filterProps: FilterProps;
}) {
  const { data }: { data: Root } = await filterData(filterProps);
  const { content } = data;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {content.map((el) => {
          return <ProductsCard key={el.merchant_UUID} product={el} />;
        })}
      </div>
    </>
  );
}

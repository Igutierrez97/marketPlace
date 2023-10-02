import NoResultFound from "@/components/NoResultFound/NoResultFound";
import ProductsCard from "@/components/card/ProductsCard";
import FilterModal from "@/components/modal/FilterModal";
import { Root } from "@/interfaces/root";

async function getSearchData(search: string) {
  const url = `http://localhost:3000/api/products?nombre_producto=${search}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Page({ params }: { params: { search: string } }) {
  const { data }: { data: Root } = await getSearchData(params.search);
  const { content } = data;

  if (content.length === 0) {
    return (
     <NoResultFound width={310} height={310}/>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {content.map((el) => {
          return <ProductsCard key={el.merchant_UUID} product={el} />;
        })}
      </div>
      <FilterModal />
    </>
  );
}

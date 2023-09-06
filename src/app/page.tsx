import ProductsCard from "@/components/card/ProductsCard";
import Pag from "@/components/pagination/pag";
import { Root } from "@/interfaces/root";
import { getData } from "@/services/getData";

export default async function Home() {
  const data: Root = await getData(0);
  const { content } = data;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {content.map((el) => {
          return <ProductsCard key={el.merchant_UUID} product={el} />;
        })}
      </div>
      {data.totalElements}

      <Pag page={1} />
    </>
  );
}

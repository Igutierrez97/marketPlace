import ProductsCard from "@/components/card/ProductsCard";
import { Root } from "@/interfaces/root";
import { getData } from "@/services/getData";

export default async function Page({ params }: { params: { id: string } }) {
  const page = parseInt(params.id);
  const { data }: { data: Root } = await getData(page - 1);
  const { content } = data;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {content.map((el: any) => {
          return <ProductsCard key={el.merchant_UUID} product={el} />;
        })}
      </div>
    </>
  );
}

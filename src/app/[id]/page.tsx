import ProductsCard from "@/components/card/ProductsCard";
import Pag from "@/components/pagination/pag";
import { Root } from "@/interfaces/root";
import { getData } from "@/services/getData";

export async function generateStaticParams() {
  const { data }: { data: Root } = await fetch(
    "http://localhost:3000/api/products"
  ).then((res) => res.json());

  const number = data.totalPages;
  const id: string[] = [];

  for (let i = 0; i <= number; i++) {
    id.push(i.toString());
  }

  return id;
}

export default async function Page({ params }: { params: { id: string } }) {
  const page = parseInt(params.id);
  const data: Root = await getData(page-1);
  const { content } = data;
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {content.map((el) => {
          return <ProductsCard key={el.merchant_UUID} product={el} />;
        })}
      </div>
      <strong>
        {data.number} de {data.totalPages} con {data.totalElements}
      </strong>
      <Pag page={parseInt(params.id)} />
    </>
  );
}

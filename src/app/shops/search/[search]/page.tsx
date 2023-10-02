import NoResultFound from "@/components/NoResultFound/NoResultFound";
import ShopCard from "@/components/card/ShopCard";
import { Shop } from "@/interfaces/shops/shops";
import { getShopsData } from "@/services/getShopsData";

export default async function Page({ params }: { params: { search: string } }) {
  const { data }: { data: Shop[] } = await getShopsData(params.search);

  if (data.length === 0) {
    return (
     <NoResultFound width={310} height={310}/>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {data.map((el) => {
          return <ShopCard shop={el} />;
        })}
      </div>
    </>
  );
}

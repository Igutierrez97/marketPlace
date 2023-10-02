import ShopCard from "@/components/card/ShopCard";
import Carrusel from "@/components/carrusel/Carrusel";
import FilterModal from "@/components/modal/FilterModal";
import { Shop} from "@/interfaces/shops/shops";
import { getShopsData } from "@/services/getShopsData";



export default async function Page() {
  const { data }:{data:Shop[]} = await getShopsData();

  return (
    <>
    <Carrusel />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        {data.map(el=>{
          return  <ShopCard key={el.merchant_UUID} shop={el}/>
        })}
      </div>
      <FilterModal/>
    </>
  );
}

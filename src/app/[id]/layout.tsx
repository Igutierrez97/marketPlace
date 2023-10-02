import Carrusel from "@/components/carrusel/Carrusel";
import FilterModal from "@/components/modal/FilterModal";
import Pag from "@/components/pagination/pag";
import { getData } from "@/services/getData";

export default async function IDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getData(0);

  return (
    <search>
      <Carrusel />
      {children}
      <FilterModal />
      <Pag totalPages={data.totalPages} />
    </search>
  );
}

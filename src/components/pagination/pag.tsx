"use client";
import { useRouter, usePathname } from "next/navigation";
import { Pagination } from "@nextui-org/react";

export default function Pag({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (page: number) => {
    if (page === 1) router.push("/");
    else {
      router.push(`/${page}`);
    }
  };

  return (
    <div className="flex justify-center my-2">
      <Pagination
        page={pathname === "/" ? 1 : parseInt(pathname.split("/")[1])}
        total={totalPages}
        onChange={handleChange}
      />
    </div>
  );
}

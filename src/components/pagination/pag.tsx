"use client";
import { useRouter } from "next/navigation";
import { Pagination } from "@nextui-org/react";
import { getData } from "@/services/getData";
import { Root } from "@/interfaces/root";

import { useEffect, useState } from "react";

export default function Pag({ page }: { page: number }) {
  const [data, setData] = useState<Root | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response);
    };

    fetchData();
  }, []);

  const router = useRouter();
  const handleChange = (page: number) => {
    if (page === 1) router.push("/");
    else {
      router.push(`/${page}`);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <Pagination
        page={page}
        total={data.totalPages}
        initialPage={1}
        onChange={handleChange}
      />
    </div>
  );
}

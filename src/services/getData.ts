export async function getData(page?: number) {
  let url = "http://localhost:3000/api/products";
  if (page) {
    url += `?page=${page}`;
  }

  const response = await fetch(url, {next:{revalidate:5}});

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { data } = await response.json();

  return data;
}

export async function getData(page?: number ) {
  
  let url = `http://localhost:3000/api/products?page=${page}`;

  const response = await fetch(url);
 
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}


export async function getShopsData(nombre?:string) {

  let url = "http://localhost:3000/api/shops";
  if(nombre){
    url+=`?name=${nombre}`
  }

  const response = await fetch(url, {next:{revalidate:360}});

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  
  return response.json()
}

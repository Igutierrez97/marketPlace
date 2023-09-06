import { getShopsData } from '@/services/getShopsData'
import { json } from 'stream/consumers'




export default async function Home() {

  const data = await getShopsData()
  

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map(el=>{
        return <div key={el.id_shop} className='text-yellow-400 bg-slate-600 w-96 h-20 m-2 border-4 border-orange-600 '>
          <h1>{el.nombre}</h1>
          <h2>{el.provincia}</h2>
        </div>
      })}
      </div>
    </>
  )
}

import { db } from "~/server/db";

export const dynamic = 'force-dynamic'



export default async function HomePage() {
  const mockImages = await db.query.image.findMany({
    orderBy : (model,{desc}) => desc(model.id)
  }) 
  
  return (
    <main className="">
      
     <div className="flex flex-wrap gap-4">
    
      {[...mockImages].map((image) =>(
        <div key={image.id} className="w-48 flex flex-col">
          <img src={image.url} />
          <div>{image.name}</div>

        </div>
      ))}

      
     </div>
    </main>
  );
}

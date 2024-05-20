
import { getImages } from "~/server/queries";


export default async function FullpageView(props:{id:number})
  
 {
  
  const image = await getImages(props.id)
  return (
    <div className="flex w-full h-full">
      <div className="flex-shrink flex justify-center items-center">
      <img
      src={image.url}
      alt={image.name}
     className="flex-shrink object-contain"
      /> 
      </div>
       
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
     
  );
}
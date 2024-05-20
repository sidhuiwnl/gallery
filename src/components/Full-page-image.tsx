import Image from "next/image";
import { getImages } from "~/server/queries";


export default async function FullpageView(props:{id:number})
  
 {
  
  const image = await getImages(props.id)
  return (
    
      <Image
      src={image.url}
      alt={image.name}
      width={250}
      height={300}
      />
    
  );
}
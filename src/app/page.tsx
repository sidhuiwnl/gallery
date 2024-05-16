
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries"; 

export const dynamic = 'force-dynamic'


async function Images(){
  const mockImages =  await getMyImages()
  return(
    <div className="flex flex-wrap justify-center gap-4">
    
    {[...mockImages].map((image) =>(
      <div key={image.id} className="w-48 h-48 flex flex-col">
        <Image 
        src={image.url}
        alt={image.name}
        style={{objectFit: "contain"}}
        width={192}
        height={192}
        
        />
        <div>{image.name}</div>

      </div>
    ))}

    
   </div>
  )
}


export default async function HomePage() {
  
  
  
  return (
    <>
      <SignedOut>
        <div className="w-full h-full text-3xl">please sign in for seeing images</div>
      </SignedOut>
      <Images/>
    </>
    
  );
}

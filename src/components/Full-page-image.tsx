
import { clerkClient } from "@clerk/nextjs/server";
import { getImages } from "~/server/queries";


export default async function FullpageView(props:{id:number})
  
 {
  
  const image = await getImages(props.id)
  const uploaderId = await clerkClient.users.getUser(image.userId)
  return (
    <div className="flex w-full h-full">
      <div className="flex-shrink flex justify-center items-center">
      <img
      src={image.url}
      alt={image.name}
     className="flex-shrink object-contain"
      /> 
      </div>
       
      <div className="flex w-48 flex-shrink-0 flex-col border-l ">
        <div className="text-center text-lg border-b p-3">{image.name}</div>


        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderId.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
     
  );
}
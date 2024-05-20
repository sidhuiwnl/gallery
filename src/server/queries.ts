import "server-only";
import { db } from "../server/db"
import { auth } from "@clerk/nextjs/server";

export async function getMyImages(){
    const user = auth();

    if(!user.userId ){
        console.error("Unauthoerized")
    }
    const mockImages = await db.query.image.findMany({
         where : (model,{eq}) => eq(model.userId,user.userId),
        orderBy : (model,{desc}) => desc(model.id)
    })
    
    return mockImages
}

export async function getImages(id : number){
    const user = auth()

    if(!user.userId) throw new Error("Unauthorized")

    const image = await db.query.image.findFirst({
        where : (model,{eq}) => eq(model.id,id)
    })
    if(!image) throw new Error("Image not found")

    if(image?.userId !== user.userId) throw new Error("Unauthorized")
    

    return image
}
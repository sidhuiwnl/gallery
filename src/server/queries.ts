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
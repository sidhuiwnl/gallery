import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server" 
import { db } from "~/server/db";
import { image } from "~/server/db/schema";
import { clerkClient } from "@clerk/nextjs/server";

const f = createUploadthing();
 

 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB",maxFileCount:40 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user =  auth();

      const fullUserData = await clerkClient.users.getUser(user.userId!)

      if(fullUserData?.privateMetadata?.["can-upload"] !== true){
        throw new UploadThingError("Unauthorized")
      }

      // If you throw, the user will not be able to upload
      if (!user.userId) throw new UploadThingError("Unauthorized");
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      await db.insert(image).values({
        name : file.name,
        userId : metadata.userId,
        url : file.url
        
      })
 
      console.log("file url", file.url);
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
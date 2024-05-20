import Image from "next/image";
import { getImages } from "~/server/queries";

export default async function PhotoModal({
  
  params: { id: photoId },
}: {
  params: { id: string };
})
  
 {
  const imgId = Number(photoId)
  const image = await getImages(imgId)
  return (
    <div>
      <Image
      src={image.url}
      alt={image.name}
      width={250}
      height={300}
      />
    </div>
  );
}
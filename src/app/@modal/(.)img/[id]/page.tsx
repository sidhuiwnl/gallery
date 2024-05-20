
import { getImages } from "~/server/queries";
import { Modal } from "./modal";
import FullpageView from "~/components/Full-page-image";

export default async function PhotoModal({
  
  params: { id: photoId },
}: {
  params: { id: string };
})
  
 {
  const imgId = Number(photoId)
  const image = await getImages(imgId)
  return (
    <Modal>
      <FullpageView id={imgId}/>
    </Modal>
  );
}
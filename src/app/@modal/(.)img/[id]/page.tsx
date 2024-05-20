

import { Modal } from "./modal";
import FullpageView from "~/components/Full-page-image";

export default async function PhotoModal({
  
  params: { id: photoId },
}: {
  params: { id: string };
})
  
 {
  const imgId = Number(photoId)
  
  return (
    <Modal>
      <FullpageView id={imgId}/>
    </Modal>
  );
}
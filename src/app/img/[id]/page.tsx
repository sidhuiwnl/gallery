import FullpageView from "~/components/Full-page-image";

export default function PhotoModal({
  params : {id: photoId},
} : {
  params : {id :string}
}){
  const idAsnumber = Number(photoId)
    return (
      
      <div>
        <FullpageView id={idAsnumber}/>
     </div>
    )
    
  }
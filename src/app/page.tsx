

const mockDataUrl = [
  'https://utfs.io/f/5e119118-31ca-49f3-af8b-cd94bd80ed91-1ri2q1.jpg',
  'https://utfs.io/f/7906bf55-1b0a-479b-a147-fac96615750c-kflh1x.jpg',
  'https://utfs.io/f/8f4819eb-0445-40a9-ab51-b2a98839c3d5-4cglxh.jpg',
  'https://utfs.io/f/4d56c9df-59f2-4f17-95a4-0cc25cecab28-kf7jw6.jpg'
]

const mockImages = mockDataUrl.map((url,index) =>({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
     <div className="flex flex-wrap gap-4">
      {[...mockImages,...mockImages].map((image) =>(
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
      ))}
     </div>
    </main>
  );
}

import Image from "next/image";

const getScreenshot = async () => {
  const response = await fetch("https://orion-apiv1.vercel.app/gallery", {
    next: {
      revalidate: 300
    }
  });

  return response.json();
};

const Gallery = async () => {
  const ss = await getScreenshot();

  return (
    <div className="gallery w-full">
      <div className="p-4 py-24 container mx-auto">
        {ss.map((data, index) => (
          <div key={index} className="flex flex-col">
            <h1 className="font-bold p-4 text-xl animate__animated animate__fadeInUp">Orion version: {data.version}</h1>
            <div className="border rounded-lg p-4 border-neutral-300 shadow-md bg-white animate__animated animate__fadeInUp">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.screenshot.map((img, indx) => (
                  <Image
                  key={indx}
                  src={img.image}
                  width={500}
                  height={500}
                  alt="screenshots"
                  className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

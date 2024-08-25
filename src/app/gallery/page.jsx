import React from 'react'
import Link from 'next/link';
import { BsBoxArrowRight } from "react-icons/bs";

const getGallery = async () => {
  const response = await fetch("https://orion-apiv1.vercel.app/gallery", {
    next: {
      revalidate: 300 // caching for 5 minutes (60*5)
    }
  });
  return response.json();
};

const page = async() => {
  const allGallery = await getGallery();
  return (
    <div className="w-full py-24 bg-[#f6f8fd]">
      <div className="container mx-auto">
        <h1 className="p-4 font-semibold text-xl md:text-2xl">Select the version of the screenshot you want to see.</h1>
        <div className="p-4 flex flex-col md:flex-row items-center justify-center gap-3">
          {allGallery.map((data, index) => (
            <div key={index} className="border font-medium text-base md:text-xl text-white rounded-lg border-neutral-300 shadow-md bg-emerald-500 w-full md:w-1/4 p-2 text-center hover:bg-emerald-700 duration-300 transition-all">
              <Link
              className="justify-center items-center flex gap-2"
              href={`/gallery/${data.slug}`}>{data.version}
              <BsBoxArrowRight size={20} className="font-bold"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
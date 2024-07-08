import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const getDev = async () => {
  const response = await fetch("https://orion-apiv1.vercel.app/developer", {
    next: {
      revalidate: 300 // caching for 5 minutes (60*5)
    }
  });
  return response.json();
};

const TeamList = async () => {
  const data = await getDev();

  return (
    <div className="container mx-auto">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10">
        { data.map((dev, index) => (
          <div key={index} className="dev-container border border-neutral-300 p-4 bg-neutral-50 rounded-lg animate__animated animate__fadeInUp">
            <div className="items-center flex flex-col justify-center">
              <Image
              src={dev.image}
              alt={dev.name}
              width={100}
              height={100}
              quality={80}
              className="rounded-full border border-black"
              />
              <h2 className="font-bold pt-4">{dev.name}</h2>
              <p className="pt-1">{dev.role}</p>
              <hr className="my-2 w-1/2 lg:w-1/3 border-gray-500"/>
              <div className="flex space-x-2 items-center justify-center">
                { dev.device_codename.map(device => (
                  <p key={device} className="bg-green-200 text-green-700 px-2 rounded-md text-sm">
                    {device}
                  </p>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-2 py-4">
                <Link href={dev.social.github} target="_blank" className="hover:text-green-500 duration-300 transition-all hover:-translate-y-2 text-gray-500">
                  <FaGithub size={30} />
                </Link>
                <span className="font-bold">|</span>
                <Link href={dev.social.telegram} target="_blank" className="hover:text-blue-500 duration-300 transition-all hover:-translate-y-2 text-gray-500">
                  <FaTelegram size={30}/>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamList;

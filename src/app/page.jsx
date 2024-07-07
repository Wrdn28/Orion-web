import Link from "next/link";

// icons
import { IoLogoAndroid } from "react-icons/io5";
import { IoRocket } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { ImPaintFormat } from "react-icons/im";
import { MdSecurityUpdateGood } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <main>
        <div className="home">
          <header className="w-full min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex flex-col mt-32 sm:mt-1 md:mt-5 lg:mt-0 lg:flex-row items-center">
                <div className="lg:w-1/2">
                  <h1 className="mb-4 text-3xl lg:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s ">
                    OrionOS Project
                  </h1>
                  <p className="mb-4 text-sm md:text-base animate__animated animate__fadeInUp animate__delay-1s">
                    OrionOS is expertly built on LineageOS and crDroid based, with better customization,
                    and user-friendly interface. Experience an operating system specifically designed
                    to meet all your needs easily with fresh UI.
                  </p>
                  <div className="flex gap-3 justify-center lg:justify-normal">
                    <Link className="grab flex items-center px-3 py-2 animate__animated animate__fadeInUp animate__delay-1s"
                    href="/devices"
                    >
                      <IoLogoAndroid size={20} className="mr-2"/>
                      Grab your orion
                    </Link>
                    <Link className="new flex items-center px-3 py-2 animate__animated animate__fadeInUp animate__delay-1s"
                    href="/changelog"
                    >
                      What's new
                      <BsArrowRightCircleFill size={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 text-center mt-5 md:mt-10">
                  <img src="/orion-fw.jpg" alt="orionPage" className="mx-auto animate__animated animate__fadeInRight" />
                </div>
              </div>
            </div>
          </header>
        </div>
      </main>
    </>
  );
};

export default Home;
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// icons
import { FaDownload } from "react-icons/fa";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY > 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    changeBg();
    window.addEventListener("scroll", changeBg);
    return () => window.removeEventListener("scroll", changeBg);
  }, []);

  return (
    <div>
      <nav className={`navbar ${color ? "color-active" : ""}`}>
        <div className="justify-between mx-auto container md:items-center md:flex px-4">
          <div>
            <div className="flex items-center justify-between md:block">
              {/* LOGO */}
              <Link href="/" className="justify-center items-center flex">
                <Image src="/OrionOS.svg" width={40} height={40} />
                <h2 className="text-2xl font-bold ">OrionOS</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className=""
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <IoMdClose size={25} />
                  ) : (
                    <BsMenuButtonWide size={25} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center md:flex">
                <li className="pb-4 md:px-4 text-center">
                  <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
                    Gallery
                  </Link>
                </li>
                <li className="pb-4 md:px-4 text-center">
                  <Link href="/team" onClick={() => setNavbar(!navbar)}>
                    Team
                  </Link>
                </li>
                <li className="pb-4 md:px-4 text-center">
                  <Link href="/changelog" onClick={() => setNavbar(!navbar)}>
                    Changelog
                  </Link>
                </li>
                <li className="pb-4 md:px-4 text-center">
                  <Link href="/download" onClick={() => setNavbar(!navbar)}
                  className="btn flex items-center gap-2 bg-emerald-500 text-white px-3 py-2.5 rounded-lg justify-center"
                  >
                    Download
                    <FaDownload />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

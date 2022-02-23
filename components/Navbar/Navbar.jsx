import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeSwitch from "../General/ThemeSwitch";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Header({ logo, navitems }) {
  const router = useRouter();
  const [mobilemenu, setMobilemenu] = useState(false);
  const navItems = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "about",
      link: "/About",
    },
    {
      title: "portfolio",
      link: "/Portfolio",
    },
    {
      title: "contact",
      link: "/Contact",
    },
  ];
  return (
    <nav className=" shadow-lg fixed bg-white dark:bg-darkbackground dark:text-white w-full z-50 ">
      <div className="container mx-auto px-2 sm:px-6 md:px-0 ">
        <div className=" h-20 flex justify-between items-center">
          {/* page logo */}
          <div className="flex items-center">
            <Link href="/">
              <a>
                <h1 className="font-bold text-2xl uppercase">
                  {logo == null ? (
                    <>
                      <span className=" text-primary-default">Nya</span>ngumi
                    </>
                  ) : (
                    <>{logo}</>
                  )}
                </h1>
              </a>
            </Link>
          </div>

          <div className="md:flex items-center hidden ">
            <div className=" flex space-x-2 ">{navitems}</div>
            <ThemeSwitch />
          </div>

          {/* mobile menu button */}
          <div className="relative md:hidden">
            <button
              className="hover:text-primary-default"
              onClick={() => setMobilemenu(true)}
            >
              <GiHamburgerMenu className="text-3xl" />
            </button>
            {/* mobile menu  */}
          </div>
          {mobilemenu && (
            <div className="absolute top-0 right-0 h-screen bg-white dark:bg-darkbackground shadow-xl w-10/12 px-6 py-6 md:hidden">
              <div className="flex justify-between mb-6">
                <span>
                  <ThemeSwitch onClick={() => setMobilemenu(false)} />
                </span>
                <button
                  className="hover:text-primary-default"
                  onClick={() => setMobilemenu(false)}
                >
                  <FaTimes className="text-3xl" />
                </button>
              </div>
              <ul>
                {navItems.map((navitem, index) => (
                  <li className=" mb-4" key={index}>
                    <Link href={navitem.link} passHref>
                      <div
                        onClick={() => setMobilemenu(false)}
                        className={`font-semibold uppercase px-4 text-lg  hover:text-primary-default hover:cursor-pointer ${
                          router.pathname == navitem.link
                            ? " text-primary-default"
                            : ""
                        }`}
                      >
                        {navitem.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;

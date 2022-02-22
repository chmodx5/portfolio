import React from "react";
import Link from "next/link";
import ThemeSwitch from "../General/ThemeSwitch";

function Header({ logo, navitems }) {
  return (
    <nav className=" shadow-lg fixed bg-white dark:bg-darkbackground dark:text-white w-full z-50 ">
      <div className="container mx-auto px-2 sm:px-6 md:px-0 ">
        <div className=" h-20 flex items-center justify-center sm:items-stretch sm:justify-between">
          {/* page logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a>
                <h1 className="font-bold text-3xl uppercase">
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
        </div>
      </div>
    </nav>
  );
}

export default Header;

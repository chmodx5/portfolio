import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function NavLink({ link, text }) {
  const router = useRouter();
  return (
    <Link href={link} passHref>
      <span
        className={`font-semibold uppercase px-4 text-sm  hover:text-primary-default hover:cursor-pointer ${
          router.pathname == link ? " text-primary-default" : ""
        }`}
      >
        {text}
      </span>
    </Link>
  );
}

export default NavLink;

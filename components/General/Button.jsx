import React from "react";
import Link from "next/link";

function Button({ text, link, small, openInNewTab }) {
  return (
    <Link href={link} passHref>
      {openInNewTab ? (
        <a
          className={`inline-block bg-primary-default hover:bg-primary-light  font-semibold uppercase text-white ${
            small ? "py-1 px-3 text-md" : "px-6 py-3"
          } `}
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <a
          className={`inline-block bg-primary-default hover:bg-primary-light  font-semibold uppercase text-white ${
            small ? "py-1 px-3 text-md" : "px-6 py-3"
          } `}
        >
          {text}
        </a>
      )}
    </Link>
  );
}

export default Button;

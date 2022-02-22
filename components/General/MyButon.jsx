import React from "react";

export default function MyButon({ size, icon, text, link, clicked }) {
  if (icon && text) {
    return (
      <button
        className={`  ${
          size == "sm"
            ? "px-2 py-2 text-xs"
            : size == "md"
            ? "px-4 py-2 text-sm"
            : size == "lg"
            ? "px-6 py-2   text-base"
            : ""
        } bg-primary-default uppercase font-bold  text-white text-sm flex items-center gap-2 hover:bg-primary-light`}
      >
        {text} {icon}
      </button>
    );
  }
  if (icon) {
    return (
      <button
        onClick={clicked}
        className={`  ${
          size == "sm"
            ? "h-7 w-7"
            : size == "md"
            ? "w-10 h-10"
            : size == "lg"
            ? "w-12 h-12"
            : ""
        } bg-primary-default flex items-center justify-center text-white text-sm hover:bg-primary-light`}
      >
        {icon}
      </button>
    );
  }

  return (
    <>
      <button
        className={`  ${
          size == "sm"
            ? "px-2 py-2 text-xs"
            : size == "md"
            ? "px-4 py-2 text-sm"
            : size == "lg"
            ? "px-6 py-2   text-base"
            : ""
        } bg-primary-default uppercase font-bold  text-white text-sm hover:bg-primary-light`}
      >
        {text} tt
      </button>
    </>
  );
}

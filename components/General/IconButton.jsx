import React from "react";

function IconButton({ link, icon }) {
  return (
    <a
      className="bg-gray-900 hover:bg-primary-default p-3"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-white">{icon}</span>
    </a>
  );
}

export default IconButton;

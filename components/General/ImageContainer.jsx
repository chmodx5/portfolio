import React from "react";
import Image from "next/image";

export default function ImageContainer(img, alt) {
  return (
    <div className="bg-blue-300 relative w-full aspect-w-1 aspect-h-1">
      <Image
        src={img}
        alt={alt}
        className="w-full h-full object-center object-cover "
        layout="fill"
        priority
      />
    </div>
  );
}

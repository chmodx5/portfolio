import React from "react";
import Image from "next/image";

export default function SkillCard({ icon, title }) {
  return (
    <div>
      <div className="bg-primary-default/5 py-4  group text-center">
        <div className="flex justify-center text-7xl text-primary-default group-hover:text-white">
          <div className=" relative w-28 h-28 overflow-hidden ">
            <Image
              src={icon}
              alt="image"
              className=" grayscale group-hover:grayscale-0 object-center object-cover "
              layout="fill"
              priority
            />
          </div>
        </div>

        <h2 className="font-semibold mt-4 group-hover:font-bold text-xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

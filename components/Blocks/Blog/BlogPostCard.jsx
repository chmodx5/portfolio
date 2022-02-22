import React from "react";
import Button from "../../General/Button";
import Image from "next/image";

export default function BlogPostCard() {
  return (
    <div className="px-4">
      <div className="w-full group bg-primary-default/5  hover:-translate-y-6 ">
        <div className="bg-blue-300 aspect-w-16 aspect-h-9">
          <Image
            src="https://source.unsplash.com/random"
            alt="alt"
            className="w-full h-full object-center object-cover "
            layout="fill"
            priority
          />
        </div>
        <div className="px-6 py-10">
          <div className="flex gap-5">
            <span> 05 May 2022</span>
            <span>/</span>
            <span>E-commerce</span>
          </div>
          <br />
          <h5 className="font-bold text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            voluptatibus?
          </h5>
          <br />
          <Button small link="/" text="read more" />
        </div>
      </div>
    </div>
  );
}

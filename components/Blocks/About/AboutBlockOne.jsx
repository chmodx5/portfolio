import React from "react";
import Image from "next/image";

export default function AboutBlockOne() {
  return (
    <div className="py-20">
      <div className="mycontainer flex flex-col md:flex-row items-center justify-between w-full">
        {/* text section */}
        <div className="w-full md:w-5/12">
          <div className=" w-32 h-2 mb-8 bg-primary-default" />
          <h2 className="font-bold text-4xl">
            We Are Award Winning Creative Agency
          </h2>
          <p className="font-bold mt-8 text-lg">
            We are an award-winning website design and creative studio. We blend
            design & functionality to create awesome products for clients.
          </p>
          <p className="text-sm mt-4">
            This lorem ipsum generator is made for all the designers, designers,
            webmasters and others who need lorem ipsum. Generator is made the
            way that everyone can use it, but especially for awesome digital
            projects going to use a passage of lorem Ipsum.
          </p>
          <div className=" border-primary-default md:aspect-1  md:w-2/5 mt-12 border-[12px] flex justify-center md:justify-end items-center  ">
            <div className="  bg-white dark:bg-darkbackground py-6 w-full text-center md:p-4 md:-mr-24 md:flex">
              <h1 className=" font-black text-6xl">25+</h1>
              <div className="capitalize font-bold text-xl">
                <p>years</p>
                <p>working</p>
                <p>experiece</p>
              </div>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="w-full md:w-6/12 mt-10 md:mt-0 relative py-10 px-10">
          <div className="bg-primary-default absolute top-0 right-0 h-24 w-4/6"></div>
          <div className="bg-primary-default absolute left-0 bottom-0 h-24 w-4/6"></div>

          <div className="">
            <div className="aspect-1 bg-slate-400 relative">
              <Image
                src="https://source.unsplash.com/random"
                alt="random image"
                className="w-full h-full object-center object-cover "
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

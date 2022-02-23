import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioItem({ category, title, img }) {
  const BgImageContainer = ({ img, children }) => {
    return (
      <Link
        href={`Portfolio/${title.toLowerCase().replace(/\s/g, "-")}`}
        passHref
      >
        <div className={`relative hover:cursor-pointer group`}>
          <div
            className={`aspect-1 bg-slate-400  bg-center bg-cover bg-no-repeat group`}
            style={{ backgroundImage: `url('${img}')` }}
          >
            <div className="bg-blue-300 aspect-w-1 aspect-h-1">
              <Image
                src={img}
                alt={title}
                className="w-full h-full object-center object-cover "
                layout="fill"
                priority
              />
            </div>
          </div>

          {children}
        </div>
      </Link>
    );
  };

  return (
    <BgImageContainer img={img}>
      <div className="hidden   absolute top-0 left-0 w-full h-full bg-primary-default/0 group-hover:bg-primary-default/80 md:flex flex-col justify-end px-10 pb-14 ">
        <div className="text-white hidden group-hover:block mb-4">
          <h5 className="capitalize font-bold text-xl">{title}</h5>
          <p>{category}</p>
        </div>
      </div>
      <div className="mt-4 md:hidden ">
        <h5 className="font-bold">{title}</h5>
        <small className="capitalize">{category}</small>
      </div>
    </BgImageContainer>
  );
}

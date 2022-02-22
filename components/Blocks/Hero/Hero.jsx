import React from "react";
import Button from "../../General/Button";

export default function Hero({
  smalltitle,
  desc,
  title,
  subtitle,
  buttonlink,
  buttontext,
  bgimage,
  featuredimage,
}) {
  return (
    <div
      className={`h-auto md:h-screen   bg-fixed bg-cover bg-center bg-no-repeat"`}
      style={{ backgroundImage: "url('" + bgimage + "')" }}
    >
      <div className="bg-gray-900/80  w-full h-full">
        <div className="mycontainer mx-auto grid grid-cols-12 h-full w-full">
          <div className="order-2 md:order-1 col-span-12 md:col-span-7 flex items-center h-full w-full">
            <div className="text-white w-full  pb-20 md:pb-0">
              {/* the small title with tu icons on top  */}
              {smalltitle ? (
                <>
                  <div>
                    <div className="flex ml-2 gap-2 mb-4 ">
                      {Array.from({ length: 3 }, (_, i) => (
                        <div className="h-5 w-4 -skew-x-[30deg] bg-primary-default"></div>
                      ))}
                    </div>
                  </div>
                  <p className="font-bold mb-6">{smalltitle}</p>
                </>
              ) : (
                <>{smalltitle}</>
              )}

              <h1 className="font-bold text-6xl mb-3 text-primary-default uppercase">
                {title}
              </h1>
              <h1 className="font-bold text-5xl mb-10 capitalize">
                {subtitle}
              </h1>
              <h5 className="font-bold text-xl mb-14">{desc}</h5>
              <div>
                <Button link={buttonlink} text={buttontext} />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2  col-span-12 md:col-span-5 p-16 md:p-0 flex items-center h-full w-full">
            <div
              className="  aspect-1 bg-[url('https://source.unsplash.com/random')] bg-slate-600 w-full rounded-full
            relative"
              style={{ backgroundImage: "url('" + featuredimage + "')" }}
            >
              <div className="bg-primary-default/60  h-24 w-24 rounded-full absolute md:top-20 md:right-0 -top-5 left-[15%] md:left-[85%]"></div>
              <div className=" h-24 w-24 rounded-full absolute top-3 right-[15%] md:top-[70%] md:left-0 overflow-hidden flex gap-1 rotate-45">
                {Array.from({ length: 13 }, (_, i) => (
                  <div className="h-full w-1 bg-primary-default"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

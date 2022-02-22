import React from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import Button from "../../General/Button";
import AboutSlider from "./AboutSlider";

export default function AboutBlockWithSliders({
  subtitle,
  title,
  description,
  buttontext,
  buttonlink,
  sliders,
}) {
  return (
    <div className="py-20 px-6 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-7">
            <div className="w-full md:w-3/4">
              <HeadingWithEffect large title={title} subtitle={subtitle} />
            </div>
            <br /> <br />
            <div>{description} </div>
            <br />
            <br />
            <Button link={buttonlink} text={buttontext} />
          </div>
          <div className="col-span-12 md:col-span-5 items-center flex">
            <div className="w-full">
              {sliders.map((slider, index) => (
                <AboutSlider
                  key={index}
                  title={slider.title}
                  progress={slider.progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

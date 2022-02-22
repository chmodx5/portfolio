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
        <div className="">
          <div className="">
            <div className="w-full ">
              <HeadingWithEffect centered title={title} subtitle={subtitle} />
            </div>
            <br /> <br />
            <div className="w-full md:w-3/4 mx-auto text-center">
              {description}{" "}
            </div>
            <br />
            <br />
            <p className="text-center">
              <Button link={buttonlink} text={buttontext} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

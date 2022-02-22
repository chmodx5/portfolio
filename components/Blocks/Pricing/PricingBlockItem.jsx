import React from "react";
import { TiTick, TiTimes } from "react-icons/ti";
import Button from "../../General/Button";

export default function PaymentBlockItem({
  packagename,
  price,
  features,
  featured,
}) {
  return (
    <div
      className={`w-full ${
        featured ? "bg-gray-900 text-white" : "bg-primary-default/5"
      }  p-10 flex flex-col items-center`}
    >
      <h5 className="uppercase font-bold text-xl ">{packagename}</h5>
      <br />
      <h1 className="font-bold text-primary-default text-7xl">
        <span className=" text-xl">$</span>
        {price}
        <span className="text-xl">/mo</span>
      </h1>

      <ul className="mt-10 mb-16">
        {features.map((feature, index) => (
          <li className="flex text-sm mb-3 gap-2 items-center" key={index}>
            {feature.available ? (
              <TiTick className="text-lg" />
            ) : (
              <TiTimes className="text-lg" />
            )}

            <p>{feature.name}</p>
          </li>
        ))}
      </ul>
      <Button link="/" text="subscribe" />
    </div>
  );
}

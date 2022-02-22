import React from "react";
import PricingBlockItem from "./PricingBlockItem";
import HeadingWithEffect from "../../General/HeadingWithEffect";

export default function PaymentBlock() {
  const paymentBlockItems = [
    {
      package: "basic",
      price: "11.19",
      features: [
        {
          name: "Awesome Features",
          available: true,
        },
        {
          name: "Responsive pricing tables",
          available: true,
        },
        {
          name: "annula subscription",
          available: false,
        },
        {
          name: "Professional design",
          available: false,
        },
      ],
    },
    {
      package: "basic",
      price: "11.19",
      featured: true,
      features: [
        {
          name: "Awesome Features",
          available: true,
        },
        {
          name: "Responsive pricing tables",
          available: true,
        },
        {
          name: "annula subscription",
          available: true,
        },
        {
          name: "Professional design",
          available: false,
        },
      ],
    },
    {
      package: "basic",
      price: "11.19",
      features: [
        {
          name: "Awesome Features",
          available: true,
        },
        {
          name: "Responsive pricing tables",
          available: true,
        },
        {
          name: "annula subscription",
          available: true,
        },
        {
          name: "Professional design",
          available: true,
        },
      ],
    },
  ];
  return (
    <div className="py-20">
      <div className="mycontainer">
        <HeadingWithEffect centered title="pricing plans" large />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {paymentBlockItems.map((paymentBlockItem, index) => (
            <PricingBlockItem
              key={index}
              featured={paymentBlockItem.featured}
              packagename={paymentBlockItem.package}
              price={paymentBlockItem.price}
              features={paymentBlockItem.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import PortfolioItem from "./PortfolioItem";
import Link from "next/link";

export default function PortfolioBlock({ subtitle, title, portfolioitems }) {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <HeadingWithEffect title={title} centered subtitle={subtitle} />
        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-0 gap-12 ">
          {portfolioitems.map((item, index) => (
            <div key={index} className="">
              <PortfolioItem
                styleTwo
                key={index}
                category={item.category}
                title={item.title}
                img={item.img}
                link={item.link}
              />
            </div>
          ))}
        </div>

        <div className="pt-10">
          <p className=" text-center">
            <Link href="/DeveloperPortfolio/Portfolio">
              <a className="btn">more</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

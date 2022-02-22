import React, { useState } from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import PortfolioItem from "./PortfolioItem";

const items = [
  {
    category: "branding",
    title: "Someone Else",
    img: "https://source.unsplash.com/cauCwvTkHLM",
    link: "/",
  },
  {
    category: "design",
    title: "waste board",
    img: "https://source.unsplash.com/AGZAliGQmP4",
    link: "/",
  },
  {
    category: "development",
    title: "disastrous elated",
    img: "https://source.unsplash.com/Da0pdCekeUs",
    link: "/",
  },
  {
    category: "development",
    title: "library scent",
    img: "https://source.unsplash.com/RDolnHtjVCY",
    link: "/",
  },
  {
    category: "design",
    title: "flight lacking",
    img: "https://source.unsplash.com/HI6gy-p-WBI",
    link: "/",
  },
  {
    category: "design",
    title: "finger licking",
    img: "https://source.unsplash.com/KDdNjUQwzSw",
    link: "/",
  },
];

const IsotopeGrid = () => {
  const [filters, setFilters] = useState("");
  const findDuplicates = (myarray) => {
    let uniqueArray = myarray.filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos;
    });
    return uniqueArray;
  };
  let filteredcategories = findDuplicates(items.map((item) => item.category));
  return (
    <section>
      <div className="mycontainer mx-auto py-20">
        {/* <HeadingWithEffect
          large
          centered
          subtitle="portfolio"
          title="featured portfolio"
        /> */}

        {/* buttons to select filter  */}

        <div className="pb-10 flex flex-wrap gap-8 justify-center">
          <button
            className={`px-3 font-bold py-3 hover:text-primary-default ${
              filters == "" ? " text-primary-default" : ""
            } uppercase`}
            onClick={() => {
              setFilters("");
            }}
          >
            all
          </button>
          {filteredcategories.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setFilters(item);
              }}
              className={`px-3 py-3 font-bold hover:text-primary-default ${
                filters == item ? " text-primary-default" : ""
              } uppercase`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* grid of portfolio items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {filters == "" ? (
            <>
              {items.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setFilters(item.category);
                  }}
                >
                  <PortfolioItem
                    styleTwo
                    category={item.category}
                    title={item.title}
                    img={item.img}
                    link={item.link}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {items.map((item, index) => (
                <>
                  {item.category == filters && (
                    <div
                      key={index}
                      onClick={() => {
                        setFilters(item.category);
                      }}
                    >
                      <PortfolioItem
                        styleTwo
                        category={item.category}
                        title={item.title}
                        img={item.img}
                        link={item.link}
                      />
                    </div>
                  )}
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default IsotopeGrid;

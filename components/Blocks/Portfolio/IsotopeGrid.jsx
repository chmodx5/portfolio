import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioitems from "./../../../portfoliodata";

const IsotopeGrid = () => {
  const [filters, setFilters] = useState("");
  const findDuplicates = (myarray) => {
    let uniqueArray = myarray.filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos;
    });
    return uniqueArray;
  };
  let filteredcategories = findDuplicates(
    portfolioitems.map((item) => item.category)
  );
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
              {portfolioitems.map((item, index) => (
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
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {portfolioitems.map((item, index) => (
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

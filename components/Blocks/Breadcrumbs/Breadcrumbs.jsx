import React from "react";

const Breadcrumbs = ({ title }) => {
  return (
    <section
      style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}
      className=" h-72 bg-darkbackground "
    >
      <div className=" bg-darkbackground/70 h-full flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-white uppercase">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Breadcrumbs;

import React from "react";
import IsotopeGrid from "../components/Blocks/Portfolio/IsotopeGrid";
import Breadcrumbs from "../components/Blocks/Breadcrumbs/Breadcrumbs";

export default function Portfolio() {
  //getting categories from items and filtering them to ensure there are no duplicates

  return (
    <>
      <div>
        <Breadcrumbs title="Portfolio" />
        <IsotopeGrid />
      </div>
    </>
  );
}

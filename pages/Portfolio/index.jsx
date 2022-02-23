import React from "react";
import IsotopeGrid from "../../components/Blocks/Portfolio/IsotopeGrid";
import Breadcrumbs from "../../components/Blocks/Breadcrumbs/Breadcrumbs";

export default function Portfolio() {
  return (
    <>
      <div>
        <Breadcrumbs title="Portfolio" />
        <IsotopeGrid />
      </div>
    </>
  );
}

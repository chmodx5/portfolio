import React from "react";
import AboutBlockOne from "./../components/Blocks/About/AboutBlockOne";
import Breadcrumbs from "./../components/Blocks/Breadcrumbs/Breadcrumbs";
import ServicesBlock from "./../components/Blocks/Services/ServicesBlock";

export default function About() {
  return (
    <div>
      <Breadcrumbs title="about" />
      <AboutBlockOne />
      <ServicesBlock
        title="services"
        services={[
          {
            icon: "FaPencilRuler",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaRegLightbulb",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaOpencart",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaPencilRuler",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaRegLightbulb",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
          {
            icon: "FaOpencart",
            title: "UI/UX design",
            desc: "Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.",
          },
        ]}
      />
    </div>
  );
}

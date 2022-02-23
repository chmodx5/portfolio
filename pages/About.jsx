import React from "react";
import AboutBlockOne from "./../components/Blocks/About/AboutBlockOne";
import Breadcrumbs from "./../components/Blocks/Breadcrumbs/Breadcrumbs";
import Skills from "../components/Blocks/Skills/Skills";

export default function About() {
  return (
    <div>
      <Breadcrumbs title="about" />
      <AboutBlockOne />
      <Skills
        title="services"
        skills={[
          {
            icon: "/html-logo.svg",
            title: "HTML5",
          },
          {
            icon: "/css-logo.svg",
            title: "CSS3",
          },
          {
            icon: "/javascript-logo.svg",
            title: "Javascript",
          },
          {
            icon: "/nodejs-logo.svg",
            title: "Node.js",
          },
          {
            icon: "/sass-logo.svg",
            title: "SASS",
          },
          {
            icon: "/vue-logo.svg",
            title: "Vue.js",
          },
          {
            icon: "/react-logo.svg",
            title: "React.js",
          },
          {
            icon: "/git-logo.svg",
            title: "Git",
          },
          {
            icon: "/wordpress-logo.svg",
            title: "Wordpress",
          },
        ]}
      />
    </div>
  );
}

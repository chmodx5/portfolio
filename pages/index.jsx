import React from "react";
import AboutBlockWithSliders from "../components/Blocks/About/AboutBlockWithSliders";
import ServicesBlock from "../components/Blocks/Services/ServicesBlock";
import PortfolioBlock from "../components/Blocks/Portfolio/PortfolioBlock";
import Hero from "../components/Blocks/Hero/Hero";
// import BlogBlock from "../../components/Blocks/Blog/BlogBlock";
// import PricingBlock from "../../components/Blocks/Pricing/PricingBlock";
// import ImageContainer from "../../components/General/ImageContainer";
// import herobg from "./../../public/hero-bg.svg";

function Home() {
  return (
    <>
      <Hero
        smalltitle="Hello I&lsquo;m"
        title="someone awesome"
        subtitle="a fullstack developer"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellate "
        buttonlink="/DeveloperPortfolio/Portfolio"
        buttontext="discover more"
        bgimage={"./hero-bg.svg"}
        featuredimage={"https://source.unsplash.com/random"}
      />
      <AboutBlockWithSliders
        subtitle="about me"
        title="i am a passionate expert web developer from kenya"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellate Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellateLorem, ipsum dolor sit amet consectetur adipisicing elit. Quod deserunt illo asperiores tempora, dolor repellendus repellate  dolor repellendus repellate  dolor repellendus repellate"
        buttonlink="/0"
        buttontext="donwload cv"
        sliders={[
          {
            title: "UI/UX design",
            progress: "90",
          },
          {
            title: "Branding",
            progress: "90",
          },
          {
            title: "E-commerce",
            progress: "80",
          },
          {
            title: "Web development",
            progress: "98",
          },
        ]}
      />
      <ServicesBlock
        title="skills"
        services={[
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
      <PortfolioBlock
        subtitle="portfolios"
        title="my latest works"
        portfolioitems={[
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
        ]}
      />
    </>
  );
}

export default Home;

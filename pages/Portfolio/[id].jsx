import React from "react";
import Image from "next/image";
import HeadingWithEffect from "../../components/General/HeadingWithEffect";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const PortfolioDetails = () => {
  const router = useRouter();
  const { pid } = router.query;
  const portfolioitems = [
    {
      title: "Someone Else",
      category: "branding",
      img: "https://source.unsplash.com/cauCwvTkHLM",
      techs: ["vuejs", "tailwindcss", "reactjs", "nodejs", "expressjs"],
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligenditemporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus reprehenderit eligendi temporibus asperiores ipsam eius. Quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur autem minus, porro aspernatur molestias, labore incidunt ipsa sed aut nemo distinctio accusamus rehenderit eligendi temporibus asperiores ipsam eius.",
      gitlink: "https://github.com",
      externallink: "https://github.com",
    },
  ];
  const portfolioItem = portfolioitems.filter(
    (item) => item.title.toLowerCase().replace(/\s/g, "-") === router.query.id
  )[0];
  return (
    <section className=" py-20">
      <div className="mycontainer">
        <HeadingWithEffect centered title={portfolioItem.title} />
        <br />
        <div className="flex justify-center">
          <div className="w-full md:w-9/12 ">
            <div className="bg-blue-300 relative aspect-w-16 aspect-h-9 ">
              <Image
                src={portfolioItem.img}
                alt="image"
                className="w-full h-full object-center object-cover "
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 py-10 flex-wrap">
          {portfolioItem.techs.map((item, index) => (
            <div
              key={index}
              className="bg-primary-default/10 inline-block px-4 uppercase text-xs font-bold py-1"
            >
              {item}
            </div>
          ))}
        </div>
        <div>{portfolioItem.desc}</div>
        <div className="flex gap-4 mt-10">
          <a
            href={portfolioItem.gitlink}
            target="_blank"
            rel="noreferrer"
            className="border py-2 hover:bg-darkbackground hover:text-white dark:hover:bg-white dark:hover:text-black border-darkbackground dark:border-white px-4 flex gap-2 uppercase font-bold"
          >
            <span className="flex items-center gap-4">
              <FaGithub />
              view code
            </span>
          </a>
          <a
            href={portfolioItem.externallink}
            target="_blank"
            rel="noreferrer"
            className="border py-2 hover:bg-darkbackground hover:text-white dark:hover:bg-white dark:hover:text-black border-darkbackground dark:border-white px-4 flex gap-2 uppercase font-bold"
          >
            <span className="flex items-center gap-4">
              <FaExternalLinkAlt />
              open
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;

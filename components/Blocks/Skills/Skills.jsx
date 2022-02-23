import React from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import SkillCard from "./SkillCard";

export default function Skills({ title, skills }) {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <HeadingWithEffect centered title={title} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 mt-10 px-6 md:px-0">
          {skills.map((service, index) => (
            <div key={index} className="">
              <SkillCard
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import HeadingWithEffect from "../../General/HeadingWithEffect";
import { FaPencilRuler, FaOpencart, FaRegLightbulb } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

export default function ServicesBlock({ title, services }) {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <HeadingWithEffect large centered title={title} />

        <div className="grid grid-cols-12 gap-6 mt-10 px-6 md:px-0">
          {services.map((service, index) => (
            <div key={index} className="col-span-12 md:col-span-4 ">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            </div>
          ))}
          {/* <div className="col-span-12 md:col-span-4">
            <ServiceCard
              icon={<FaRegLightbulb />}
              title="UI/UX Design"
              desc="Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
            />
          </div>
          <div className="col-span-12 md:col-span-4">
            <ServiceCard
              icon={<FaOpencart />}
              title="UI/UX Design"
              desc="Quisque placerat vitae lacus ut scele risque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas."
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

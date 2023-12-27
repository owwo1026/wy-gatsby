import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="#services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-15 py-10">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="SERVICES / 服務項目" />
            </div>
          </div>
          <div className="flex justify-between lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Commercial Design / 住宅空間"
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Residential Design / 商業空間"
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Office Design / 辦公空間"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;

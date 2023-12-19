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
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES / 服務項目" />
              {/* <h2 className="font-display md:text-display-xl text-display-md pt-5">
                We provide the <span className="italic">best solutions</span>{" "}
                for your dream home
              </h2> */}
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Commercial Design / 住宅空間"
              // description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
              //     nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Residential Design / 商業空間"
              // description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
              //     nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Office Design / 辦公空間"
              // description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
              //     nunc, molestie volutpat ipsum, ultricies."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;

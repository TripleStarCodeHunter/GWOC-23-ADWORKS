import React from "react";
import service1 from "./service1.jpg";
import marketing from "../assets/marketing.svg";

const ServiceCardInvert = () => {
  return (
    <div className="service-card">
      <img className="service-image" src={marketing} alt="" />
      <div className="service-content">
        <h1>Marketing services</h1>
        <p>
          Reality is a new reality. With a well-built digital strategy we
          leverage this stellar tech to propel your brand forward.
        </p>
        <div className="flex">
          <ul>
            <li>Digital marketing campaigns</li>
            <li>Lead nurturing</li>
            <li>Marketing personas</li>
          </ul>
          <ul>
            <li>Content creation</li>
            <li>Branding</li>
            <li>SEO</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardInvert;

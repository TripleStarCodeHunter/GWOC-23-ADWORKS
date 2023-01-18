import React from "react";
import service1 from "./service1.jpg";

const ServiceCardInvert = () => {
  return (
    <div className="service-card">
      <img className="service-image" src={service1} alt="" />
      <div className="service-content">
        <h1>Strategy services</h1>
        <p>
          We fuel the growth of purpose driven brands through strategy
          activation, design empowerment, and market adoption. From cultivating
          new ideas to connecting the dots for customers or users, these are our
          core principles.
        </p>
        <div className="flex">
          <ul>
            <li>Market and competitive research</li>
            <li>CRM & sales funnel strategy</li>
            <li>Brand positioning & messaging</li>
          </ul>
          <ul>
            <li>Automation</li>
            <li>UX consulting</li>
            <li>Marketing strategy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardInvert;

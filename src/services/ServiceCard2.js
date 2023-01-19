import React from "react";
import service1 from "./service1.jpg";
import design from "../assets/design.svg";

const ServiceCard2 = () => {
  return (
    <div className="service-card">
      <div className="service-content">
        <h1>Design services</h1>
        <p>
          We design digital platforms to empower users and your brand's tribe.
          This deep understanding of what motivates them allows us to forge and
          fine-tune the most powerful strategies that generate rapid ROI for
          your business.
        </p>
        <div className="flex">
          <ul>
            <li>User testing & personas</li>
            <li>Wireframing and prototyping</li>
            <li>Website design</li>
          </ul>
          <ul>
            <li>UI/UX Design</li>
            <li>Graphic print design</li>
            <li>Animations</li>
          </ul>
        </div>
      </div>
      <img className="service-image" src={design} alt="" />
    </div>
  );
};

export default ServiceCard2;

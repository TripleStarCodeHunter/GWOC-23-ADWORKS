import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header">
        <div className="container">
          <div className="services-headertext">
            <h3>Our Services</h3>
            <h1>
              From proof of concepts and to complex systems of an
              enterprise-level – we’ve got everything covered.
            </h1>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="container">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </section>
    </div>
  );
};

export default Services;

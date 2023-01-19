import React, { useEffect } from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import Accordion from "./Accordion";
import Testimonial from "./Testimonial";
import ServiceCardInvert from "./ServiceCardInvert";
import ServiceCard2 from "./ServiceCard2";
import Tools from "./Tools";

const Services = () => {
  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header bg-animation">
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
        <ServiceCardInvert />
        <ServiceCard2 />
      </section>

      {/* Tools Section */}
      <Tools />

      {/* Frequently Asked Questions */}
      <section className="faqs">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <Accordion />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <Testimonial />
      </section>
    </div>
  );
};

export default Services;

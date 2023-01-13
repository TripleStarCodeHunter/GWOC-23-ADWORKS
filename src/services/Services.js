import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";
import Gallery from "react-photo-gallery";
import photos from "./photos";

const Services = () => {
  console.log(photos);

  const BasicRows = () => <Gallery photos={photos} />;

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

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <div className="project-main">
            <h1>Our Latest Works</h1>
          </div>
          <BasicRows />
        </div>
      </section>
    </div>
  );
};

export default Services;

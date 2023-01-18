import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  library.add(fab, fas);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> We mainly focus on professional social media management 
          and running digital ads on platforms such as Facebook, Instagram and Google. Everything 
          is done from scratch including content ideation, designing and final reach analysis which 
          is done by our in-house team of experts. We are a fully-functional startup and already have 
          a cliental base in surat.
        </p>
        <div className="icons">
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-square-google-plus" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <FontAwesomeIcon icon="fa-solid fa-location-dot" className="i" />
          <p>
            <span> Street name and number</span> City, Country
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-phone" className="i" />
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon="fa-solid fa-envelope"
            className="i fa-envelope"
          />
          <p>
            <a href="#"> office@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          Ad<span>Works</span>
        </h2>
        <p className="menu">
          <a href="/"> Home</a> |<a href="/about"> About</a> |
          <a href="/services"> Services</a>|<a href="/contact"> Contact</a> |
          <a href="#">
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-up"
              onClick={scrollToTop}
            />
          </a>
        </p>
        <p className="name"> Company Name &copy; 2016</p>
      </div>
    </footer>
  );
};

export default Footer;

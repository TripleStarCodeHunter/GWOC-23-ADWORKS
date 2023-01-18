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
          <span> About the company</span> Ut congue augue non tellus bibendum,
          in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus
          odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer
          tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo.
          Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue.
          Nam ut nibh mollis, tristique ante sed, viverra massa.
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
          Company<span> logo</span>
        </h2>
        <p className="menu">
          <a href="#"> Home</a> |<a href="#"> About</a> |
          <a href="#"> Services</a>|<a href="#"> Contact</a> |
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

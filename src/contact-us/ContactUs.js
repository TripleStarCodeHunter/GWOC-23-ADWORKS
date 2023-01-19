import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  library.add(fab, fas);
  return (
    <div className="containerC">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="formC">
        <div className="contact-info">
          <h3 className="titleC">Let's get in touch</h3>
          <p className="textC">
            Looking for information or want to try one of our paid AdWorks
            plans? Submit your information and an AdWorks representative will
            follow up with you as soon as possible.
          </p>

          <div className="info">
            <div className="information">
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                className="icon"
              />
              <p>Svnit, Surat, Gujarat</p>
            </div>
            <div className="information">
              <FontAwesomeIcon icon="fa-solid fa-phone" className="icon" />
              <p>dhruvilshahaha@gmail.com</p>
            </div>
            <div className="information">
              <FontAwesomeIcon icon="fa-solid fa-envelope" className="icon" />
              <p>(+91) 9723919835</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 className="titleC">Contact us</h3>
            <div className="input-containerC">
              <input
                type="textC"
                name="name"
                className="input"
                placeholder="Username"
              />
            </div>
            <div className="input-containerC">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="input-containerC">
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder="Phone Number"
              />
            </div>
            <div className="input-containerC textarea">
              <textarea
                name="message"
                className="input"
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

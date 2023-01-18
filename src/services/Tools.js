import React from "react";
import "./Tools.css";
import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Tools = () => {
  animate({
    elements: ".service-block",
    duration: 2000,
    delay: (index) => index * 100,
    transform: ["scale(0)", "scale(1)"],
  });
  return (
    <div className="our-service-sass hide-pr show-pr">
      <div className="container">
        <div className="theme-title-one text-center">
          <div className="icon-box hide-pr">
            <img
              src="http://html.creativegigs.net/rogan/rogan-c/html/images/shape/bg-shape1.svg"
              alt=""
              className="bg-shape"
            />
            <img
              src="http://html.creativegigs.net/rogan/rogan-c/html/images/icon/icon23.svg"
              alt=""
              className="icon"
            />
          </div>
          <h2 className="main-title">
            Provide awesome customer service <br /> with our tools.
          </h2>
        </div>{" "}
        {/* /.theme-title-one */}
        <div className="inner-wrapper">
          <div className="row">
            <div
              className="col-lg-4 single-block aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="service-block">
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <div className="hover-content" />
                <i className="flaticon-web user" />
                <h5 className="title">
                  <a href="#">Chat GPT</a>
                </h5>
                <p>
                  With chatGPT, we can easily integrate features such as
                  language understanding, text generation, and converstaion
                  flows in their applications. These can be used to create
                  chatbot functionality, personalized content and much more
                </p>
                <a className="detail-button">
                  <i className="icon-img">
                    <img
                      src="https://cdn-icons-gif.flaticon.com/6172/6172532.gif"
                      width="100%"
                    />
                  </i>
                </a>
              </div>{" "}
              {/* /.service-block */}
            </div>{" "}
            {/* /.single-block */}
            <div
              className="col-lg-4 single-block aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-block">
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <div className="hover-content" />
                <i className="flaticon-value icon-s" />
                <h5 className="title">
                  <a href="#">Midjourney/ Dall-E</a>
                </h5>
                <p>
                  Dall-E assists web designers like us in creating illustrations
                  in seconds.
                </p>
                <a href="#" className="detail-button">
                  <i className="icon-img">
                    <img
                      src="https://cdn-icons-gif.flaticon.com/6172/6172518.gif"
                      width="100%"
                    />
                  </i>
                </a>
              </div>
              {/* /.service-block */}
            </div>
            {/* /.single-block */}
            <div
              className="col-lg-4 single-block aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="service-block">
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <span className="snow-dot" />
                <div className="hover-content" />
                <i className="flaticon-login icon-s" />
                <h5 className="title">
                  <a href="#">Strong Managment &amp; Security.</a>
                </h5>
                <p>
                  Lorem ipsum dolor si amet, an dusino situ sint pertinacia
                  constituto, mir es dignsius quo great.
                </p>
                <a href="#" className="detail-button">
                  <i className="icon-img">
                    <img
                      src="https://cdn-icons-gif.flaticon.com/6172/6172512.gif"
                      width="100%"
                    />
                  </i>
                </a>
              </div>{" "}
              {/* /.service-block */}
            </div>{" "}
            {/* /.single-block */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.inner-wrapper */}
      </div>{" "}
      {/* /.container */}
    </div>
  );
};

export default Tools;

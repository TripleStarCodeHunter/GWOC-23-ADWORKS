import React from "react";
import "./AboutUs.css";
import vision from "./vision.jpg";
import future from "./future.jpg";
import achievement from "./achievement.jpg";

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="inner-container-main">
        <h1 data-text="About Us" className="title about-header">
          About Us
        </h1>
        <p className="about-text">
          We mainly focus on professional social media maagement and running
          digital ads on platforms such as Facebook, Instagram and Google.
          Everything from scratch from content ideation, designing and final
          reach analysis is done by our in-house experts team. We are a
          fully-functional startup and already have a cliental base in surat.
        </p>
        <div className="container-main">
          <div className="about-cards">
            <span></span>
            <div className="imgbx">
              <img src={vision} />
            </div>
            <div className="content-main">
              <h2>VISION</h2>
              <p>
                Adworks aims to help brands establish and enhance their social
                media presence
              </p>
            </div>
          </div>
          <div className="about-cards">
            <span></span>
            <div className="imgbx">
              <img src={achievement} />
            </div>
            <div className="content-main">
              <h2>ACHIEVEMENTS</h2>
              <p>
                Adworks was responsible for the advertising and marketting of
                the herbal company,Saatvikaam, now a top contender in it's field
              </p>
            </div>
          </div>
          <div className="about-cards">
            <span></span>
            <div className="imgbx">
              <img src={future} />
            </div>
            <div className="content-main">
              <h2>FUTURE PLANS</h2>
              <p>
                Adworks has plans to incorporate AI tools like ChatGPT and
                Midjourney in the near future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

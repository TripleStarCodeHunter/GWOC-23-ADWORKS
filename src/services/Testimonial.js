import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const settings = {
  // dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", margin: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>Testimonials</h1>
        <Slider
          {...settings}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
        >
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        We were really impressed by how quick and efficiently our work was
        handled. They were very thorough throughout, making multiple revisions,
        taking into account any inputs we had along the way. Overall a fantastic
        experience.
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "#8447e9" }}>PAULA WILSON</span>,
        Media Analyst
      </p>
    </div>
  );
};

export default Testimonial;

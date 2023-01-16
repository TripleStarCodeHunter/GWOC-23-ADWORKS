import { purple } from "@material-ui/core/colors";
import { useEffect,useState, useRef } from "react";
import Intro from './intro';
  const Landing = () => {
  const images = ["https://cdn.pixabay.com/photo/2019/09/15/12/09/network-4478141__340.jpg", "https://cdn.pixabay.com/photo/2016/07/19/09/03/digital-marketing-1527799__340.png", "https://cdn.pixabay.com/photo/2017/06/12/03/33/seo-2394237__340.jpg"];
  const delay = 3000;

  //text to display on slides
  
  const text=[<div className="slidetext slide1">USING ADVANCED AI <br/> TO CATER ALL YOUR<br/> MARKETING NEEDS</div>,
  <div className="slidetext slide2">FROM START UPS<br/> TO BIG COMPANIES, <br/>WE HAVE GOT EVERYTHING COVERED</div>,
  <div className="slidetext slide3">READY TO TAKE YOUR BUSINESS TO THE NEXT LEVEL?<br/><a href="" style={{color:"white",textDecoration:"none",width:"100px",backgroundColor:"#8447E9",fontSize:"30px",borderRadius:"5px",padding:"10px 20px"}}>Contact Us</a></div>
];

  function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
      
    return () => {
      resetTimeout();
    };
  }, [index]);

  //Styles for the three slides
  const styles=[{color:"white"},
  {color:"black",width:"43%"},
  {color:"black"}];


  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((x, index) => (
          
          <div
            className="slide"
            key={index}
            // style={Object.assign(styles[index],{backgroundImage:`url(${x})`})}
            style={{backgroundImage:`url(${x})`}}
          >
            {text[index]}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
    return (
          <Slideshow/>
    );
}
export default Landing;
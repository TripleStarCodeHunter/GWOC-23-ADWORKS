import { purple } from "@material-ui/core/colors";
import { useEffect,useState, useRef } from "react";
import Intro from './intro';
const Landing = () => {

  //Images for each slide
  const images = ["https://knowledge.wharton.upenn.edu/wp-content/uploads/2020/05/Women-in-data-science.jpg",
  "https://sloanreview.mit.edu/wp-content/uploads/2019/03/GEN-Keller-Modern-Marketing-1200x627-1200x627.jpg",
  "    https://imageio.forbes.com/specials-images/imageserve/980428134/0x0.jpg?format=jpg&width=1200"];

  /*
    Extra images links :
    https://cdn.pixabay.com/photo/2022/05/18/07/07/laptop-7204537__340.jpg
    https://imageio.forbes.com/specials-images/imageserve/980428134/0x0.jpg?format=jpg&width=1200
  */ 
  const delay = 3000;

  //text divs to display on slides
  
  const text=[<div className="slidetext slide1">USING<br/> ADVANCED AI <br/> TO CATER<br/> ALL YOUR<br/> MARKETING NEEDS</div>,
  <div className="slidetext slide2">FROM START UPS<br/> TO LARGE COMPANIES, <br/>WE'VE GOT EVERYTHING COVERED</div>,
  <div className="slidetext slide3">READY TO TAKE <br/>YOUR BUSINESS <br/>TO THE NEXT<br/> LEVEL?<br/><br/>
  <a href="" style={{color:"white",textDecoration:"none",width:"6.51vw",backgroundColor:"#8447E9",fontSize:"1.953vw",borderRadius:"5px",padding:"0.651vw 1.302vw"}}>Contact Us</a></div>
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
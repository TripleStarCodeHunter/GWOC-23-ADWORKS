import { useEffect,useState, useRef } from "react";

    const Landing = () => {
    const images = ["https://cdn.pixabay.com/photo/2019/09/15/12/09/network-4478141__340.jpg", "https://cdn.pixabay.com/photo/2016/07/19/09/03/digital-marketing-1527799__340.png", "https://cdn.pixabay.com/photo/2017/06/12/03/33/seo-2394237__340.jpg"];
    const delay = 3000;
    const text=["USING ADVANCED AI TO CATER ALL YOUR MARKETING NEEDS",
    "Hello World",
    "READY TO TAKE YOUR BUSINESS TO THE NEXT LEVEL?"];

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
  {color:"pink"},
  {color:"green"}];


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
            <div class="slidetext" style={styles[index]}>{text[index]}<br/>
            {index==2 && <a href="" style={{color:"black",textDecoration:"none",width:"100px",backgroundColor:"pink",fontSize:"30px",borderRadius:"5px",padding:"10px 20px"}}>Contact Us</a>}
            </div>
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
        <div class="homecont">
          <Slideshow/>
            <div className="intro">
              <br/>
              <div style={{marginTop:"2vw",marginLeft:"45.3vw",fontSize:"20px"}}>WELCOME TO </div>
              <div style={{marginLeft:"36.5vw",fontSize:"80px"}}>ADWORKS</div>
              <div style={{marginLeft:"40.35vw",fontSize:"40px"}}>AD THAT WORKS</div>
              <div className="brief"><br/>
              <div style={{marginTop:"5vw",fontSize:"20px"}}>WHY ADWORKS?</div>
              <div></div>
            </div>
          </div>
                  
        </div>
    );
}
export default Landing;
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
  {color:"black"},
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
            <div class="slidetext" style={styles[index]}>{text[index]}<br/>
            {index==2 && <a href="" style={{color:"white",textDecoration:"none",width:"100px",backgroundColor:"#8447E9",fontSize:"30px",borderRadius:"5px",padding:"10px 20px"}}>Contact Us</a>}
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
              <img src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg"/>

              <div className="brief"><br/>
                <div style={{marginTop:"5vw",fontSize:"20px",color:"#8447E9"}}><strong>WHY ADWORKS?</strong></div>
                  <div style={{fontSize:"30px",marginTop:"2.5vw"}}>Adworks is your One Stop Solution for all your advertisement needs. 
                  Through the use of AI, and our expert team of designers and marketers, we make sure your brand has a strong and positive social media presence
                  </div>
              </div>
              <div className="brief">
                <div style={{marginTop:"5vw",fontSize:"20px",color:"#8447E9"}}><strong>OUR SERVICES</strong></div>
                <div className="servicesintro">
                  We mainly focus on professional social media management and running digital ads on platforms such as Facebook, Instagram And Google. Everything from scratch from content ideation , designing and final reach analysis is done By our in-house team of experts. 
                  <br/><br/>
                  <strong>We specialize in : </strong><br/>
                  <div style={{marginLeft:"2.5vw",marginTop:"2vw"}}>
                    <ul>
                      <li><span style={{color:"#8447E9"}}>Content Design : </span> We think about the design behind the content with a focus on how to serve the audience the information they need, when they need it.</li>
                      <br/><li><span style={{color:"#8447E9"}}>Copy Writing : </span></li>
                      <br/><li><span style={{color:"#8447E9"}}>Engagement : </span></li>
                      <br/><li><span style={{color:"#8447E9"}}>Hashtag Research : </span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Landing;
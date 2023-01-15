import { useEffect,useState, useRef } from "react";

    const Landing = () => {
    const images = ["https://cdn.pixabay.com/photo/2019/09/15/12/09/network-4478141__340.jpg", "https://cdn.pixabay.com/photo/2016/07/19/09/03/digital-marketing-1527799__340.png", "https://cdn.pixabay.com/photo/2017/06/12/03/33/seo-2394237__340.jpg"];
    const delay = 2500;
    const text=["USING ADVANCED AI TO CATER ALL YOUR MARKETING NEEDS",
    "Hello World",
    "READY TO TAKE YOUR BUSINESS TO THE NEXT LEVEL? CONTACT US"];
       
const renderList = text.map((item, index) => 
<div key={index}>{item}</div>
);

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
            style={{ backgroundImage:`url(${x})` }}
          >
            <div class="slidetext">{text[index]}</div>
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
        <div>
                  <Slideshow/>
        </div>
    );
}
export default Landing;
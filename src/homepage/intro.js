import engage from '../assets/ad-engage.png';
import tech from '../assets/services-tech.png';
import whyadworks from '../assets/whyadworks.jpg';
import contentdesign from '../assets/content-design.png';
import copywriting from '../assets/copy-writing.png';
import hashtag from '../assets/hashtag-research.png';

const Intro = ()=>{
    return (
        <div className="intro" style={{backgroundColor:"white"}}>
              <br/>
              <div style={{textAlign:"center"}}>
                <div className="welcometo" style={{marginTop:"2vw",fontSize:"1.302vw"}}>WELCOME TO </div>
                <div className="adworks" style={{fontSize:"5.208vw"}}><strong style={{color:"#42e386"}}>AD</strong><span><ins style={{textDecorationColor:"#42e386"}}>Works</ins></span></div>
                <div className="slogan" style={{fontSize:"2.604vw"}}>AD THAT WORKS</div>
              </div>
              <img src={whyadworks}/>

              <div className="brief brief2"><br/>
                <div className="homeheadings" style={{marginTop:"5vw",fontSize:"1.302vw",color:"#8447E9"}}><strong>WHY ADWORKS?</strong></div>
                  <div className="whytext" >Adworks is your One Stop Solution for all your advertisement needs. 
                  Through the use of AI, our expert team of designers and marketers make sure that your brand has a strong and positive social media presence
                  </div>
              </div>
              <img className='imgformobile' src={whyadworks}/>
              <div className="brief ">
                <div className="homeheadings" style={{marginTop:"5vw",fontSize:"1.302vw",color:"#8447E9"}}><strong>OUR SERVICES</strong></div>
                <div className="servicesintro">
                  We mainly focus on professional social media management and running digital ads on platforms such as Facebook, Instagram And Google. Everything from scratch from content ideation , designing and final reach analysis is done by our in-house team of experts.                
                   &nbsp;&nbsp;<strong><a className="learnmore" href="" style={{textDecoration:"none",fontSize:"1.302vw",marginTop:"2vw"}}>Learn More</a></strong>

                  <br/><br/>
                  We specialize in : <br/><br/>
                  
                  <div style={{marginLeft:"2.5vw",marginTop:"2vw"}}>
                      <div className="services-flex-1" style={{marginBottom:"1vw"}}>
                        <div className="services-flex-item">
                          <img className='services-card-image' src={contentdesign}  />
                          <div class="services-card-title">Content Design </div>We use AI to generate attractive text, post info and website content 
                        </div>
                        <div className="services-flex-item">
                        <img className='services-card-image' style={{width:"70%"}} src={copywriting}  />
                        <div class="services-card-title">Copy Writing </div>We provide the most suitable text and slogans for your advertisement
                        </div>
                        <div className="services-flex-item">
                        <img className='services-card-image' src={engage} />
                        <div className="services-card-title">Engagement</div>
                        We create attractive ads to engage a larger audience for your business
                        </div>
                      </div>
                      <div className="services-flex-1">
                        <div className="services-flex-item">
                          <img className='services-card-image' src={hashtag}  />
                          <div className="services-card-title">Hashtag Research</div>
                          We provide the hashtags most suitable for your business after a detailed research 
                        </div>
                        <div className="services-flex-item">
                          <img className='services-card-image' src={tech}  />
                          <div class="services-card-title">Artificial Intelligence </div>We are proficient in the latest AI technologies such as DALL E and Midjourney 
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
    );
}
export default Intro;
import engage from '../assets/ad-engage.png';
import tech from '../assets/services-tech.png';
const Intro = ()=>{
    return (
        <div className="intro">
              <br/>
              <div style={{marginTop:"2vw",marginLeft:"45.3vw",fontSize:"1.302vw"}}>WELCOME TO </div>
              <div style={{marginLeft:"36.5vw",fontSize:"5.208vw"}}>ADWORKS</div>
              <div style={{marginLeft:"40.35vw",fontSize:"2.604vw"}}>AD THAT WORKS</div>
              <img src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_960_720.jpg"/>

              <div className="brief"><br/>
                <div style={{marginTop:"5vw",fontSize:"1.302vw",color:"#8447E9"}}><strong>WHY ADWORKS?</strong></div>
                  <div style={{fontSize:"1.758vw",marginTop:"2.5vw"}}>Adworks is your One Stop Solution for all your advertisement needs. 
                  Through the use of AI, our expert team of designers and marketers make sure that your brand has a strong and positive social media presence
                  </div>
              </div>
              <div className="brief">
                <div style={{marginTop:"5vw",fontSize:"1.302vw",color:"#8447E9"}}><strong>OUR SERVICES</strong></div>
                <div className="servicesintro">
                  We mainly focus on professional social media management and running digital ads on platforms such as Facebook, Instagram And Google. Everything from scratch from content ideation , designing and final reach analysis is done by our in-house team of experts.                
                   &nbsp;&nbsp;<strong><a href="" style={{textDecoration:"none",fontSize:"1.302vw",marginTop:"2vw"}}>Learn More</a></strong>

                  <br/><br/>
                  We specialize in : <br/><br/>
                  
                  <div style={{marginLeft:"2.5vw",marginTop:"2vw"}}>
                      <div className="services-flex-1" style={{marginBottom:"1vw"}}>
                        <div className="services-flex-item">
                          <img className='services-card-image' src="https://www.pngmart.com/files/7/Web-Design-Transparent-Images-PNG.png"  />
                          <div class="services-card-title">Content Design </div>We use AI to generate attractive text, post info and website content 
                        </div>
                        <div className="services-flex-item">
                        <img className='services-card-image' style={{width:"70%"}} src="https://cdn-icons-png.flaticon.com/512/2867/2867276.png"  />
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
                        <img className='services-card-image' src="https://cdn.brandmentions.com/blog/wp-content/uploads/2020/12/hashtag-monitoring-BrandMentions.png"  />
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
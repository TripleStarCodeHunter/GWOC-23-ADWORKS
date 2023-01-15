import post1 from '../assets/post8.png';
import post2 from '../assets/Post7.png';
import post3 from '../assets/Post9.png';
import post4 from '../assets/Post10.png';

const Project = () => {
    return (
        <div >
            <div class="contpro">
                <div class="left">
                    <h4 style={{fontSize:'32px'}}>Our Ads</h4><br/>
                We guide game-changing companies, across platforms & places, 
                through agile design & digital experience. We make waves<br/>
                <a href="" class="link">Explore All Ads</a>
                </div>
                <div class="right">
                    <div ><img class="box" src={post1} alt=""/></div>
                    <div ><img class="box" src={post2} alt=""/></div>
                    <div ><img class="box" src={post3} alt=""/></div>
                    <div ><img class="box" src={post4} alt=""/></div>
                </div>
            </div>
            <div className="end">
                <div style={{fontSize:"62px"}}>Ready For Your Project</div>
                <a href="">Get in Touch</a>
            </div>
        </div>
    );
}
export default Project;
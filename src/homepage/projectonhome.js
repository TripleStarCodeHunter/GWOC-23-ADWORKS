import {useState} from 'react';
import post1 from '../assets/post8.png';
import post2 from '../assets/Post7.png';
import post3 from '../assets/Post9.png';

const Project = () => {
    const [project,setProject]=useState(post1);
    const [back1,setBack1] = useState('white');
    const [back2,setBack2] = useState('transparent');
    const [back3,setBack3] = useState('transparent');

    const adClick1 = ()=>{
        setProject(post1);
        setBack1('white');
        setBack2('transparent');
        setBack3('transparent');
    }
    const adClick2 = ()=>{
        setProject(post2);
        setBack2('white');
        setBack1('transparent');
        setBack3('transparent');
    }
    const adClick3 = () =>{
        setProject(post3);
        setBack3('white');
        setBack2('transparent');
        setBack1('trans');
    }

    return (
        <div style={{ backgroundImage: `url(${project})`,backgroundRepeat:'no-repeat',backgroundSize:'100% 100%'}} class="projectscreen">
            <div className="adcont">
                <div onMouseEnter={adClick1} class="ad ad1" style={{backgroundColor:back1}}>

                </div>
                <div onMouseEnter={adClick2} className="ad ad2" style={{backgroundColor:back2}}>

                </div>
                <div onMouseEnter={adClick3} className="ad ad3" style={{backgroundColor:back3}}>

                </div>
            </div>
        </div>
    );
}
export default Project;
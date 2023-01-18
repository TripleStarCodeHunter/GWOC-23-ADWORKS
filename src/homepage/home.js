import Landing from './landingscreen';
import Project from './projectonhome';
import Intro from './intro';
import './home.css';
import './homepage_mobile.css';
const Home = () => {
    return (
        <div>
            <Landing/>
            <Intro/>
            <Project/>
        </div>
);
}
export default Home;
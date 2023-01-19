import Landing from "./landingscreen";
import Project from "./projectonhome";
import Intro from "./intro";
import "./home.css";
import "./homepage_mobile.css";
import Register from "./Register";
const Home = () => {
  return (
    <div>
      <Landing />
      <Intro />
      <Project />
      <Register />
    </div>
  );
};
export default Home;

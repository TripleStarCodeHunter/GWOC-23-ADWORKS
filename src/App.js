import logo from "./logo.svg";
import "./App.css";
import Home from "./homepage/home";
import Navbar from "./navbar";
import Services from "./services/Services";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Services />
      <Footer />
    </div>
  );
}

export default App;

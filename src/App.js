import logo from "./logo.svg";
import "./App.css";
import Home from "./homepage/home";
import Navbar from "./navbar";
import Services from "./services/Services";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Services /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

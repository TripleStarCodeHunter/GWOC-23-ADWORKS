import logo from "./assets/favicon.png";
import "./App.css";
import Home from "./homepage/home";
import Services from "./services/Services";
import ContactIs from "./contact-us/contact-us";
import AboutUs from "./about-us/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import {useEffect} from 'react';
import './navbar.css'

function App() {
  useEffect(() => {
    document.title = "ADWorks - Ad That Works"
 }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactIs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

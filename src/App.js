import logo from './logo.svg';
import './App.css';
import Home from './homepage/home';
import Navbar from './navbar';
import Services from "./services/Services";
function App() {
  return (
    <div>
       <Navbar/>
      <Home/> 
      {/* <Services /> */}
    </div>
  );
}

export default App;

import Mainpage from "./components/Main/Mainpage";
import Navbar from "./components/navbar/Navbar";
import './App.css'
import aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  useEffect(() => {
    aos.init({
      duration: 2500,
      once: true
    }); // Initialize aos with optional settings
  }, []);

  return (
    <>
      <Navbar />
      <Mainpage />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/> 
      <Footer/> 
    </>
  );
}

export default App;

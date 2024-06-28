import "./App.css";
import About from "./Components/About";
import CardItems from "./Components/CardItems";
import Contact from "./Components/Contact";
import Footers from "./Components/Footers";
import Header from "./Components/Header";
import Mainbody from "./Components/Mainbody";
import Review from "./Components/Review";


function App() {
  return (
    <>
      <Header />
      <Mainbody />
      <About/>
      <CardItems/>
      <Review/>
      <Contact/>
      <Footers/>
      
    </>
  );
}

export default App;

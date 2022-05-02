import React from 'react'
import Aboutme from './Components/Aboutme';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Skills from './Components/Skills';
import Service from './Components/Service';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import "./App.css"

function App() {
  return (
    <>
    <div className="main__container">
      <Navbar/>
      <Homepage/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      {/* <Contact/>
      <Footer/> */}
    </div>
    </>
  );
}

export default App;

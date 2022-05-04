import React from 'react'
import Aboutme from './Components/Aboutme';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const MainScreen = () => {
    return (
        <>
            <div className="main__container">
                <Navbar />
                <Homepage />
            </div>
        </>
    )
}

export default MainScreen
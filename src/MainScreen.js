import React from 'react'
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';

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
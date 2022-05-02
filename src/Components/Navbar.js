import React, { useState, useRef } from 'react'
import "./Navbar.css"
import "./Main.css"
import { Uil0Plus } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilScenery } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

const Navbar = () => {
    const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)
    const [toogle, settoogle] = useState(false);
    return (
        <>
            <div className="nav__cont" ref={myRef}>
                <div className="flex">
                    <div className="nav__logo">
                        <p className="nav__logo__text">Sumeet</p>
                    </div>
                    <div className="nav__menu">
                        <UilApps onClick={() => { settoogle(true) }} className="nav__toogle__btn" />
                    </div>
                </div>

            </div>
            <div className={toogle ? 'nav__item__menu visible' : 'nav__items disable'}>
                <div className="nav__items">
                    <div className="item" onClick={() => {
                        window.scroll({
                            top: 0,
                            behavior: 'smooth'
                          })
                    }}>
                        <UilEstate className="nav__items_img" onClick={() => { settoogle(false) }}/>
                        <p className="nav_items_name">Home</p>
                    </div>

                    <div className="item" onClick={() => {
                        window.scroll({
                            top: 650,
                            behavior: 'smooth'
                          })
                    }}>
                        <UilUser className="nav__items_img" onClick={() => { settoogle(false) }}/>
                        <p className="nav_items_name">About</p>
                    </div>

                    <div className="item" onClick={() => {
                        window.scroll({
                            top: 1300,
                            behavior: 'smooth'
                          })
                    }}>
                        <UilFileAlt className="nav__items_img" onClick={() => { settoogle(false) }}/>
                        <p className="nav_items_name">Skills</p>
                    </div>

                    <div className="item" onClick={() => {
                        window.scroll({
                            top: 1970,
                            behavior: 'smooth'
                          })
                    }}>
                        <UilBriefcaseAlt className="nav__items_img" onClick={() => { settoogle(false) }}/>
                        <p className="nav_items_name">Service</p>
                    </div>

                    <div className="item">
                        <UilScenery className="nav__items_img" onClick={() => { settoogle(false) }}/>
                        <p className="nav_items_name">Projects</p>
                    </div>

                    <div className="item">
                        <UilMessage onClick={() => { settoogle(false) }} className="nav__items_img"/>
                        <p className="nav_items_name">Contactme</p>
                    </div>
                </div>
                <div className="close__bar">
                    <UilTimes className="close" onClick={() => { settoogle(false) }} />
                </div>
            </div>
        </>
    )
}

export default Navbar

import React from 'react'
import "./Homepage.css"
import { UilTwitterAlt } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilMouseAlt } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'
import Aboutme from './Aboutme'

import profile from "../Assets/profile-pic.png";

const Homepage = () => {
    return (
        <>
            <section>
                <div className='homepage__cont'>
                    <div className="home__first__cont">
                        <div className="dummy_box">
                            <div className="social__box">
                                <a href="https://github.com/Sumeet16"><UilGithubAlt className="home__social__logo" /></a>
                                <a href="https://www.instagram.com/sumeet_yadav16/"><UilInstagram className="home__social__logo" /></a>
                                <a href="https://twitter.com/Sumeet_16"><UilTwitterAlt className="home__social__logo" /></a>
                            </div>

                            <div className="home__data">
                                <h1 className="title">Hi👋, I'm Sumeet</h1>
                                <h3 className="home__subtitle">Full Stack Developer</h3>
                                <p className="home__disc">High level experience in web design and development knowledge, producing quality work.</p>
                            </div>

                            <div className="profile__pic">
                                <img src={profile} alt="profile_pic" />
                            </div>
                        </div>


                        <div className="contact__btn">
                            <p className="text">Contact Me</p>
                            <UilMessage className="message__arrow" />
                        </div>


                        <div className="scroll__down">
                            <UilMouseAlt className="mouse_alt" />
                            <p className="scroll__down__btn">Scroll Down</p>
                            <UilArrowDown className="arrow_down" />
                        </div>
                    </div>

                    <div className="aboutme">
                        <Aboutme />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Homepage

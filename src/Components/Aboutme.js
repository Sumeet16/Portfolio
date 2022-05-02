import React from 'react'
import "./Aboutme.css";
import { UilDownloadAlt } from '@iconscout/react-unicons';

const Aboutme = () => {
    return (
        <section className='aboutme'>
            <div className="about__heading__section">
                <h1 className="about__heading">About Me</h1>
                <p className="about__subheading">My introduction</p>
            </div>

            <div className="about__discription">
                <p className="about__disc">Web developer, with extensive<br />knowledge and years of
                    experience<br />working in web production and UI / UX<br />design, delivering quality work.</p>
            </div>

            <div className="experience__box">
                <div className="exp__box">
                    <h1 className="exp__heading">02+</h1>
                    <p className="exp__disc">Years<br />experience</p>
                </div>
                <div className="exp__box">
                    <h1 className="exp__heading">23+</h1>
                    <p className="exp__disc">Completed<br />projects</p>
                </div>
                <div className="exp__box">
                    <h1 className="exp__heading">03</h1>
                    <p className="exp__disc">Freelance work<br />completed</p>
                </div>
            </div>

            <a href="http://www.google.com" target="_blank">
                <div className="about__contact__btn">
                    <p className="contact__btn__txt">Download CV</p>
                    <UilDownloadAlt />
                </div>
            </a>
        </section>
    )
}

export default Aboutme

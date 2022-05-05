import React from 'react'
import "./Service.css"
import ServiceCard from './Service_Card'
import content from './Content';
import Projects from './Projects';


const Service = () => {
    return (
        <>
            <section>
                <div className="service__page">
                    <div className="service__heading__section">
                        <h1 className="service__main__heading">Services</h1>
                        <p className="service__sub__heading">What I offer</p>
                    </div>
                    <div className="service__list__box__container">
                        {
                            content.map((elem, index) => {
                                return (
                                    <ServiceCard heading={elem.heading} icons={elem.icon} disc={elem.content} />
                                )
                            })
                        }
                    </div>

                    <div className="projects">
                        <Projects />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service

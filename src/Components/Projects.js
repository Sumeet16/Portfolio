import React from 'react'
import "./Project.css";
import projectData from './Project-data';
import ProjectCard from "./Project_Card";
import { Link } from 'react-router-dom'
import Contact from './Contact';


const Projects = () => {
    return (
        <>
            <section>
                <div className="project__container">
                    <div className="project__heading__section">
                        <h1 className="project__main__heading">Projects</h1>
                        <p className="project__sub__heading">What I recently made</p>
                    </div>

                    {
                        projectData.map((elem, index) => {
                            return (
                                index < 3 && <ProjectCard heading={elem.heading} desc={elem.desc} image={elem.image} git={elem.git} website={elem.website} />
                            )
                        })
                    }

                    <Link to="/view">
                        <p className="view_more_btn project__btn">View More</p>
                    </Link>

                    <div className="contactme">
                        <Contact/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects

import React from 'react'
import "./Project.css";

const Projects = () => {
    return (
        <div className="project__container">
            <div className="project__heading__section">
                <h1 className="project__main__heading">Projects</h1>
                <p className="project__sub__heading">What i offer</p>
            </div>

            <div className="project__card">
                <div className="img__container"></div>
                <h1 className="project__heading">Demo</h1>
                <p className="project__disc">Lorem ipsum dolor sit amet consectetur, adipisicing el
                sitatibus iusto aliquid exercitationem tempore.</p>
                <div className="btn__cont">
                    <a href="" className="project__btn">View Repo</a>
                    <a href="" className="project__btn">Test It</a>
                </div>
            </div>
        </div>
    )
}

export default Projects

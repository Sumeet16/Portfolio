import React from 'react'

const Project_Card = (props) => {
    return (
        <div className="project__card__view">
            <div className="img__container"><img src={props.image} alt={props.heading} /></div>
            <h1 className="project__heading">{props.heading}</h1>
            <p className="project__disc">{props.desc}</p>
            <div className="btn__cont">
                <a href={props.git} target="_blank" rel='noreferrer' className="project__btn">View Repo</a>
                <a href={props.website} target="_blank" rel='noreferrer' className="project__btn">Test It</a>
            </div>
        </div>
    )
}

export default Project_Card
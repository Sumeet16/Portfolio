import React from 'react'
import staticTube from '../Assets/static-tube.png'
import krypt from '../Assets/krypt.png'
import shadows from '../Assets/shadow.png'
import chatty from '../Assets/chatty.png'
import devto from '../Assets/devto.png'
import firechat from '../Assets/firechat.png'

const Project_Card = (props) => {
    return (
        <div className="project__card__view">
            <div className="img__container"><img src={props.image} /></div>
            <h1 className="project__heading">{props.heading}</h1>
            <p className="project__disc">{props.desc}</p>
            <div className="btn__cont">
                <a href={props.git} target="_blank" className="project__btn">View Repo</a>
                <a href={props.website} target="_blank" className="project__btn">Test It</a>
            </div>
        </div>
    )
}

export default Project_Card
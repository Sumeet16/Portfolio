import React from 'react'
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilServerNetworkAlt } from '@iconscout/react-unicons'
import { UilIcons } from '@iconscout/react-unicons'
import { UilAngleUp } from '@iconscout/react-unicons'
import "./Skills.css"
import Service from './Service'
import Dropdown from './Dropdown'

const Skills = () => {
    return (
        <>
            <section className="skills__section">
                <div className="skills__heading__box">
                    <h1 className="skill__main__heading">Skills</h1>
                    <p className="skill__sub__heading">My Technical Knowledge</p>
                </div>

                <Dropdown status={true} heading={"Frontend Development"} subHeading={"More than 2 years"} class={"first"} number={0} secNumber={6} icons={"UilBracketsCurly"}/>
                <Dropdown status={false} heading={"Backend Development"} subHeading={"More than 1.5 years"} class={"second"} number={7} secNumber={11} icons={"UilServerNetworkAlt"}/>
                <Dropdown status={false} heading={"Designing"} subHeading={"More than 2.5 years"} class={"third"} number={12} secNumber={14} icons={"UilIcons"}/>


                <section className="service">
                    <Service />
                </section>
            </section>

        </>
    )
}

export default Skills

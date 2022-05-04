import React, { useState } from 'react'
import "./Service_Card.css";
import { UilArrowRight } from '@iconscout/react-unicons'
import { UilArrow } from '@iconscout/react-unicons'
import { UilCodeBranch } from '@iconscout/react-unicons'
import { UilIcons } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { UilCube } from '@iconscout/react-unicons'

const Service_Card = (props) => {
    const [click, setclick] = useState(false);

    return (
        <>
            <div className='main__box__outer'>
                <div className="Service__Card__Container">
                    <div className="inner__box">
                        <div className="Card__Icon">{props.icons === "UilIcons" ? <UilIcons /> : (props.icons === "UilArrow") ? <UilArrow /> : (props.icons === "UilCodeBranch") ? <UilCodeBranch /> : <UilCube />}</div>
                        <div className="Card__Label"><h1>{props.heading}</h1></div>
                        <div className="Card__View__More__Btn" onClick={() => { setclick(!click) }}>
                            <p className="btn__text">View More</p>
                            <UilArrowRight className="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={click ? "demo__box visible_box" : "demo__box disable"}>
                <div className="main__box">
                    <div className="first__row">
                        <p className='box__heading'>{props.heading}</p>
                        <UilTimes className="cross" onClick={() => { setclick(!click) }} />
                    </div>
                    <div className="second__row">
                        {props.disc.map(pass => {
                            return (
                                <p className="sub__disc"><UilCheckCircle className="space" /> {pass}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service_Card


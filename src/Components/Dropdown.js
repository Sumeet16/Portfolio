import React, { useState } from 'react'
import { UilAngleUp } from '@iconscout/react-unicons'
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilServerNetworkAlt } from '@iconscout/react-unicons'
import { UilIcons } from '@iconscout/react-unicons'
import Dropdownitems from './Dropdown_items'


const Dropdown = (props) => {
    const [toggle, settoggle] = useState(props.status);
    return (
        <>
            <div className="frontend__skill__box" onClick={() => settoggle(!toggle)}>
                <div className="upper__box" >
                {props.icons === "UilIcons" ? <UilIcons className="voilet"/> : (props.icons === "UilBracketsCurly") ? <UilBracketsCurly className="voilet"/> : <UilServerNetworkAlt className="voilet"/>}
                    <div className={`fi__box ${props.class}`}>
                        <p className="fi__heading">{props.heading}</p>
                        <p className="fi__sub__heading">{props.subHeading}</p>
                    </div>
                    <UilAngleUp className={toggle ? "voilet down" : "voilet up"} />
                </div>
                <div className={toggle ? "lower__box visible__skill" : "lower__box disable"}>
                    <Dropdownitems number={props.number} secNumber={props.secNumber}/>
                </div>
            </div>
            
        </>


    )
}

export default Dropdown

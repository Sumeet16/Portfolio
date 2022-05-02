import React from 'react'
import "./Dropdown_items.css"
import Data from './Data.json'

const Dropdown_items = (props) => {
    return (
        <div className="dropdown_items">

            {Data.map(post => {
                if (post.id <= props.secNumber & post.id >= props.number) {
                    return (
                        <div className="first_item">
                            <div className="first_row">
                                <p className="name">{post.language}</p>
                                <p className="per">{post.per}%</p>
                            </div>
                            <div className="second_row">
                                <div className="bar_1">
                                    <div className="bar_2" style={{width:`${post.per}%`}}></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}

        </div>
    )
}

export default Dropdown_items

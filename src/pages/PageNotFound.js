import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"


const PageNotFound = () => {
    return (
        <>
            <div className="pageNotFoundCont">
                <h1 className='imageHeading'>Oops!</h1>
                <h1 className='Error'>404 - Page Not Found</h1>
                <p className='ErrorMessage'>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <Link to="/">
                    <p className="homepage_back_btn project__btn">GO TO HOMEPAGE</p>
                </Link>
            </div>
        </>
    )
}

export default PageNotFound
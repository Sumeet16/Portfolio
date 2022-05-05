import React from 'react'
import "./ViewMore.css"
import ProjectCard from '../Components/Project_Card'
import projectData from '../Components/Project-data'
import { UilAngleLeftB } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

const ViewMore = () => {
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
      }, []);
    return (
        <>
            <div className="view__project__container">
                <div className="view__project__heading__section"> 
                <Link to="/">
                <UilAngleLeftB className="back__btn"/>
                </Link>
                <div className='viewmore__heading'>
                    <h1 className="project__main__heading">Projects</h1>
                    <p className="project__sub__heading">What I offer</p>
                </div>
                </div>
                {
                    projectData.map((elem, index) => {
                        return (
                            <ProjectCard heading={elem.heading} desc={elem.desc} image={elem.image} git={elem.git} website={elem.website} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ViewMore
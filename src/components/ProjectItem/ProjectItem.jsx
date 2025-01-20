import React from 'react'
import pro_image from '../../assets/home-banner.png';
import './ProjectItem.css';
import { Link } from 'react-router-dom';

const ProjectItem = ({ id, headName, desc }) => {
    return (
        <div key={id} className="project col-lg-5 d-flex p-3 p-lg-4 flex-column align-items-lg-end bg-white">
            <div className='d-flex flex-column flex-lg-row align-items-center'>
                <img src={pro_image} alt="" width={100} height={100} />
                <div className="content offset-1 mt-3 mt-lg-0">
                    <h3 className='font-weight-bold text-primary'>{headName}</h3>
                    <p>{desc}</p>
                </div>
            </div>
            {/* <hr className='bg-primary mx-auto mb-2 mt-0' style={{ height: "2px"}} /> */}
            <Link to="/contact">
                <button className='mx-auto d-block d-lg-inline mx-lg-0' onClick={() => {window.scrollTo(0, 0)}} >Request for Demo</button>
            </Link>
        </div>
    )
}

export default ProjectItem
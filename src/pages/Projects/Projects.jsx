import React from 'react'
import PageBanner from '../../components/PageBanner/PageBanner';
import homeBannerImg from '../../assets/home-banner.png';
import ProjectItem from '../../components/ProjectItem/ProjectItem';


const Projects = () => {
    const projects_data = [
        {
            id: 1,
            projectName: "AcquScribe",
            desc: "AquaScribe is a smart water management system that leverages IoT sensors, ML Algorithms and automation to optimize irrigation system"
        },
        {
            id: 2,
            projectName: "Gym Branch",
            desc: "Gym Branch is computer vision based software system for tracking correctness of workout movements."
        },
        {
            id: 3,
            projectName: "Smart Energy Meter",
            desc: "The IoT based smart energy meter project aims to address the growing demand for real-time monitoring and management solutions."
        },
        {
            id: 4,
            projectName: "Noise Reduction Project",
            desc: "The Noise Reduction system is the project simulated using Kalman filter in MATLAB."
        },
        {
            id: 5,
            projectName: "Waste Segregation system",
            desc: "Project Aims to Segreate waste based on their material properties which promotes waste management"
        },
        {
            id: 6,
            projectName: "Plant Growth Enhancement",
            desc: "This projectes showcase how copper coils will increase plant production or yeild of crops"
        },
        {
            id: 7,
            projectName: "Street Light Control System",
            desc: "This project focuses on energy wasteage of public area and promotes human safety"
        },
    ];
    return (
        <div className='projects-page'>
            <PageBanner bannerIMG={homeBannerImg} salutation={"Our"} bannerName={"Projects"} desc={"Explore the innovative endeavors undertaken by our fellow members at the Innovation Lab. Each project represents a unique journey of creativity, collaboration, and problem-solving, aimed at making a positive impact in various domains."} />
            <div className="projects py-5 container">
                
                <div className="container ">
                    <div className="row d-flex flex-wrap justify-content-around">
                    {
                        projects_data.map((project) => {
                            return <ProjectItem key={project.id} headName={project.projectName} desc={project.desc} />
                    })
                }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
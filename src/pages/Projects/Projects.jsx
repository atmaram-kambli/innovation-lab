import React from 'react'
import PageBanner from '../../components/PageBanner/PageBanner';
import homeBannerImg from '../../assets/home-banner.png';
import ProjectItem from '../../components/ProjectItem/ProjectItem';


const Projects = () => {
    const projects_data = [
        {
            id: 1,
            projectName: "AcquScribe",
            desc: "AquaScribe is a smart water management system that leverages IoT sensors, ML Algorithms and automation to optimize irrigation processes in real-time"
        },
        {
            id: 2,
            projectName: "Project 1",
            desc: "Lorem23 This is something that you can't imagine, so leave it to ourselves and chill"
        },
        {
            id: 3,
            projectName: "Project 1",
            desc: "Lorem23 This is something that you can't imagine, so leave it to ourselves and chill"
        },
        {
            id: 4,
            projectName: "Project 1",
            desc: "Lorem23 This is something that you can't imagine, so leave it to ourselves and chill"
        },
        {
            id: 5,
            projectName: "Project 1",
            desc: "Lorem23 This is something that you can't imagine, so leave it to ourselves and chill"
        },
        {
            id: 6,
            projectName: "Project 1",
            desc: "Lorem23 This is something that you can't imagine, so leave it to ourselves and chill"
        },
        {
            id: 7,
            projectName: "Project 1",
            desc: "Lorem23 This is something that you can't imagine, so leave it to ourselves and chill"
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
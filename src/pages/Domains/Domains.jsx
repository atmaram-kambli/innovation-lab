import React from 'react'
import software from "../../assets/software.webp"
import hardware from "../../assets/hardware.jpg"
import management from "../../assets/management.jpg"
import DomainItem from './DomainItem/DomainItem'
import PageBanner from '../../components/PageBanner/PageBanner';
import banner from '../../assets/home-banner.png';

function Domains() {
    return (
        <>  
            <PageBanner bannerIMG={banner} bannerName='We Work on..' desc={'We work on a variety of projects, ranging from cutting-edge technology solutions to innovative social impact initiatives, pushing the boundaries of creativity and problem-solving. We work on diverse projects spanning technology, design, and innovative solutions, fostering innovation and collaboration among our members.'} />
            <div className='domains' style={{padding:"100px 0"}}>
            <h2 className="container my-5w">We work on following domains...</h2>
            <div className='container d-flex justify-content-center my-4'>
                <DomainItem img={software} domainName={"Software Domain"} content={"The Software Domain encompasses projects related to the development of software applications and systems. From mobile apps to web platforms, students in this domain work on coding, debugging, and optimizing software to meet specific user needs and enhance user experiences."} />
                
                <DomainItem img={hardware} domainName={"Hardware Domain"} content={"In the Hardware Domain, students dive into the world of electronics, circuits, and physical computing. They design, build, and test hardware prototypes, ranging from embedded systems to IoT devices, exploring concepts like robotics, sensors, and automation to solve real-world challenges."} />
                
                <DomainItem img={management} domainName={"Management Department"} content={"The Management Department focuses on business administration, strategy, and leadership. Students collaborate on initiatives such as market research, business planning, and project management, developing skills in decision-making, communication, and team coordination."} />
            </div>
            </div>
            

        </>
    )
}

export default Domains
import React from 'react';
import mission from '../../assets/mission.jpg';
import AboutItem from '../../components/AboutItem/AboutItem';
import './About.css'
import PageBanner from '../../components/PageBanner/PageBanner';
import aboutBanner from '../../assets/innovation-lab3.jpeg';


function About() {
    return (
        <>
            <PageBanner bannerIMG={aboutBanner} salutation={"About"} bannerName={"Innovation Lab"} desc={"Established in 2019, our primary objective has been to inspire students to harness their creativity, transform ideas into action, and offer them a dedicated platform for showcasing their innovations. "}/>

            <div className="about-items py-5">
                <AboutItem heading={"About Us"} content={"Exploring Ideas, Creating Solutions. In the Innovation Lab, we turn ideas into action. Through hands-on projects, workshops, and collaborative initiatives, we encourage students to think outside the box, push boundaries, and challenge the status.  By fostering a culture of inclusivity and collaboration, we empower students to leverage their collective talents and perspectives to tackle complex challenges."} img={mission} rev={""} />
                <AboutItem heading={"Our Mission"} content={"Empowering Creativity, Fostering Innovation. Driven by a passion for innovation and a commitment to excellence, our mission is to empower students to unleash their creativity, explore new frontiers, and bring their ideas to life. We provide a supportive environment where curiosity is nurtured, challenges are embraced, and bold ideas are celebrated."} img={mission} rev={"-reverse"} />         
                <AboutItem heading={"Our Goal"} content={"Our goal is to inspire, innovate, and impact the world through collective creativity and relentless pursuit of excellence.  We encourage experimentation, risk-taking, and continuous learning as essential components of the innovation process. We work to empower aspiring innovators to transform their ideas into impactful solutions that shape the future."} img={mission} rev={""} />
            </div>
        </>
    )
}

export default About;
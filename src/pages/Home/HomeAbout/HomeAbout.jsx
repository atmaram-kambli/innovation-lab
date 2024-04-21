import React from 'react';
import './HomeAbout.css';
import about from '../../../assets/mission.jpg';
import { Link } from 'react-router-dom';

export const HomeAbout = () => {
  return (
    <div className="container">

    <div className='home-about row'>
      <div className='left col-lg-5'>
        <img src={about} alt="" />
      </div>
      <div className="right col-lg-6 offset-lg-1">
        <h1><span>About</span> Innovation Lab</h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus saepe eveniet. Id quidem incidunt porro soluta delectus fugiat voluptate, magnam molesmporibus, dolore officiis harum magnam consequuntur. Quaerat totam impedit corporis aliquid?</p> */}
        <p>At the Innovation Lab,  We believe in the power of innovation to drive positive change and solve real-world problems. Founded within the community of GCOEARA, our lab serves as a creative hub where students from diverse backgrounds come together to innovate, collaborate, and make a difference.</p>
        
        <Link to='/about'><button onClick={() => {window.scrollTo(0,0)}}>Learn more..</button></Link>
      </div> 
    </div>
    </div>
  )
}

export default HomeAbout;

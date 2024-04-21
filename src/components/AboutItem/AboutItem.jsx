import React from 'react';
import './AboutItem.css';
import about_image from '../../assets/mission.jpg';

function AboutItem({heading, content, img, rev}) {
  return (
    <>
    <div className="container">
      <div className={ `about-item d-flex flex-row${rev} row` }>
        <div className='left col-lg-5'>
          <img src={about_image} alt=""  />
          {/* <img src={img} alt=""  /> */}
        </div>
        <div className="right col-lg-7">
          <h1>{heading}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutItem
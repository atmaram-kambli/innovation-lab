import React from 'react'
import './Mover.css';
import { Link } from 'react-router-dom';

const Mover = () => {
  return (
    <div className='mover container'>
      <div className="content">
          <h2>Let's connect with us</h2>
          <Link to='/contact'><button type='button' className='btn btn-primary' onClick={() => {window.scrollTo(0, 0)}}>Contact Us</button></Link>
      </div>
    </div>
  )
}

export default Mover
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-light text-center text-white" style={{ backgroundColor: 'rgba(4, 112, 130, 0.8)' }}>
        {/* <h2>Innoation Lab</h2> */}
      <div style={{backgroundColor: 'rgba(4, 112, 130, 0.1)'}}>
        <div className="container p-4 pb-0" >
          <section className="mb-3" >

            {/* <!-- Linkedin --> */}
            <a className="btn btn-outline-info btn-floating m-1" href="/" role="button"
            ><i className="fab fa-linkedin-in"></i
            ></a>

            {/* Instagram */}
            <a className="btn btn-outline-info btn-floating m-1" href="/" role="button">
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a className="btn btn-outline-info btn-floating m-1" href="/" role="button"
            ><i className="fab fa-twitter"></i
            ></a>

            {/* <!-- Facebook --> */}
            <a className="btn btn-outline-info btn-floating m-1" href="/" role="button"
            ><i className="fab fa-facebook-f"></i
            ></a>
          </section>
        </div>
        <div className="container pb-3">
          <Link className="link text-info mx-lg-2 mx-1 text-decoration-none" to="/">Home</Link>
          <Link className="link text-info mx-lg-2 mx-1 text-decoration-none" to="/about">About Us</Link>
          <Link className="link text-info mx-lg-2 mx-1 text-decoration-none" to="/domains">Domains</Link>
          <Link className="link text-info mx-lg-2 mx-1 text-decoration-none" to="/contact">Contact Us</Link>
        </div>

        </div>
        {/* <!-- Copyright --> */}
        <div className="text-center p-3 pb-1" style={{ backgroundColor: 'rgba(4, 112, 130, 0.9)' }}>
          <h6>INNOVATION LAB, CRAFTED WITH &#10084; BY OUR WEB TEAM @innovation_lab</h6>
          <p>&copy;{currentYear} Innovation Lab. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
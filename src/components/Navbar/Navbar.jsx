import React, { useEffect, useState } from 'react';
import logo from '/logo1.png';
import logo2 from '/logo2.png';
import { Link, useLocation } from 'react-router-dom'; 

function Navbar(props) {
    const location = useLocation();
    const [url, setUrl] = useState(null);

    useEffect(() => {
      setUrl(location.pathname)
    }, [location]);
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light py-2 px-md-5" style={{backgroundColor: "rgb(233, 240, 241)" }}>
                <div className="container-fluid py-1">
                    <Link className="navbar-brand mx-0 mx-lg-4" to="/">
                        <img src={logo} className="navbar-brand " style={{ height: '50px' }} alt="logo" />
                        <img src={logo2} className="navbar-brand mx-0 img-fluid" style={{ height: '50px' }} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3"><Link className={`nav-link ${url === '/' ? "active text-info bold" : ""}`} aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item mx-3"><Link className={`nav-link ${url === '/about' ? "active text-info bold" : ""}`} to="/about">About Us</Link></li>
                            <li className="nav-item mx-3"><Link className={`nav-link ${url === '/domains' ? "active text-info bold" : ""}`} to="/domains">Domains</Link></li>
                            <li className="nav-item mx-3"><Link className={`nav-link ${url === '/projects' ? "active text-info bold" : ""}`} to="/projects">Projects</Link></li>
                            {/* <li className="nav-item mx-3">
                                <Link className={`nav-link ${url === '/news' ? "active text-info font-weight-bold" : ""}`} to="/news">News Feed</Link>
                            </li> */}
                            <li className="nav-item mx-3"><Link className={`nav-link ${url === '/contact' ? "active text-info bold" : ""}`} to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

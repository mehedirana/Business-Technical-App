import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    //navbar-light bg-light
    //navbar-dark bg-dark
    //"navbar-nav ml-auto mb-2 mb-lg-0"
    return (
        <>

            <nav>
                <div className="nav-wrapper midnight black">
                    <Link to="/" className="brand-logo">Beta Technical</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )


}

export default Navbar;
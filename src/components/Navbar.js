import React from 'react';
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="main-menu">
            <nav data-aos="fade-down" className="navbar navbar-expand-sm navbar-dark container">
                <Link className="navbar-brand text-white font-weight-bold" to="/"><img  alt='logo' src='https://res.cloudinary.com/moversng/image/upload/v1598887746/easycrmx2_kqmi0r.svg' className='logo border-red'/></Link>
                <button className="navbar-toggler d-lg-none text-white menu-btn" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">Menu</button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-lg-0 z4 font-weight-bold">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to='/gallery' rel="noopener noreferrer">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="https://sdgcrm.herokuapp.com/login" rel="noopener noreferrer" target={"_blank"}>Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" rel="noopener noreferrer" target={"_blank"} href="https://sdgcrm.herokuapp.com/signup">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

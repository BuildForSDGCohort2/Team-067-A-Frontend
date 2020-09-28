import React from 'react';
import HeaderImage from '../img/undraw_data_xmfy.svg';

function Header() {
    
    return (
        <header className="header-container">
            <div className="main-menu mb-5">
                <nav data-aos="fade-down" className="navbar navbar-expand-sm navbar-dark container">
                    <a className="navbar-brand text-white font-weight-bold" href="/"><img  alt='logo' src='https://res.cloudinary.com/moversng/image/upload/v1598887746/easycrmx2_kqmi0r.svg' className='logo'/></a>
                    <button className="navbar-toggler d-lg-none text-white menu-btn" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">Menu</button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-lg-0 z4 font-weight-bold">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="https://sdgcrm.herokuapp.com/login" rel="noopener noreferrer" target={"_blank"}>Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-warning mx-2 py-1" rel="noopener noreferrer" target={"_blank"} href="https://sdgcrm.herokuapp.com/signup">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="container mt-5 pb-5 header-content-container">
                <div className="row">
                    <div className="col-lg-5 my-auto">
                        <div className="header-content mx-auto text-white" >
                            <h2 data-aos="fade-down-right" className="mb-5">Manage customer data  and grow your business efficiently with <img alt='logo' src='https://res.cloudinary.com/moversng/image/upload/v1598887746/easycrmx2_kqmi0r.svg' className='logo'/></h2>
                            <a href="https://sdgcrm.herokuapp.com/signup" rel="noopener noreferrer" target={"_blank"} className="btn btn-outline-warning btn-xl js-scroll-trigger p-2">Get Started for Free!</a>
                        </div>
                    </div>
                    <div className="col-lg-7 my-auto">
                        <div className="device-container">
                            <div className="device" data-aos="zoom-in">
                                <img src={HeaderImage}  alt='headerImg'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

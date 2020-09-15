import React from 'react';
import HeaderImage from '../img/undraw_data_xmfy.svg';

function Header() {
    return (
        <header className="header-container">
            <div className="main-menu mb-5">
                <nav className="navbar navbar-expand-sm navbar-dark bg-transparent .sticky-top container">
                    <a className="navbar-brand text-white font-weight-bold" href="/"><span className="text-info">EASY</span>CRM</a>
                    <button className="navbar-toggler d-lg-none text-white" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">Menu</button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ml-auto mt-lg-0 font-weight-bold">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#guide">Guide</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-warning mx-2 py-1" href="google.com">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-5 my-auto">
                        <div className="header-content mx-auto text-white">
                            <h2 className="mb-5">Manage customer data  and grow your business efficiently with <b><span className="text-info">EASY</span>CRM</b></h2>
                            <a href="#download" className="btn btn-outline-warning btn-xl js-scroll-trigger p-2">Get Started for Free!</a>
                        </div>
                    </div>
                    <div className="col-lg-7 my-auto">
                        <div className="device-container">
                            <div className="device">
                                <img src={HeaderImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

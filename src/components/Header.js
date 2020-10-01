import React from 'react';
import HeaderImage from '../img/undraw_data_xmfy.svg';

function Header() {
    
    return (
        <header className="header-container">
            <div className="pb-5 header-content-container">
                <div className="row">
                    <div className="col-lg-5 col-md-7 my-auto">
                        <div className="header-content text-white" >
                            <h2 data-aos="fade-down-right" className="mb-5">Manage customer data  and grow your business efficiently with <img alt='logo' src='https://res.cloudinary.com/moversng/image/upload/v1598887746/easycrmx2_kqmi0r.svg' className='logo'/></h2>
                            <a href="https://sdgcrm.herokuapp.com/signup" rel="noopener noreferrer" target={"_blank"} className="btn btn-outline-warning btn-xl js-scroll-trigger p-2">Sign Up for Free!</a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-5 my-auto">
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

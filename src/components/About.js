import React, { useState } from 'react';
import AboutImage from '../img/undraw_dashboard_nklg.svg'

function About() {
    const [read, setRead] = useState(false)
    const handleRead = () => {
        if (read) {
            setRead(false)
        } else {
            setRead(true)
        }
    } 
    return (
        <section className="about border-bottom pb-5" id="about">
          <div className="section-heading text-center pb-3" data-aos="fade-up">
            <h1>About</h1>
            <p className="text-muted">Know More About EasyCRM</p>
          </div>
          <div className="row mt-3">
              <div className="col-lg-6 my-auto">
                  <div className="device-container">
                      <div className="device">
                          <img src={AboutImage} alt=" About Us" />
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 my-auto">
                  <div className="about-content mx-auto text-dark px-3 py-5" data-aos="zoom-out">
                      <p><b><span className="text-logo">EASY</span>CRM</b> is a customer relations management system targeted towards small scale businesses. It helps you boost sales by keeping an eye on customers, from nurturing leads to closing the sale and maintaining customer loyalty.
                      

                      {
                          read ? <span>It will save you time and money through sales force automation. <br /><br /><b><span className=" text-logo">EASY</span>CRM</b> is therefore the one-stop shop for your sales teams. 
                        It can also be your gateway to increased sales productivity, healthier pipelines and better coordination between (and beyond) teams.</span>
                         : ''
                      }
                      </p>
                      <span onClick={handleRead} className="text-warning" style={{cursor: 'spanointer'}}>Read More</span>
                  </div>
              </div>
          </div>
        </section>
    )
}

export default About

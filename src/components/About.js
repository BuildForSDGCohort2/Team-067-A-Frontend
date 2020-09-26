import React from 'react';
import AboutImage from '../img/undraw_dashboard_nklg.svg'

function About() {
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
                      <p><b><span className="text-info">EASY</span>CRM</b> is a useful tool for businesses of all sizes. It helps you boost sales by keeping an eye on customers, from nurturing leads to closing the sale and maintaining customer loyalty. 
                      It will save you time and money through sales force automation. <br /><br />
                      <b><span className="text-info">EASY</span>CRM</b> is therefore the one-stop shop for your sales teams. 
                      It can also be your gateway to increased sales productivity, healthier pipelines and better coordination between (and beyond) teams.
                     </p>
                  </div>
              </div>
          </div>
        </section>
    )
}

export default About

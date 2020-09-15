import React from 'react'
import Image1 from '../img/undraw_collecting_fjjl.svg';
import Image2 from '../img/undraw_visual_data_b1wx.svg';
import Image3 from '../img/undraw_growth_analytics_8btt.svg';
import Image4 from '../img/undraw_data_report_bi6l.svg';
import Image5 from '../img/undraw_secure_data_0rwp.svg';
import Image6 from '../img/undraw_product_tour_foyt.svg';

function Features() {
    return (
        <section className="features" id="features">
            <div className="section-heading text-center pb-3">
              <h1>Features</h1>
              <p className="text-muted">Check out what you can do with our app!</p>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img className="card-img-top" src={Image1} alt="" />
                  <div className="card-body">
                    <h5 className="card-title p-2">Workflow Automation</h5>
                    <p className="card-text px-3">Perform tedious sales tasks with ease an in less time</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img className="card-img-top" src={Image2} alt="" />
                  <div className="card-body">
                    <h5 className="card-title p-2">Lead Management</h5>
                    <p className="card-text px-3">Identify your leads and the actions they've taken along the sales cycle</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img className="card-img-top" src={Image3} alt="" />
                  <div className="card-body">
                    <h5 className="card-title p-2">Reporting</h5>
                    <p className="card-text px-3">Brings the sales results and marketing efforts all together</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img className="card-img-top" src={Image4} alt="" />
                  <div className="card-body">
                    <h5 className="card-title p-2">Analytics</h5>
                    <p className="card-text px-3">Offers insight into customer data and determination of ROI</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img className="card-img-top" src={Image5} alt="" />
                  <div className="card-body">
                    <h5 className="card-title p-2">Privacy and Security</h5>
                    <p className="card-text px-3">Helps you to store business data in a secure database</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card">
                  <img className="card-img-top" src={Image6} alt="" />
                  <div className="card-body">
                    <h5 className="card-title p-2">Customer Service</h5>
                    <p className="card-text px-3">Acquire and retain customers by providing excellent customer service</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}

export default Features

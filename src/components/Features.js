import React, { useState } from 'react';
import Image1 from '../img/undraw_collecting_fjjl.svg';
import Image2 from '../img/undraw_visual_data_b1wx.svg';
import Image3 from '../img/undraw_growth_analytics_8btt.svg';
import Image4 from '../img/undraw_data_report_bi6l.svg';
import Image5 from '../img/undraw_secure_data_0rwp.svg';
import Image6 from '../img/undraw_product_tour_foyt.svg';

function Features() {
    const [data] = useState([
      {
        image: Image1,
        title: 'Workflow Automation',
        text: 'Perform tedious sales tasks with ease and in less time'
      },
      {
        image: Image2,
        title: 'Lead Management',
        text: 'Identify your leads and actions taken along the sales cycle'
      },
      {
        image: Image3,
        title: 'Reports',
        text: 'Brings the sales results and marketing efforts all together'
      },
      {
        image: Image4,
        title: 'Analytics',
        text: 'Offers insight into customer data and determination of ROI'
      },
      {
        image: Image5,
        title: 'Privacy and Security',
        text: 'Helps you to store business data in a secure database'
      },
      {
        image: Image6,
        title: 'Customer Service',
        text: 'Profer excellent customer service to customers'
      }
    ]);
    return (
        <section className="features" id="features">
            <div className="section-heading text-center pb-3">
              <h1>Features</h1>
              <p className="text-muted">Check out what you can do with our app!</p>
            </div>
            <div className="row mt-5">
              {data.map(datum => (
                <div key={datum.image} className="col-lg-4 mb-3 col-md-6 col-sm-12">
                  <div className="card pb-md-5 m-md-0">
                    <img className="card-img-top" src={datum.image} alt={datum.text} />
                    <div className="card-body">
                      <h5 className="card-title p-2">{datum.title}</h5>
                      <p className="card-text px-3">{datum.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>
    )
}

export default Features

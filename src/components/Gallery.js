import React from 'react';
import gallery1 from '../img/gallery1.png';
import gallery2 from '../img/gallery2.png';
import gallery3 from '../img/gallery3.png';
import gallery4 from '../img/gallery4.png';
import gallery5 from '../img/gallery5.png';
import gallery6 from '../img/gallery6.png';

function Gallery() {
    return (
        <section className="gallery container pb-3" id="gallery">
            <div className="section-heading text-center pb-3" data-aos="fade-up">
              <h2>Gallery</h2>
              <p className="text-muted">Check out amazing images of the app!</p>
            </div>
            <div id="carouselId" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
                <li data-target="#carouselId" data-slide-to="3"></li>
                <li data-target="#carouselId" data-slide-to="4"></li>
                <li data-target="#carouselId" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <img src={gallery1} className="w-100 h-100" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src={gallery2} className="w-100" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src={gallery3} className="w-100" alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img src={gallery4} className="w-100" alt="Fourth slide" />
                </div>
                <div className="carousel-item">
                    <img src={gallery5} className="w-100" alt="Fifth slide" />
                </div>
                <div className="carousel-item">
                    <img src={gallery6} className="w-100" alt="Sixth slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
            
        </section>
    )
}

export default Gallery

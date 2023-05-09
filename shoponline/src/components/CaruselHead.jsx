import React from 'react';
import Slide from 'react-reveal/Slide';

const CaruselHead = () => {
  return (
    <section className="section-intro pt-3">
        <div className="container-fluid p-0">
          <div
            id="carouselExampleDark"
            className="carousel  slide carousel-fade"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="assets/images/banners/img1.png"
                  className="d-block w-100 "
                  alt="..."
                />
                <div className="carousel-caption bg-dark-50 rounded-2 d-none d-md-block">
                  <Slide right>
                  <h1 className='text-white'>First slide label</h1>
                  </Slide>
                  <Slide left>
                  <p className='text-white'>
                    Some representative placeholder content for the first slide.
                  </p>
                  </Slide>
                 
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="assets/images/banners/img2.png" className="d-block w-100 " alt="..." />
                <div className="carousel-caption bg-dark-50 rounded-2 d-none d-md-block">
                  <Slide right>
                  <h1 className='text-white'>First slide label</h1>
                  </Slide>
                  <Slide left>
                  <p className='text-white'>
                    Some representative placeholder content for the first slide.
                  </p>
                  </Slide>
                 
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/images/banners/img3.png" className="d-block w-100 " alt="..." />
                <div className="carousel-caption bg-dark-50 rounded-2 d-none d-md-block">
                  <Slide right>
                  <h1 className='text-white'>First slide label</h1>
                  </Slide>
                  <Slide left>
                  <p className='text-white'>
                    Some representative placeholder content for the first slide.
                  </p>
                  </Slide>
                 
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
  )
}

export default CaruselHead
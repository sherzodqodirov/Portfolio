import React from "react";
import CaruselHead from "../CaruselHead";
import Zoom from "react-reveal/Zoom";
import Tabs from "../Tabs";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Bounce from 'react-reveal/Bounce';
import Wobble from 'react-reveal/Wobble';
import RecommendedProduct from "../RecommendedProduct";
function Home() {
  return (
    <div className="home-section">
      <CaruselHead />

      <section className="padding-y">
        <div className="container">
          <Zoom>
            <header className="section-heading">
              <h3 className="section-title">Bizning mahsulotlar</h3>
            </header>
          </Zoom>

          <Tabs />
        </div>
      </section>

      <section>
        <div className="container">
          <Fade bottom>
            <article
              className="card p-4"
              style={{ backgroundColor: "var(--bs-primary)" }}
            >
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="mb-0 text-white">
                    Best products and brands in store
                  </h4>
                  <p className="mb-0 text-white-50">
                    Trendy products and text to build on the card title
                  </p>
                </div>
                <div className="col-auto">
                  {" "}
                  <a className="btn btn-warning" href="#">
                    Discover
                  </a>{" "}
                </div>
              </div>
            </article>
          </Fade>
        </div>
      </section>

     <RecommendedProduct/>

      <section className="padding-y-sm bg-gray-light">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-md-4">
              <form>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                  <button className="btn btn-light" type="submit">
                    
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-8">
              <nav className="float-lg-end">
                <Wobble>
                  <a
                    className="btn btn-icon btn-light me-3"
                    title="Facebook"
                    target="_blank"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Wobble>

                <Wobble>
                  
                  <a
                    className="btn btn-icon btn-light me-3"
                    title="Instagram"
                    target="_blank"
                    href="#"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </Wobble>

                <Wobble>
                  
                  <a
                    className="btn btn-icon btn-light me-3"
                    title="Youtube"
                    target="_blank"
                    href="#"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </Wobble>

                <Wobble>
                  
                  <a
                    className="btn btn-icon btn-light "
                    title="Twitter"
                    target="_blank"
                    href="#"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </Wobble>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

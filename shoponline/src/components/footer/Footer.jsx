import React from "react";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <div className="footer-section">
      <footer className="section-footer bg-white border-top">
        <div className="container">
          <Fade bottom>
            <section className="footer-main padding-y">
              <div className="row">
                <aside className="col-12 col-sm-12 col-lg-3">
                  <article className="me-lg-4">
                    <p className="mt-3">
                      {" "}
                      © 2022- 2023 Therichpost. <br /> All rights reserved.{" "}
                    </p>
                  </article>
                </aside>
                <aside className="col-6 col-sm-4 col-lg-2">
                  <h6 className="title">Store</h6>
                  <ul className="list-menu mb-4">
                    <li>
                      {" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Find store</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Categories</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Blogs</a>
                    </li>
                  </ul>
                </aside>
                <aside className="col-6 col-sm-4 col-lg-2">
                  <h6 className="title">Information</h6>
                  <ul className="list-menu mb-4">
                    <li>
                      {" "}
                      <a href="#">Help center</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Money refund</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Shipping info</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Refunds</a>
                    </li>
                  </ul>
                </aside>
              </div>
            </section>
          </Fade>
        </div>
      </footer>

      <aside
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvas_cart"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Your cart (3) </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <figure className="itemside mb-4">
            <div className="aside">
              <img
                src="assets/images/items/14.webp"
                className="border img-sm rounded"
              />
            </div>
            <figcaption className="info">
              <a href="#" className="btn btn-icon btn-light float-end">
                <i className="fa fa-trash"></i>
              </a>
              <p> Leather Wallet for Men</p>
              <span className="text-muted">1 x $200.95 </span> <br />
              <strong className="price"> $400.90 </strong>
            </figcaption>
          </figure>

          <figure className="itemside  mb-4">
            <div className="aside">
              <img
                src="assets/images/items/2.webp"
                className="border img-sm rounded"
              />
            </div>
            <figcaption className="info">
              <a href="#" className="btn btn-icon btn-light float-end">
                <i className="fa fa-trash"></i>
              </a>
              <p> Canon EOS 1400 Black </p>
              <span className="text-muted">2 x $169.95 </span> <br />
              <strong className="price"> $339.90 </strong>
            </figcaption>
          </figure>

          <figure className="itemside  mb-4">
            <div className="aside">
              <img
                src="assets/images/items/11.webp"
                className="border img-sm rounded"
              />
            </div>
            <figcaption className="info">
              <a href="#" className="btn btn-icon btn-light float-end">
                <i className="fa fa-trash"></i>
              </a>
              <p> Winter Jacket for men and lady </p>
              <span className="text-muted">2 x $169.95 </span> <br />
              <strong className="price"> $339.90 </strong>
            </figcaption>
          </figure>
          <hr />

          <p className="mb-3 text-center">
            {" "}
            Subtotal: <strong className="text-danger">$893.00</strong>{" "}
          </p>
          <div className="mb-3">
            <button
              type="button"
              className="btn w-100 btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
          <p className="mb-3 text-center">
            {" "}
            <img src="assets/images/payments.webp" height="22" />{" "}
          </p>
        </div>
      </aside>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Checkout
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone number"
                    aria-label="Phone number"
                  />
                </div>
                  <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Adress"
                    aria-label="Adress"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

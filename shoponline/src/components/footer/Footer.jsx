import React from 'react'

function Footer() {
  return (
    <div className="footer-section">
         <footer className="section-footer bg-white border-top">
            <div className="container">
            <section className="footer-main padding-y">
                <div className="row">
                <aside className="col-12 col-sm-12 col-lg-3">
                    <article className="me-lg-4">
                    <p className="mt-3"> © 2022- 2023 Therichpost. <br /> All rights reserved. </p>
                    </article>
                </aside>
                <aside className="col-6 col-sm-4 col-lg-2">
                    <h6 className="title">Store</h6>
                    <ul className="list-menu mb-4">
                    <li> <a href="#">About us</a></li>
                    <li> <a href="#">Find store</a></li>
                    <li> <a href="#">Categories</a></li>
                    <li> <a href="#">Blogs</a></li>
                    </ul>
                </aside>
                <aside className="col-6 col-sm-4 col-lg-2">
                    <h6 className="title">Information</h6>
                    <ul className="list-menu mb-4">
                    <li> <a href="#">Help center</a></li>
                    <li> <a href="#">Money refund</a></li>
                    <li> <a href="#">Shipping info</a></li>
                    <li> <a href="#">Refunds</a></li>
                    </ul>
                </aside>
                <aside className="col-6 col-sm-4  col-lg-2">
                    <h6 className="title">Support</h6>
                    <ul className="list-menu mb-4">
                    <li> <a href="#"> Help center </a></li>
                    <li> <a href="#"> Documents </a></li>
                    <li> <a href="#"> Account restore </a></li>
                    <li> <a href="#"> My Orders </a></li>
                    </ul>
                </aside>
                <aside className="col-12 col-sm-12 col-lg-3">
                    <h6 className="title">Newsletter</h6>
                    <p>Stay in touch with latest updates about our products and offers </p>
            
                    <form className="mb-3">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Email" />
                        <button className="btn btn-light" type="submit">
                        Join
                        </button>
                    </div>
                    </form>
                </aside>
                </div> 
            </section>  
            
            </div>
            </footer>
            
            
            <aside className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas_cart">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title">Your cart (3) </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                
                <figure className="itemside mb-4">
                    <div className="aside">
                    <img src="assets/images/items/14.webp" className="border img-sm rounded" />
                    </div>
                    <figcaption className="info">
                    <a href="#" className="btn btn-icon btn-light float-end"><i className="fa fa-trash"></i></a>
                    <p> Leather Wallet for Men</p>
                    <span className="text-muted">1 x $200.95 </span> <br />
                    <strong className="price"> $400.90 </strong>
                    </figcaption>
                </figure>
            
                <figure className="itemside  mb-4">
                    <div className="aside">
                    <img src="assets/images/items/2.webp" className="border img-sm rounded" />
                    </div>
                    <figcaption className="info">
                    <a href="#" className="btn btn-icon btn-light float-end"><i className="fa fa-trash"></i></a>
                    <p> Canon EOS 1400 Black </p>
                    <span className="text-muted">2 x $169.95 </span> <br />
                    <strong className="price"> $339.90 </strong>
                    </figcaption>
                </figure>
            
                <figure className="itemside  mb-4">
                    <div className="aside">
                    <img src="assets/images/items/11.webp" className="border img-sm rounded" />
                    </div>
                    <figcaption className="info">
                    <a href="#" className="btn btn-icon btn-light float-end"><i className="fa fa-trash"></i></a>
                    <p> Winter Jacket for men and lady </p>
                    <span className="text-muted">2 x $169.95 </span> <br />
                    <strong className="price"> $339.90 </strong>
                    </figcaption>
                </figure>
                <hr />
                
                <p className="mb-3 text-center"> Subtotal:  <strong className="text-danger">$893.00</strong>  </p>
                <div className="mb-3">
                    <a href="#" className="btn w-100 btn-success"> Checkout </a>
                </div>
                <p className="mb-3 text-center"> <img src="assets/images/payments.webp" height="22" />  </p>
            
                </div> 
            </aside> 
       </div>
  )
}

export default Footer
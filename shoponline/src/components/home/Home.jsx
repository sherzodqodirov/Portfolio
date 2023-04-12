import React from 'react'

function Home() {
  return (
    <div className="home-section">
          
    <section className="section-intro pt-3">
        <div className="container">
            <div className="row gx-3">
                <main className="col-lg-9">
                    <article className="card-banner p-5 bg-primary" style={{height: "350px"}}>
                        <div style={{maxWidth: "500px"}}>
                        <h2 className="text-white">Great products with <br /> best deals </h2>
                        <p className="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
                        <a href="#" className="btn btn-warning"> View more </a>
                        </div>
                    </article>
                </main>
                <aside className="col-lg-3">
                    <article className="card-banner h-100" style={{backgroundColor: "var(--bs-warning)"}}>
                        <div className="card-body text-center">
                            <h5 className="mt-3 text-white">Amazing Gifts</h5>
                            <p className="text-white">No matter how far along you are in your sophistication</p>
                            <a href="#" className="btn btn-outline-light"> View more </a>
                        </div>
                    </article>
                </aside>
            </div> 
        </div> 
    </section>
  
    
   
  
    <section className="padding-y">
    <div className="container">
        <header className="section-heading">
            <h3 className="section-title">New products</h3>
        </header> 
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <span className="topbar"> <span className="badge bg-danger"> New </span> </span>
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/1.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$29.95</strong> 
                        <a href="#" className="title text-truncate">GoPro action camera 4K</a>
                        <small className="text-muted">Model: X-200</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <span className="topbar"> <span className="badge bg-warning"> Offer </span> </span>
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/2.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$590.00</strong> 
                        <a href="#" className="title text-truncate">Canon EOS professional</a>
                        <small className="text-muted">Capacity: 128GB</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/3.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$29.95</strong> 
                        <a href="#" className="title text-truncate">Modern product name here</a>
                        <small className="text-muted">Sizes: S, M, XL</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/4.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$1099.00</strong> 
                        <a href="#" className="title text-truncate">Apple iPhone 13 Pro max</a>
                        <small className="text-muted">Color: Black, Memory: 128GB</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/5.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$29.95</strong> 
                        <a href="#" className="title text-truncate">Modern product name here</a>
                        <small className="text-muted">Sizes: S, M, XL</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/6.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$29.95</strong> 
                        <a href="#" className="title text-truncate">Modern product name here</a>
                        <small className="text-muted">Sizes: S, M, XL</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/7.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$29.95</strong> 
                        <a href="#" className="title text-truncate">Modern product name here</a>
                        <small className="text-muted">Sizes: S, M, XL</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/8.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$29.95</strong> 
                        <a href="#" className="title text-truncate">Modern product name here</a>
                        <small className="text-muted">Material: Jeans</small>
                    </figcaption>
                </figure>
            </div> 
        </div> 
    </div> 
    </section>
   
    
    <section>
    <div className="container">
        <article className="card p-4" style={{backgroundColor: "var(--bs-primary)"}}>
        <div className="row align-items-center">
            <div className="col"> 
            <h4 className="mb-0 text-white">Best products and brands in store</h4>
            <p className="mb-0 text-white-50">Trendy products and text to build on the card title</p>
            </div>
            <div className="col-auto"> <a className="btn btn-warning" href="#">Discover</a> </div>
        </div>
        </article>
    </div> 
    </section>
 
  
    <section className="padding-y">
    <div className="container">
        <header className="section-heading">
            <h3 className="section-title">Recommended</h3>
        </header> 
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/9.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$17.00</strong> 
                        <a href="#" className="title text-truncate">Blue jeans shorts for men</a>
                        <small className="text-muted">Sizes: S, M, XL</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/10.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$9.50</strong> 
                        <a href="#" className="title text-truncate">Slim fit T-shirt for men</a>
                        <small className="text-muted">Sizes: S, M, XL</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/11.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$29.95</strong> 
                        <a href="#" className="title text-truncate">Modern product name here</a>
                        <small className="text-muted">Sizes: S, M, XL</small>
                    </figcaption>
                </figure>
            </div> 
            <div className="col-lg-3 col-md-6 col-sm-6">
                <figure className="card-product-grid">
                    <a href="#" className="img-wrap rounded bg-gray-light"> 
                        <img height="250" className="mix-blend-multiply" src="assets/images/items/12.webp" /> 
                    </a>
                    <figcaption className="pt-2">
                        <a href="#" className="float-end btn btn-light btn-icon"> <i className="fa fa-heart"></i> </a>
                        <strong className="price">$29.95</strong> 
                        <a href="#" className="title text-truncate">Modern product name here</a>
                        <small className="text-muted">Sizes: S, M, XL</small>
                    </figcaption>
                </figure>
            </div> 
        </div> 
    </div> 
    </section>
   
    <section className="padding-y-sm bg-gray-light">
    <div className="container">
        <div className="row gy-3 align-items-center">
            <div className="col-md-4">
            <form>
                <div className="input-group">
                <input className="form-control" type="text" placeholder="Email" />
                <button className="btn btn-light" type="submit"> Subscribe  </button>
                </div> 
            </form>
            </div>
            <div className="col-md-8">
            <nav className="float-lg-end">
                <a className="btn btn-icon btn-light" title="Facebook" target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-icon btn-light" title="Instagram" target="_blank" href="#"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-icon btn-light" title="Youtube" target="_blank" href="#"><i className="fab fa-youtube"></i></a>
                <a className="btn btn-icon btn-light" title="Twitter" target="_blank" href="#"><i className="fab fa-twitter"></i></a>
            </nav>
            </div>
        </div> 
    </div>
    </section>
            
</div>
  )
}

export default Home
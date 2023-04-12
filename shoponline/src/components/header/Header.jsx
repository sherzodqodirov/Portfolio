import React from 'react'

function Header() {
  return (
    <header className="section-header">  
    
    <section className="header-main">
    <div className="container">
        <div className="row gy-3 align-items-center">
        <div className="col-lg-2 col-sm-4 col-4">
            <a href="http://therichpost.com" className="navbar-brand">
            RichEcom
            </a> 
        </div>
        <div className="order-lg-last col-lg-5 col-sm-8 col-8">
            <div className="float-end">
            <a href="#" className="btn btn-light"> 
                <i className="fa fa-user"></i>  <span className="ms-1 d-none d-sm-inline-block">Sign in  </span> 
            </a>
            <a href="#" className="btn btn-light"> 
                <i className="fa fa-heart"></i>  <span className="ms-1 d-none d-sm-inline-block">Wishlist</span>   
            </a>
            <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light"> 
                <i className="fa fa-shopping-cart"></i> <span className="ms-1">My cart </span> 
            </a>
                </div>
        </div> 
        <div className="col-lg-5 col-md-12 col-12">
            <form action="#" className="">
                    <div className="input-group">
                    <input type="search" className="form-control" style={{width:"55%"}} placeholder="Search" />
                    <select className="form-select">
                        <option value="">All type</option>
                        <option value="codex">Special</option>
                        <option value="comments">Only best</option>
                        <option value="content">Latest</option>
                    </select>
                    <button className="btn btn-primary">
                        <i className="fa fa-search"></i> 
                    </button>
                    </div> 
                </form>
        </div>
        
        </div> 
    </div> 
    </section> 
</header> 

  )
}

export default Header
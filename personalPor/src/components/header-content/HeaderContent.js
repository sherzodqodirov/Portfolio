import React, { Fragment } from "react";
import"./headerContent.css"
import Me from "../image/me.png"
const HeaderContent = () => {
  return (
    <Fragment>
       <section className="header-content container">
      <div className="container ">
        <div className="row">
          <div className="col-lg-7 col-12 order-lg-1 order-2">
            <div className="meabout">
              <h1>Hi, I am John,
                Creative Technologist</h1><br/>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> <br/>
              <button className="btn btn-danger">Download Resume</button>
            </div>
          </div>
          <div className="me-imgdiv col-lg-5  col-12 order-lg-2 order-1">
            <div className="me-img ">
              <img className="w-100" src={Me} alt="rasim"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  );
};
export default HeaderContent;

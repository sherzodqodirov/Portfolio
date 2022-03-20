import React from 'react'

export default function FeatchWorks({featured}) {
    return featured.map((item, index) => (
        <div className="row  border-bottom" key={index}>
          <div className="col-12 col-lg-4 text-center ">
            <img className="works-img" src={item.workimg} alt="rasim"></img>
          </div>
          <div className="col-12 col-lg-8">
            <div className="workinfo">
              <h2>{item.infowork}</h2>
              <h6>
                <span>{item.date}</span>Dashboard
              </h6>
              <p>
               {item.malumot}
              </p>
            </div>
          </div>
        </div>
      ));
}

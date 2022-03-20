import React from 'react'

const FetchPosts = ({RecentPosts}) => {
    return RecentPosts.map((item, index) => (
      <div className="cardla col-lg-6 col-12" key={index}>
      <div className="card">
          <div className="card-body">
              <h1>{item.heading}</h1>
              <h5>{item.date}<span>|</span>{item.foydalagan}</h5>
              <p>{item.malumot}</p>
          </div>
      </div>
  </div>
    ));
  };
  export default FetchPosts;

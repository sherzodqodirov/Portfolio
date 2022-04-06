import React from 'react';
import {Link} from "react-router-dom";

const Cards = ({posts}) => {
    return posts.map(item=>(
                <div key={item.id} className="col-lg-4 col-12 mt-4">

                    <div className="card">
                        <Link to={`/post/${item.id}`}>
                         <div className="card-header">
                            <img className=" w-100" src={item.img} alt={item.title}/>
                        </div>
                         <div className="card-body">
                           <h3>{item.title}</h3>
                           <p>{item.desc}</p>
                            <button className="btn btn-secondary  ">Read more</button>
                        </div>
                        </Link>
                        </div>
                </div>
            ))
};
export default Cards;

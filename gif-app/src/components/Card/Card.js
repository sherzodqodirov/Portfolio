import React from "react";
import "./Card.css"
const Card = (props) => {
  const { gif } = props;
  return (
    <div className="card-body">
       <img src={gif.images.fixed_height.url} />
       
    </div>
  );
};

export default Card;

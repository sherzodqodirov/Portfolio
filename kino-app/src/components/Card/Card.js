import React from "react";
import classes from "./Card.module.scss";
const Card = ({ movie }) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.imgStyle}
        src={movie?.primaryImage?.url}
        alt={movie?.titleText?.text}
      />
      <div className={classes.title}>
        <h1>{movie?.titleText?.text}</h1> <h3>{movie?.releaseDate?.year}</h3>
      </div>
    </div>
  );
};

export default Card;

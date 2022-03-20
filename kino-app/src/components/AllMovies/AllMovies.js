import React from "react";
import Col from "../../layout/Col/Col";
import Card from "../Card/Card";
const AllMovies = ({ resData }) => {
  if (resData.movies.length > 0) {
    return resData.movies.map((item, indx) => (
      <Col key={indx}>
        <Card movie={item} />
      </Col>
    ));
  }
  return <div>NO DATA</div>;
};

export default AllMovies;

import React from "react";
import Card from "../Card/Card";

export default function AllGif(props) {
  const { resData } = props;

  if (resData.length > 0) {
    return resData.map((item, index) => <Card key={index} gif={item} />);
  }
  return <div >NO DATA</div>;
}

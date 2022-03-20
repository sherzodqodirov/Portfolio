import React from "react";
import Laptop from "./laptop";

const AllLaptop = (props) => {
  const { Laptops, sellLaptopHandl } = props;
  return Laptops.map((item, index) => (
    <Laptop sellLaptop={sellLaptopHandl} key={index} Laptop={item} />
  ));
};
export default AllLaptop;

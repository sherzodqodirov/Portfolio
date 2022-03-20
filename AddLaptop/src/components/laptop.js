import React, { useState } from "react";
import "./laptop.css";
import LaptopDate from "./LaptopDate";
import LaptopPrice from "./laptopPrice";
import { NEW } from "../constants/consts";

const Laptop = (props) => {
  const { Laptop, sellLaptop } = props;

  const isNew = Laptop.status === NEW;
  const sellLaptopHandl = () => {
    sellLaptop(Laptop.id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col">
            <h3>{Laptop.brand}</h3>
          </div>
          <div className="col">
            <h3>{Laptop.description}</h3>
          </div>
          <div className="col">
            <LaptopDate date={Laptop.date} />
          </div>
          <div className="col">
            <LaptopPrice date={Laptop.price} />
          </div>
          <button
            disabled={!isNew}
            onClick={sellLaptopHandl}
            className={`btn ${isNew ? `btn-dark` : `btn-sold`}`}>
            {isNew ? `Sotish` : `Sotildi`}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Laptop;

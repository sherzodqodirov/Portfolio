import React, { Component, useState } from "react";
import Container from "./UI/container";
import LaptopForm from "./components/LaptopForm";
import AllLaptop from "./components/AllLaptop";
import { SOLD } from "./constants/consts";

const initialLaptop = [
  {
    id: 1,
    brand: "HP",
    description: "silver /32Gb/1TBssd",
    date: new Date("2022-01-12"),
    price: 30000000,
    status: "new",
  },
  {
    id: 2,
    brand: "ACER",
    description: "black /4Gb/128ssd",
    date: new Date("2022-02-19"),
    price: 6000000,
    status: "sold",
  },
  {
    id: 3,
    brand: "MSI",
    description: "red /16Gb/256ssd",
    date: new Date("2021-12-24"),
    price: 12000000,
    status: "new",
  },
];

function App() {
  const [Laptops, setLaptop] = useState(initialLaptop);
  

  const addNewLaptop = (newLaptop) => {
    setLaptop((prevState) => {
      return [newLaptop, ...prevState];
    });
  };
  const sellLaptop = (id) => {
    const objIndex = Laptops.findIndex((item) => item.id === id);

    Laptops[objIndex].status = SOLD;

    setLaptop((prevState) => {
      return [...prevState];
    });
  };

  // const [num, setNum] = useState(0);
  // const incr = () => {
  //   setNum((prevState) => {
  //     return prevState + 1;
  //   });
  // };
  // const decr = () => {
  //   if (num<= 0) return;

  //   setNum((prevState) => {
  //     return prevState - 1;
  //   });
  // };
  return (
    <div className="App">
      <Container>
        <LaptopForm addLaptopFun={addNewLaptop} />
        <AllLaptop sellLaptopHandl={sellLaptop} Laptops={Laptops} />

        {/* <button onClick={decr}>-</button>
        <span>{num}</span>
        <button onClick={incr}>+</button> */}
      </Container>
    </div>
  );
}

export default App;

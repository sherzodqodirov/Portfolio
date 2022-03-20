import React, { useState } from "react";
import { NEW } from "../constants/consts";
import "./LaptopForm.css";

const LaptopForm = (props) => {
  const [LaptopName, setLaptopName] = useState("");
  const [Model, setModel] = useState("");
  const [LaptopDate, setLaptopDate] = useState("");
  const [LaptopPrice, setLaptopPrice] = useState("");

  const {addLaptopFun}=props;

  // const [newLaptop,setnewLaptop]=useState({
  //   LaptopName:"",
  //   LaptopModel:"",
  //   LaptopDate:"",
  //   LaptopPrice:"",
  // })

  const input_1 = (event) => {
    setLaptopName(event.target.value);
    //  setnewLaptop((prevState)=>{
    //   return {
    //     ...prevState,
    //     LaptopName:event.target.value,
    //   }

    //  })
  };
  const input_2 = (event) => {
    setModel(event.target.value);
    //  setnewLaptop((prevState)=>{
    //   return {
    //     ...prevState,
    //     LaptopModel:event.target.value,
    //   }

    //  })
  };
  const input_3 = (event) => {
    setLaptopDate(event.target.value);
    //  setnewLaptop((prevState)=>{
    //   return {
    //     ...prevState,
    //     LaptopDate:event.target.value,
    //   }

    //  })
  };
  const input_4 = (event) => {
    setLaptopPrice(event.target.value);
    //  setnewLaptop((prevState)=>{
    //   return {
    //     ...prevState,
    //     LaptopPrice:event.target.value,
    //   }
    //  })
  };
  const submitHandl = (event) => {
    event.preventDefault();
    const newLaptop = {
      brand: LaptopName,
      description: Model,
      date: new Date(LaptopDate),
      price: LaptopPrice,
      status:NEW,
      id:Math.random()
    };
    addLaptopFun( newLaptop);
    setLaptopName("");
    setModel("");
    setLaptopDate("");
    setLaptopPrice("");
  };
  return (
    <form onSubmit={submitHandl}>
      <div>
        <label htmlFor="LaptopName">Laptop name</label>
        <br />
        <input
          type="text"
          value={LaptopName}
          required
          onChange={input_1}
          id="LaptopName"
        />
      </div>
      <div>
        <label htmlFor="2">Model name</label>
        <br />
        <input type="text" value={Model} required onChange={input_2} id="2" />
      </div>
      <div>
        <label htmlFor="3">Date</label>
        <br />
        <input
          type="date"
          value={LaptopDate}
          required
          onChange={input_3}
          id="3"
        />
      </div>
      <div>
        <label htmlFor="4">Price</label>
        <br />
        <input
          type="number"
          value={LaptopPrice}
          required
          onChange={input_4}
          id="4"
        />
      </div>
      <button className="btn btn-success">Submit</button>
    </form>
  );
};

export default LaptopForm;

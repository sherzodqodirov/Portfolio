import React, { useState } from "react";
import "./Form.css";
const Form = ({inputValue}) => {
  const [inputval, setinputval] = useState("");

  const hendlVal = (event) => {
    setinputval(event.target.value);
  };

  const habdleSubmit = (event) => {
    event.preventDefault();
    inputValue(inputval)
    setinputval("")
  };
  return (
    <form onSubmit={habdleSubmit}>
      <label htmlFor="search"></label>
      <input placeholder="search" value={inputval} onChange={hendlVal} type="text" id="search" />
      <button type="submit">search</button>
    </form>
  );
};

export default Form;

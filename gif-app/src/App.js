import React, { useEffect, useReducer, useState } from "react";
import Container from "./components/UI/Container/Container";
import Row from "./components/UI/Row/Row";
import "./app.css";
import AllGif from "./components/AllGif/AllGif";
import Form from "./components/Forma/Form";
const initonData = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return action.value.data;
    default:
      return state;
  }
};

function App() {
  const [resData, dispatch] = useReducer(reducer, initonData);
  useEffect(() => {
    fetchGif();
  }, []);

  async function fetchGif(value) {
    try {
      const res = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=Xrsho1auaBhgNmhTeLo6skD4zK5vm03x&limit=10`
      );

      if (!res.ok) {
        throw new Error("Something went wrong" + res.status);
      }
      const data = await res.json();
      dispatch({ type: "FETCH", value: data });
    } catch (error) {
      console.log(error.message);
    }
  }
  const inputValue = (value) => {
    fetchGif(value);
  };
 
  
  return (
    <Container>
      <Form inputValue={inputValue} />
      <Row>
        <AllGif resData={resData} />
      </Row>
    </Container>
  );
  }


export default App;

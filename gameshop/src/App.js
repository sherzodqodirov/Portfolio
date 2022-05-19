import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/header/Header";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

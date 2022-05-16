import React,{useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Features from "./pages/features/Features";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";

function App() {
  const[bcolor,setbcolor]=useState('oq');

  useEffect(() => {
    axios({
      method: "get",
      url: "https://54.uz/rang.php",
      header: {
        "Content-Type": " application/json",
        'Accept': " application/json",
      },
    })
     .then(res=> {
      setbcolor(res?.data?.status);
     })
     .catch(error=>{
       console.log(error.message);
     })
  }, [setbcolor]);

  let backcolor;

  switch (bcolor) {
    case "qora":
      backcolor = "#000"
      break;
    case "qizil":
      backcolor = "red"
      break;
    case "sariq":
      backcolor = "yellow"
      break;
    case "oq":
      backcolor = "#fff"
      break;
    case " ko'k":
      backcolor = "blue"
      break;
    case " yaxshi":
      backcolor = "green"
      break;
    default:
      backcolor = "silver"
  }

console.log(backcolor);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home backcolor={backcolor} />} />
          <Route path="/features" element={<Features backcolor={backcolor} />} />
          <Route path="/pricing" element={<Pricing backcolor={backcolor}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

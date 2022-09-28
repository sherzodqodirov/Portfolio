import React from "react";
import "./cardcar.scss";
const Cardcar = ({ datacategor }) => {

  const handleclick=()=>{
    console.log(datacategor);
  }
  return (
        
   <div className="card  card1 border-0" onClick={handleclick}>
    <div className="card-header p-0 overflow-hidden rounded">
    <img
      className="w-100 img-fluid"
      src={`https://cartestwebapp.herokuapp.com/${datacategor.imgUrl}`}
      alt="img"
    />
    </div>
    <div className="card-body ">
       <h4>{datacategor.name}</h4> 
    </div>   
   </div>
  
)};

export default Cardcar;

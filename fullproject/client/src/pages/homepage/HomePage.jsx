import React from "react";
import { AiFillDelete } from "react-icons/ai";
const HomePage = () => {
  const data = ["alma", "anor", "banan"];

  return (
    
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field  col m6 s8 offset-m2  ">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Product name</label>
            </div>
            <div style={{ marginTop: "25px" }} className="col m2 s2">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                добавить
              </button>
            </div>
          </div>
        </form>
        {data.map((item, key) => (
          <div key={key} className="row">
            <div className="col s12 m6 offset-m2 itemproduct">
              <h6>{item}</h6>
              <div className="btnbox">
              <div className="sell">sell</div> 
              <div style={{cursor:"pointer"}}> <AiFillDelete color="red" size={25}/> </div>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

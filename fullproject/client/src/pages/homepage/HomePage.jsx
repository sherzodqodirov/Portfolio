import React from "react";
import{IoSendSharp} from "react-icons/io5"
const HomePage = () => {
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field  col s7 offset-s2">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Product name</label>
            </div>
            <div style={{marginTop:"25px"}} className="col s2">
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
      </div>
    </div>
  );
};

export default HomePage;

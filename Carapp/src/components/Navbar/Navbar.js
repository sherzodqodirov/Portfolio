import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <div className="p-3 text-end">
      <NavLink to={localStorage.getItem('token')==null ? '/login':'/coreadmin'}>
        <button className="btn btn-primary ">
          <AiOutlineUser size="20px" />
          Admin o‘tish
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loggetuser} from "../../redux/authuser/registslice";
import { toast } from "react-toastify";
import {AiOutlineMenu,} from "react-icons/ai"
import {GrReactjs} from "react-icons/gr";
const Navbar = () => {
   const { isLogget } = useSelector((state) => state.userdata);
   const dispatch=useDispatch()

   const logout = () => {
     localStorage.removeItem("USERTOKEN");
     dispatch(loggetuser(false))
     toast.success("logout system")
   };
  return (
    <>
      <nav className={"light-blue darken-3"}>
        <div className="nav-wrapper container ">
          <Link to="/" className="brand-logo left">
            <span>Crudapp</span> <div className="navlogo"><GrReactjs size={24}/></div>
          </Link>
          <ul className="right">
            {isLogget ? (
              <li onClick={logout} >
                <Link to="/login" className={"logi"}>
                  Выйти
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" className={"logi"}>
                  Войти
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
    </>
  );
};

export default Navbar;

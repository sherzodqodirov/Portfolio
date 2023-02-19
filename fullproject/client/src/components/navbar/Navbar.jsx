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
          <Link to="/" className="brand-logo">
            <span>Shef</span> <div className="navlogo"><GrReactjs size={24}/></div>
          </Link>
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons"><AiOutlineMenu/></i>
          </Link>
          <ul className="right hide-on-med-and-down">
            {isLogget ? (
              <li onClick={logout}>
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

      {/*<ul className="sidenav" id="mobile-demo">*/}
      {/*    <li><a href="">Sass</a></li>*/}
      {/*    <li><a href="">Components</a></li>*/}
      {/*    <li><a href="">Javascript</a></li>*/}
      {/*    <li><a href="">Mobile</a></li>*/}
      {/*</ul>*/}
    </>
  );
};

export default Navbar;

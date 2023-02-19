import React, { useEffect } from "react";
import "./authpage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/authuser/loginactions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloading, isLogget } = useSelector((state) => state.userdata);

  const hendlesupmit = (e) => {
    e.preventDefault();
    const userobj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginUser(userobj));
    e.target.reset();
  };

  useEffect(() => {
    if (isLogget) {
      navigate("/");
    }
  }, [isLogget]);
  
  return (
    <div className="auth-page">
      <h3>Aвторизация</h3>
      <form onSubmit={hendlesupmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id={"email"}
              type="email"
              name={"email"}
              className={"validate"}
            />
            <label htmlFor={"email"}>Email</label>
          </div>
          <div className="input-field col s12">
            <input
              id={"password"}
              type="password"
              name={"password"}
              autoComplete="true"
              className={"validate"}
            />
            <label htmlFor={"password"}>Password</label>
          </div>
        </div>
        <div className="row">
          <button className={"wawes-effect wawes-light btn  blue"}>
            {isloading ? "Loading..." : "Войти"}
          </button>
          <Link to="/registration" className={"btn-outline btn-regist"}>
            Нет аккаунта{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./authpage.scss";
import { postUser } from "../../redux/authuser/registactions";

const RegistryPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isloading, isLogget } = useSelector((state) => state.userdata);

  const hendlesupmit = (e) => {
    e.preventDefault();
    const userobj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(postUser(userobj));
    e.target.reset();
  };

  useEffect(() => {
    if (isLogget) {
      navigate("/");
    }
  }, [isLogget]);

  return (
    <div className="auth-page">
      <h3>Регистрация</h3>
      <form onSubmit={hendlesupmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id={"email"}
              type="email"
              name={"email"}
              required
              className={"validate"}
            />
            <label htmlFor={"email"}>Email</label>
          </div>
          <div className="input-field col s12">
            <input
              id={"password"}
              type="password"
              name={"password"}
              required
              autoComplete="true"
              className={"validate"}
            />
            <label htmlFor={"password"}>Password</label>
          </div>
        </div>
        <div className="row">
          <button className={"wawes-effect wawes-light btn  blue"}>
            {isloading ? "Loading..." : "Регистрация"}
          </button>
          <Link to="/login" className={"btn-outline btn-regist"}>
            Уже есть аккаунта{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistryPage;

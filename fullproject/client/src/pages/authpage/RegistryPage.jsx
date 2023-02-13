import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./authpage.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { authurl, BASEURL } from "../../utils/apiurl";

const RegistryPage = () => {
  const navigate = useNavigate();

  const hendlesupmit = (e) => {
    e.preventDefault();
    const userobj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(BASEURL + authurl.REGISTRATION, userobj)
      .then((res) => {
        toast.success(`${res.data.message}`);
        navigate('/')
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });

    e.target.reset();
  };

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
            Регистрация
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

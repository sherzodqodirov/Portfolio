import React from "react";
import { Formik } from "formik";
import "./login.scss";
import axios from "axios";

const Login = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{ phoneNumber: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            axios.post("https://cartestwebapp.herokuapp.com/employee/login",values)
            .then(res=>localStorage.setItem('token',res.data.data.token))
            .catch(er=>console.log(er.message))
            setSubmitting(false);
          }, 400);
         
        }}
        
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="text-center mt-5"
          >
            <div className="mt-5 mb-4">
              <input
                required
                type="text"
                name="phoneNumber"
                placeholder="phone number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
                className="inputfrom"
              />
              {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
            </div>
            <div className=" mb-4">
              <input
                required
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="inputfrom"
              />
              {errors.password && touched.password && errors.password}
            </div>
            <button
              className="btn btn-success"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

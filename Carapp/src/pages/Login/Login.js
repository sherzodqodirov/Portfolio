import React from "react";
import { Formik } from "formik";
import "./login.scss";

const Login = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{ number: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
             console.log(values);
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
                type="number"
                name="number"
                placeholder="phone number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
                className="inputfrom"
              />
              {errors.number && touched.number && errors.number}
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

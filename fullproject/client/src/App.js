import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegistryPage from "./pages/authpage/RegistryPage";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/authpage/LoginPage";
import HomePage from "./pages/homepage/HomePage";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchtoken } from "./redux/authuser/reducer";

function App() {
  const disopatch = useDispatch();

  const { token } = useSelector((state) => state.userdata.user);

  useEffect(() => {
    if (token !== null) {
      disopatch(fetchtoken(localStorage.getItem("TOKENUSER")));
    }
  }, [token]);


  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/registration"} element={<RegistryPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route index element={token ? <HomePage />: <Navigate to="/login"/>} />
      </Route>
    </Routes>
  );
}

export default App;

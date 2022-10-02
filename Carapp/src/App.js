import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Layout2 from "./pages/Layout2";
import "./App.scss";

const Home = lazy(() => import("./pages/Home/Home"));
const Cartype = lazy(() => import("./pages/Cartype/Cartype"));
const Layout = lazy(() => import("./pages/Layout"));
const Login = lazy(() => import("./pages/Login/Login"));
const Errorpage = lazy(() => import("./pages/Errorpage/Errorpage"));

function App() {
  const [token, settoken] = useState(false);

  useEffect(() => {
    localStorage.getItem("token") && settoken(localStorage.getItem("token"));
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {token ? (
            <Route path="/coreadmin" element={<Layout2 />}></Route>
          ) : (
            <Route path="/login" element={<Login settoken={settoken} />} />
          )}

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/:carid" element={<Cartype />} />
          </Route>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

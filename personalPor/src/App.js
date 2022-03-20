import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import WorksPage from "./components/WorksPage/WorksPage";
import Blog from "./components/Blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return ( 
    <BrowserRouter>
      <Fragment>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/worksPage" element={<WorksPage/>} />
          <Route  path="/blog" element={<Blog/>} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

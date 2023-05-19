import React from "react";
import { AllPages } from "../Data";
import { Route, Routes } from "react-router-dom";
import LayoutCore from "../components/LayoutCore";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutCore/>}>
        {AllPages.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;

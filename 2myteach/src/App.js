import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./components/LayoutMain";
import AdminPage from "./pages/AdminPage";
import ClientPage from "./pages/ClientPage";

function App() {
  return (
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<LayoutMain/>}>
                <Route index element={<AdminPage/>}/>
                <Route path="client" element={<ClientPage/>}/>
         </Route>
       </Routes>
       </BrowserRouter>
    );
}

export default App;

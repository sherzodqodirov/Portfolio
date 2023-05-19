import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutCore from "./components/LayoutCore";
import AppRouter from "./pages/AppRouter";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
           <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

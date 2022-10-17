import React, {lazy, Suspense, useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Layout2 from "./pages/Layout2";
import "./App.scss";
import Questuin from "./pages/question/Questuin";


const Home = lazy(() => import("./pages/Home/Home"));
const Cartype = lazy(() => import("./pages/Cartype/Cartype"));
const Carinfo = lazy(() => import("./pages/carinfo/Carinfo"));
const Layout = lazy(() => import("./pages/Layout"));
const Login = lazy(() => import("./pages/Login/Login"));
const Corepage=lazy(()=>import("./pages/corepage/Corepage"));
const News=lazy(()=>import("./pages/news/News"));
const Errorpage = lazy(() => import("./pages/Errorpage/Errorpage"));

function App() {
    const [token, settoken] = useState(false);

    useEffect(() => {
        localStorage.getItem("token") && settoken(localStorage.getItem("token"));
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {token ? (
                        <Route path="/" element={<Layout2 settoken={settoken}/>}>
                             <Route  path='coreadmin' element={<Corepage/>}/>
                            <Route path='elonlar' element={<News/>}/>
                            <Route path='savolar' element={<Questuin/>}/>
                        </Route>
                    ) : (
                        <Route path="/login" element={<Login settoken={settoken}/>}/>
                    )}

                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="category/cars" element={<Cartype/>}/>
                        <Route path="category/cars/:carid" element={<Carinfo/>}/>
                    </Route>

                    <Route path="*" element={<Errorpage/>}/>

                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;

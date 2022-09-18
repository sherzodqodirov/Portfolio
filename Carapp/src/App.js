import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Loading from './components/Loading/Loading';

const Home=lazy(()=>import('./pages/Home/Home'))
const Layout=lazy(()=>import('./pages/Layout'))
const Login=lazy(()=>import('./pages/Login/Login'))

function App() {

  return (
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </Suspense>
  </BrowserRouter>
  )
}

export default App;

import React, {lazy, Suspense, useEffect, useState} from "react";
import axios from "axios";
import Menu from "./Menu/Menu"
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import "./App.css"
const Home=lazy(()=>import("./Home/Home"));
const Post=lazy(()=>import("./Post/Post"))
const LoginPage=lazy(()=>import("./loginPage/LoginPage"))
const NotFount=lazy(()=>import("./NotFound/NotFount"))
function App() {
const [user,setUser]=useState("")

//     const fetchEmails = async () => {
//         const headers = {
//             'Content-Type': 'application/x-www-form-urlencoded',
//              'Accept': 'application/json',
//             '_username':'user_task&_password=user_task&_subdomain=toko'
//
//         };
//       const response=await axios.post('https://toko.ox-sys.com/security/auth_check\n',{headers})
//         const data=await response.data
//         console.log(data)
//     }
//     // Username: user_task
//     // Password: user_task
//     // Subdomain: toko
//
// useEffect(()=>{
//     fetchEmails()
// },[])

const inputValue=(val)=>{
    console.log(val)
}
    const googlevar=(a)=>{
        setUser(a)
    }

  return (
    <>
        <BrowserRouter>
            <Menu user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<Suspense fallback={<>Loading...</>}><Home/></Suspense>}/>
                 <Route path="/login" element={<Suspense fallback={<>Loading...</>}>{user ? <Navigate to="/"/> :<LoginPage googlevar={googlevar} inputValue={inputValue}/>}</Suspense>} />
                <Route path="/post/:id" element={<Suspense fallback={<>Loading...</>}> {user ? <Post/> :<Navigate to="/login"/>} </Suspense>}/>
                <Route path="*" element={<NotFount/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

import React,{useState} from 'react';
import {Routes,Route,Navigate} from "react-router-dom";
import P_information from "./pages/p_information/P_information";
import LoginPage from "./pages/loginpage/LoginPage";
import Signup from "./pages/signup/Signup";

const AppRouter = () => {
    const [userid, setuserid] = useState(true);

    return  userid ?
            (
                <P_information/>
            ) : (
                <Routes>
                    <Route  path='loginid' element={<Signup/>}/>
                    <Route path='*' element={<Navigate to='loginid'/>} replace/>
                </Routes>
            )
};

export default AppRouter;

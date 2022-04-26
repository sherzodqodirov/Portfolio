import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import Login from "./Login";
import Chat from "./Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    console.log(user)

    return user ? (
            <Routes>
                {/*private*/}
                <Route exat={true} path={CHAT_ROUTE} element={<Chat/>}/>
                <Route
                    path="*"
                    element={<Navigate to={CHAT_ROUTE} replace/>}
                />
            </Routes>
        ) :
        (
            <Routes>
                {/*public*/}
                <Route exact={true} path={LOGIN_ROUTE} element={<Login/>}/>
                <Route
                    path="*"
                    element={<Navigate to={LOGIN_ROUTE} replace/>}
                />
            </Routes>
        )
};

export default AppRouter;

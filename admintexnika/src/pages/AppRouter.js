import React, {useState, useEffect, lazy, Suspense} from "react";
import {AllPages} from "../Data";
import {Navigate, Route, Routes} from "react-router-dom";
import LayoutCore from "../components/LayoutCore";
import Loading from "../components/Loading";

const LoginPage = lazy(() => import('./LoginPage'))
const AppRouter = () => {
    const [user, setUser] = useState(false);

    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/login" element={user ? <Navigate to={'/'}/> : <LoginPage setUser={setUser}/>}/>
                <Route path="/" element={<LayoutCore/>}>
                    {AllPages.map((item, index) => (
                        <Route key={index} path={item.path}
                               element={user ? item.component : <Navigate to={"/login"}/>}/>
                    ))}
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;

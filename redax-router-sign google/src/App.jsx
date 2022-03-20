import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBlogs from "./components/AddBlogs/AddBlogs";
import Navbar from "./layout/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import { signInWithGoogle } from "./components/store/auth/auth-action";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home/Home";
import Greeting from "./components/Greeting/Greeting";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(signInWithGoogle());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {isLogged && user?.name && <Navbar />}
      <Routes>
        {isLogged && (
          <Route path="/">
            <Route index element={<Home />} />
            {user?.name && <Route path="add-blogs" element={<AddBlogs />} />}
            {user?.name && <Route path="test" element={<Greeting />} />}
            <Route path="/sign-in" element={<Signin />} />
          </Route>
        )}

        {isLoading && "Loading..."}
        {!isLoading && <Route path="*" element={<NotFound />} />}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

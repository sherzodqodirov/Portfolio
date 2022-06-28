import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { getphotos } from "./redux/photoSlice/reducer";

function App() {
  const dispatch = useDispatch();
  const photoitem = useSelector((state) => state.gallery.photodata);
  const isloading = useSelector((state) => state.gallery.isloading);

  useEffect(() => {
    dispatch(getphotos());
  }, [dispatch]);

  return (
    <div className="App container text-center">
      <h2 className="text-center mt-2 fw-bold">Photo Gallery </h2>
        <hr/>
    {isloading ? <h3>Loading...</h3>:(
      photoitem.map(item=>(
         <img className="m-3 " key={item.id} src={item.download_url} alt={item.author} width='300' height='300' />
      
      ))
    )}
    </div>
  );
}

export default App;

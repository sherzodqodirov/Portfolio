import React from "react";
import "./App.scss";
import { useGetPhotoQuery } from "./redux/api/api";

function App() {
 
  const {data,isLoading,isError}=useGetPhotoQuery(20)
console.log(isError);
  return (
    <div className="App container text-center">
      <h2 className="text-center mt-2 fw-bold">Photo Gallery </h2>
        <hr/>
     {isLoading ? <h3>Loading...</h3>:(
      isError ? <h3>Error</h3>:(
        data?.map(item=>(
          <img className="m-3 " key={item.id} src={item.download_url} alt={item.author} width='300' height='300' />
       
       ))
      )
     
    )} 
    </div>
  );
}

export default App;

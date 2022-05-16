import React from "react";

function Home({backcolor}) {
    
  return (
    <div className="text-center mt-5" style={{background:backcolor, height:"100vh"}} onContextMenu={(e)=> e.preventDefault()}>
      <h1>Home page</h1>
    </div>
  );
}

export default Home;

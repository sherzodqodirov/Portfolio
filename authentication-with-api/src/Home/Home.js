import React from "react";
import {posts} from "../data";
import Cards from "../Cards/Cards";
const Home=()=>{
    return(
        <div className='container'>
          <div className="row">
              <Cards posts={posts}/>
          </div>
        </div>
    )
}
export default Home;
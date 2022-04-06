import React from "react";
import {Link} from "react-router-dom";

const Menu=({user,setUser})=>{
    const handleckick=()=>{
        setUser("");
    }
    console.log(user)
    return(
        <nav className="navbar navbar-light bg-dark">
            <div className="container ">
                <Link to="/" className="navbar-brand text-white"><h2>Product</h2></Link>
                {user ? (<ul className="nav ms-auto d-flex align-items-center">
                        <li className="nav-item text-white">
                            <img src={user. imageUrl}  className="avatar" alt="avatar"/>
                        </li>
                        <li className="nav-item text-white mx-4">{user.name}</li>
                        <Link to="/login"  ><button className="btn btn-primary" onClick={handleckick}>logout</button>  </Link>
                    </ul>
                    ) : (
                    <Link to="login" className="btn btn-primary" >login </Link>
                )}
                </div>
        </nav>
    )
}
export default Menu;
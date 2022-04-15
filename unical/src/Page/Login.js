import React, {useEffect} from 'react';
import Regimg from "../image/Regimg.png"
import {Link} from "react-router-dom";

const Login = () => {


    const handleSubmit = (even) => {
        even.preventDefault()
        const Phonename={
            Phone:even.target.inputPhone.value,
        }
        even.target.reset();
        console.log(Phonename)

    }

    return (
        <div className="boxregistor d-flex">
            <div className="regimg">
                <img src={Regimg} alt="image"/>
            </div>
            <div className="registorform ">
                <h1>Welcome to ERP! 👋🏻</h1>
                <p>Please enter your company details and start the adventure</p>

                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="inputPhone" className="form-label">Phone number</label>
                        <input type="number" className="form-control" id="inputPhone" placeholder="Phone number"/>
                    </div>

                    <div className="col-12 btnLogin" >
                        <button type="submit" className="w-100 btn btn-primary">Login</button>
                    </div>
                </form>
                <h5>New on our platform? <Link to="/register">Create an account</Link></h5>
            </div>
        </div>
    );
};

export default Login;

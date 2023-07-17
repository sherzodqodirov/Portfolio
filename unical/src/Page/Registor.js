import React, {useEffect} from 'react';
import Regimg from "../image/Regimg.png"
import axios from "axios";
import {Link} from "react-router-dom";

const Registor = () => {


    const handleSubmit = (even) => {
        even.preventDefault()
        const data = {
            firstname: even.target.firstname.value,
            lastname: even.target.lastname.value,
            email: even.target.email.value,
            password: even.target.password.value,
            profilePicture: even.target.file.files[0],
        }
        const formdata = new FormData()
        for (let key in data) {
            formdata.append(`${key}`, data[key])
        }



        axios
            .post('http://localhost:5000/auth/register', formdata)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.response.data));

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
                        <label htmlFor="firstname" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="First name"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="lastname" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastname"
                               placeholder="Last name"/>
                    </div>
                     <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"
                               placeholder="email"/>
                    </div>
                     <div className="col-12">
                        <label htmlFor="inputFullname" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password"
                               placeholder="password"/>
                    </div>
                     <div className="col-12">
                        <label htmlFor="file" className="form-label">Avatar </label>
                        <input type="file" className="form-control" id="file"
                               />
                    </div>
                    <div className="col-12 btnRegistor">
                        <button type="submit" className="w-100 btn btn-primary">Registor</button>
                    </div>
                </form>
                <h5>Already in our platform? <Link to="/login">Login</Link></h5>
            </div>
        </div>
    );
};

export default Registor;

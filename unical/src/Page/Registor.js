import React, {useEffect} from 'react';
import Regimg from "../image/Regimg.png"
import axios from "axios";
import {Link} from "react-router-dom";

const Registor = () => {



    const handleSubmit = (even) => {
        even.preventDefault()
        const Phonename={
            Phone:even.target.inputPhone.value,
            Fullname:even.target.inputFullname.value,
        }
        even.target.reset();
        console.log(Phonename)

        const data = "{\r\n    \"phoneNumber\":\"+998994958186\",\r\n    \"fullName\":\"Omonov Qahramon\"\r\n}";

        axios({
            method: 'post',
            url: 'localhost:3000/register',
            redirect: 'follow',
            body : data
        })
            .then( function (response) {
                console.log( JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

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
                    <div className="col-12">
                        <label htmlFor="inputFullname" className="form-label">Full name</label>
                        <input type="text" className="form-control" id="inputFullname"
                               placeholder="Full name"/>
                    </div>
                    <div className="col-12 btnRegistor" >
                        <button type="submit" className="w-100 btn btn-primary">Registor</button>
                    </div>
                </form>
                <h5>Already in our platform? <Link to="/login">Login</Link></h5>
            </div>
        </div>
    );
};

export default Registor;

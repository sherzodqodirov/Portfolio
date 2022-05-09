import React from 'react';
import './signup.scss'
import Loginheader from "../../components/loginheader/Loginheader";
import logo1 from "../../icons/logo1.png";
import Socialmedia from "../../components/socialmedia/Socialmedia";

const Signup = () => {

    const handlPasswordID = (e) => {

        e.preventDefault();
        const idsignup = {
            idstudent: e.target.idstudent.value,
            idpassword: e.target.idpassword.value,
        }
        console.log(idsignup)
        e.target.reset();
    }
    return (
        <>
            <Loginheader/>
            <div className="signupcontent">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="logo1">
                                <img className='w-100' src={logo1} alt="logo1"/>
                            </div>
                            <div className="boxform">
                                <form onSubmit={handlPasswordID} className='loginform'>
                                    <label htmlFor="idstudent"> ID номер</label>
                                    <input className='w-100 styin' type='number' id="idstudent"/>
                                    <label htmlFor="idpassword">Пароль</label>
                                    <input className='w-100 styin' type='password' id="idpassword"/>
                                    <div className="formbtn">
                                        <button className='btn btn-light  btnf'>Назад</button>
                                        <button className='btn btn-primary  btnf'>Ок</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Socialmedia/>
        </>
    );
};

export default Signup;

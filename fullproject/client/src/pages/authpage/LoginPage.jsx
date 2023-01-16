import React from 'react';
import './authpage.scss'
import {Link} from "react-router-dom";
import axios from "axios";
const RegistryPage = () => {
    const hendlesupmit = (e) => {
        e.preventDefault()
        const userobj={
            email:e.target.email.value,
            password:e.target.password.value
        }
        const loginhandl = async () => {
            try {
                await axios.post('http://localhost:5000/api/auth/login',userobj)
                    .then(res=> console.log(res.data))
            } catch (e) {
                console.log(e)
            }
        }
        loginhandl()
        e.target.reset()
    }
    return (

            <div className="auth-page">
                <h3>Aвторизация</h3>
                <form onSubmit={hendlesupmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id={'email'} type="email" name={'email'} className={'validate'}/>
                            <label htmlFor={'email'}>Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input id={'password'} type="password" name={'password'} autoComplete={true} className={'validate'}/>
                            <label htmlFor={'password'}>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className={'wawes-effect wawes-light btn  blue'}>Войти</button>
                        <Link to="/registration" className={'btn-outline btn-regist'}>Нет аккаунта </Link>
                    </div>
                </form>
            </div>

    );
};

export default RegistryPage;
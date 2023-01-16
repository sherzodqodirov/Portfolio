import React from 'react';
import {Link} from "react-router-dom";
import './authpage.scss'
import axios from "axios";

const RegistryPage = () => {
    const hendlesupmit = (e) => {
        e.preventDefault()
        const userobj = {
            email: e.target.email.value,
            password: e.target.password.value
        }
         const registhandl = async () => {
             try {
                await axios.post('http://localhost:5000/api/auth/registration',userobj)
                    .then(res=> console.log(res.data))
             } catch (e) {
                 console.log(e)
             }
         }
          registhandl()
        e.target.reset()
    }
    return (
        <div className="auth-page">
            <h3>Регистрация</h3>
            <form onSubmit={hendlesupmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id={'email'} type="email" name={'email'} required className={'validate'}/>
                        <label htmlFor={'email'}>Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id={'password'} type="password" name={'password'} required autoComplete="on"
                               className={'validate'}/>
                        <label htmlFor={'password'}>Password</label>
                    </div>
                </div>
                <div className="row">
                    <button className={'wawes-effect wawes-light btn  blue'}>Регистрация</button>
                    <Link to="/login" className={'btn-outline btn-regist'}>Уже есть аккаунта </Link>
                </div>
            </form>
        </div>
    );
};

export default RegistryPage;
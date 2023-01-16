import React from 'react';
import './authpage.scss'
const AuthPage = () => {
    return (<div>
            <div className="container">
                <div className="auth-page">
                <h3>Aвторизация</h3>
                <form >
                    <div className="row">
                        <div className="input-field col s12">
                            <input id={'email'} type="email" name={'email'} className={'validate'}/>
                            <label htmlFor={'email'}>Email</label>
                        </div>
                     <div className="input-field col s12">
                            <input id={'password'} type="password" name={'password'} className={'validate'}/>
                            <label htmlFor={'password'}>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className={'wawes-effect wawes-light btn  blue'}>Войти</button>
                        <a href="/" className={'btn-outline btn-regist'}>Нет аккаунта </a>
                    </div>
                </form>
                </div>

                <div className="auth-page">
                <h3>Регистрация</h3>
                <form >
                    <div className="row">
                        <div className="input-field col s12">
                            <input id={'email'} type="email" name={'email'} className={'validate'}/>
                            <label htmlFor={'email'}>Email</label>
                        </div>
                     <div className="input-field col s12">
                            <input id={'password'} type="password" name={'password'} className={'validate'}/>
                            <label htmlFor={'password'}>Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className={'wawes-effect wawes-light btn  blue'}>Регистрация</button>
                        <a href="/" className={'btn-outline btn-regist'}>Уже есть аккаунта </a>
                    </div>
                </form>
                </div>
            </div>
        </div>);
};

export default AuthPage;
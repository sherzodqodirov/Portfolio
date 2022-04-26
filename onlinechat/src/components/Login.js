import React, {useContext} from 'react';
import {Context} from "../index";
import firebase from "firebase/compat";

const Login = () => {

    const {auth} = useContext(Context);

    const login = async () => {
        const provider=new firebase.auth.GoogleAuthProvider();
        const {user}=await auth.signInWithPopup(provider);
        console.log(user);
    }

    return (
        <div className='text-center pt-5'>
            <button onClick={login} className='mt-5 btn border-3 btn-outline-primary'><h1>sign googel</h1></button>
        </div>
    );
};

export default Login;

import React from 'react';
import GoogleLogin from "react-google-login";
const Login = ({googlevar}) => {
    const clientId='361144137745-q8qm8res41lnd712cr1hfp26q4hcaoj9.apps.googleusercontent.com';
    const onSuccess=res=>{
        googlevar(res.profileObj)
    }
    const onFailure=res=>{
        console.log("Login failed",res.profileObj)
    }
    return (
        
            <GoogleLogin className='me-3'
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
        
    );
};

export default Login;

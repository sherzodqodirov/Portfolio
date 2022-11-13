import React from 'react';
import {GoogleLogout} from "react-google-login";
const Logoaut = () => {
    const clientId='361144137745-q8qm8res41lnd712cr1hfp26q4hcaoj9.apps.googleusercontent.com';
    const onSuccess=()=>{
        console.log("Logout success")
    }
    return (
        
       <GoogleLogout className='ms-3'
           clientId={clientId}
       onLogoutSuccess={onSuccess}/>
        
    );
};

export default Logoaut;

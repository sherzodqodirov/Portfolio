import React, {useEffect, useState} from "react";
import {gapi} from "gapi-script"
import Login from "./Login";
import Logout from "./Logout";
function LoginPage({inputValue,googlevar}) {

    const clientId='361144137745-q8qm8res41lnd712cr1hfp26q4hcaoj9.apps.googleusercontent.com';

    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:""
            })
        };
        gapi.load("client:auth2",start);
    },[])






    return (
        <div className="container text-center mt-5 pt-5">
          <div className="row">
            <div className="col-4 offset-4">
            <div className="card py-5 bg-danger">
            <div className="card-body">
            <Login googlevar={googlevar}/>
            <Logout/>       
            </div>     
          </div>
            </div>
          </div>
        </div>
    );
}
export default LoginPage;
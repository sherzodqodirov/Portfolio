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



//      1-usul
//   const[inputEmail,setinputEmail]= useState("");
//   const[inputUsername,setinputUsername]= useState("");
//
//   const input_1=(event)=>{
//       setinputEmail(event.target.value)
//   }
// const input_2=(event)=>{
//       setinputUsername(event.target.value)
//   }
// const handleSubmit=(event)=>{
//       event.preventDefault();
//       const addemails={
//           email:inputEmail,
//           user:inputUsername,
//       }
//     inputValue(addemails);
// }

        // 2-usul
     // const handleSubmit=(event)=>{
     //     event.preventDefault();
     //     const newEmailuser={
     //         email:event.target.inputEmail.value,
     //         username:event.target.inputUsername.value,
     //     }
     //     inputValue(newEmailuser)
     //     event.target.reset()
     // }


    return (
        <div className="container text-center mt-5 pt-5">
           <Login googlevar={googlevar}/>
            <Logout/>
            {/*<div className="row">*/}
            {/*    <div className="col-12 col-lg-6 py-5 px-3 ">*/}
            {/*       <div className="d-flex flex-column px-5">*/}
            {/*           <button className="btn btn-danger py-4">Google</button>*/}
            {/*           <button className="btn btn-primary my-1 py-4">Facebook</button>*/}
            {/*           <button className="btn btn-dark py-4">Github</button>*/}
            {/*       </div>*/}
            {/*    </div>*/}
            {/*    <div className="col-12 col-lg-1 d-flex align-items-center  "><h1 className="text-center">or</h1></div>*/}

            {/*    <div className="col-12 col-lg-5 ">*/}
            {/*<form className="mt-5 mb-5" onSubmit={handleSubmit} >*/}
            {/*    <div className="row mb-3">*/}
            {/*        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>*/}
            {/*        <div className="col-sm-10">*/}
            {/*            <input type="text"   className="form-control" placeholder="exampl@gmail.com" id="inputEmail"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="row mb-3">*/}
            {/*        <label htmlFor="inputUsername" className="col-sm-2 col-form-label">User name</label>*/}
            {/*        <div className="col-sm-10">*/}
            {/*            <input type="text"   className="form-control" placeholder="Exampl01" id="inputUsername"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <button   type="submit" className="btn btn-primary mt-4 px-4 py-2">Sign in</button>*/}
            {/*</form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
export default LoginPage;
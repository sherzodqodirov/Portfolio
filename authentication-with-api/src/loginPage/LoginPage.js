import React, {useState} from "react";

function Forma({inputValue}) {
    const [loading,setloading]=useState(false);


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
     const handleSubmit=(event)=>{
         event.preventDefault();
         const newEmailuser={
             email:event.target.inputEmail.value,
             username:event.target.inputUsername.value,
         }
         inputValue(newEmailuser)
         event.target.reset()
     }

    return (
            <form className="mt-5 mb-5" onSubmit={handleSubmit} >
                <div className="row mb-3">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text"   className="form-control" placeholder="sherzod@gmail.com" id="inputEmail"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputUsername" className="col-sm-2 col-form-label">User name</label>
                    <div className="col-sm-10">
                        <input type="text"   className="form-control" placeholder="Sherzod01" id="inputUsername"/>
                    </div>
                </div>

                <button   type="submit" className="btn btn-primary mt-4 px-4 py-3">Sign in</button>
            </form>
    );
}
export default Forma;
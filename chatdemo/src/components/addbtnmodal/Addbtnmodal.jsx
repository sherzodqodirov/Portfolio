import React from 'react';

const Addbtnmodal = () => {

    const addnewuser = (e) => {
        e.preventDefault()
        const newuser = {
            username: e.target.username.value,
            phonenum: e.target.phonenum.value
        }
        alert(`name:${newuser.username}\n phone number:${newuser.phonenum}`)
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add user</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={addnewuser}>
                        <div className="modal-body">

                            <input type="text" id='username' className='d-block' placeholder='user name'/>
                            <input type="number" id='phonenum' className='d-block mt-4' placeholder='phone number'/>

                        </div>
                        <div className="modal-footer">
                            <button  className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
};

export default Addbtnmodal;
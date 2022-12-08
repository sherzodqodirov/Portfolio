import React from 'react';
import {useFormik} from 'formik';

const Addadminmodal = () => {

    const formik = useFormik({
        initialValues: {
            fullname:'',
            phonenum: '',
            password: '',
            roleid: '631836e3e171de6c5c96186f',
        },
        onSubmit: values => {
            console.log(values);
            formik.resetForm();
        },
    });
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Admin qoshish</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="modal-body">

                            <input
                                id='fullname'
                                type="text"
                                required
                                placeholder='Full Name'
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                                className='d-block rounded-1 border-danger'/>

                            <input
                                id='phonenum'
                                type="number"
                                required
                                placeholder='phone number'
                                onChange={formik.handleChange}
                                value={formik.values.phonenum}
                                className='d-block mt-3 rounded-1 border-danger'/>

                            <input
                                id='password'
                                type="password"
                                placeholder='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                required
                                className='d-block mt-3 rounded-1 border-danger'/>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Addadminmodal;
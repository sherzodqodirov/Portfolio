import React, {useState} from 'react';
import {FiCamera} from "react-icons/fi"
import {useFormik} from "formik";
const Categormadal = () => {


    const formik=useFormik({
        
        initialValues:{
            marka:"",
            file:null,
        },
        onSubmit: values => {
            console.log(values);
            formik.resetForm();
        },
    })
    return (
        <div className="modal " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog  modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Kategoriya qo’shish</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <label className='d-block' htmlFor="marka"><h6>Markasi</h6></label>
                                <input
                                    required
                                    name="marka"
                                    onChange={formik.handleChange}
                                    value={formik.values.marka}
                                    className='w-100'
                                    id='marka'
                                    type="text"
                                    placeholder=' Kiriting'/>
                            </div>
                            <div className="col-lg-6 col-12 ">
                                <div className="input__wrapper">
                                    <h6 className='filtext'>Rasm 360 ichki makon</h6>
                                    <input
                                        required
                                        onChange={e=> formik.setFieldValue("file",e.target.files[0])}
                                        name="file" type="file" id="file"
                                        className="input input__file"
                                        accept=".jpg, .jpeg, .png"
                                        multiple />
                                        <label htmlFor="file" className="input__file-button">
                                            <span className="input__file-icon-wrapper">
                                                <FiCamera size='20px'/></span>
                                            <span >{formik.values.file==null? "Yuklash":formik.values.file.name}</span>
                                        </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Saqlash</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
);
};

export default Categormadal;
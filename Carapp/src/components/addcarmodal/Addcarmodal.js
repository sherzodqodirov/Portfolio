import React from 'react';
import {FiCamera} from "react-icons/fi";

const Addcarmodal = () => {
    return (
        <div className="modal " id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog  modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Mashina qo’shish</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-6 col-12">

                                    <div>
                                        <h6 className='filtext'>Markasi</h6>
                                        <select name='markasi' id='marka2' className="form-select" aria-label="Default select example">
                                            <option value="CHEVROLET">CHEVROLET</option>
                                        </select>
                                    </div>

                                    <div className='mt-4'>
                                        <label className='d-block ' htmlFor="Motor"><h6>Motor</h6></label>
                                        <input
                                            required
                                            name="motor"
                                            className='w-100 inpcor'
                                            id='Motor'
                                            type="text"
                                            placeholder=' Kiriting'/>
                                    </div>

                                    <div className='mt-4'>
                                        <label className='d-block ' htmlFor="Color"><h6>Color</h6></label>
                                        <input
                                            required
                                            name="color"
                                            className='w-100 inpcor'
                                            id='Color'
                                            type="text"
                                            placeholder=' Kiriting'/>
                                    </div>

                                    <div className='mt-4'>
                                        <label className='d-block ' htmlFor="Gearbook"><h6>Gearbook</h6></label>
                                        <input
                                            required
                                            name="gearbook"
                                            className='w-100 inpcor'
                                            id='Gearbook'
                                            type="text"
                                            placeholder=' Kiriting'/>
                                    </div>

                                    <div className="input__wrapper mt-4">
                                        <h6 className='filtext'>Rasm 360 ichki makon</h6>
                                        <input
                                            required
                                            name="fileimg1" type="file" id="input__file1"
                                            className="input input__file"
                                            accept=".jpg, .jpeg, .png"
                                            multiple/>
                                        <label htmlFor="input__file1" className="input__file-button">
                                            <span className="input__file-icon-wrapper">
                                                <FiCamera size='20px'/></span>
                                            <span></span>
                                        </label>
                                    </div>

                                    <div className='mt-4'>
                                        <h6>Deseription</h6>
                                        <div className="form-floating">
                                        <textarea name='deseription' className="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea2" ></textarea>
                                            <label htmlFor="floatingTextarea2">Mazmuni kiriting</label>
                                        </div>
                                    </div>

                                </div>


                                <div className="col-lg-6 col-12 ">

                                    <div>
                                        <h6 className='filtext'>Tanirovkasi</h6>
                                        <select name='tanirovkasi' id='marka2' className="form-select" aria-label="Default select example">
                                            <option value="Yoq">Yoq</option>
                                            <option value="Bor">Bor</option>
                                        </select>
                                    </div>

                                    <div className='mt-4'>
                                        <label className='d-block ' htmlFor="Year"><h6>Year</h6></label>
                                        <input
                                            required
                                            name="year"
                                            className='w-100 inpcor'
                                            id='Year'
                                            type="number"
                                            placeholder=' Kiriting'/>
                                    </div>

                                    <div className='mt-4'>
                                        <label className='d-block ' htmlFor="Distance"><h6>Distance</h6></label>
                                        <input
                                            required
                                            name="distance"
                                            className='w-100 inpcor'
                                            id='Distance'
                                            type="number"
                                            placeholder=' Kiriting'/>
                                    </div>

                                    <div className='mt-4'>
                                        <label className='d-block ' htmlFor="Narxi"><h6>Narxi</h6></label>
                                        <input
                                            required
                                            name="narxi"
                                            className='w-100 inpcor'
                                            id='Narxi'
                                            type="number"
                                            placeholder=' Kiriting'/>
                                    </div>

                                    <div className="input__wrapper mt-4">
                                        <h6 className='filtext'>Rasm 360 tashqi makon</h6>
                                        <input
                                            required
                                            name="fileimg2" type="file" id="input__file2"
                                            className="input input__file"
                                            accept=".jpg, .jpeg, .png"
                                            multiple/>
                                        <label htmlFor="input__file2" className="input__file-button">
                                            <span className="input__file-icon-wrapper">
                                                <FiCamera size='20px'/></span>
                                            <span></span>
                                        </label>
                                    </div>

                                    <div className="input__wrapper mt-4">
                                        <h6 className='filtext'>Modeli turi uchun rasm </h6>
                                        <input
                                            required
                                            name="fileimg3" type="file" id="input__file3"
                                            className="input input__file"
                                            accept=".jpg, .jpeg, .png"
                                            multiple/>
                                        <label htmlFor="input__file3" className="input__file-button">
                                            <span className="input__file-icon-wrapper">
                                                <FiCamera size='20px'/></span>
                                            <span></span>
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

export default Addcarmodal;
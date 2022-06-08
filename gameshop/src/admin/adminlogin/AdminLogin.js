import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import {RiAdminLine} from "react-icons/ri";
import 'react-toastify/dist/ReactToastify.css';
import './adminlogin.css';

const AdminLogin = ({setadreg}) => {
    const [usename, setusename] = useState('');
    const [parol, setparol] = useState('');
    const [lodd, setlodd] = useState(false);
    const navigate=useNavigate()

    const notify = () => toast("Wow so easy !");

    const handleonCh1 = (e) => {
        setusename(e.target.value)
    }
    const handleonCh2 = (e) => {
        setparol(e.target.value)
    }


    const handleClick = e => {
        e.preventDefault()

        setlodd(true)
        setTimeout(() => (
            setlodd(false)
        ), 2000)
        clearTimeout();
        axios({
            method: "POST",
            url: "https://game-shop-uz.herokuapp.com/api/auth/login",
            data: {
                "password": parol,
                "userName": usename
            }

        })
            .then(res => {
                console.log(res.data.token)
                localStorage.setItem('token',res.data.token)
                setadreg(true)
                navigate("/paneladmin")

            })
            .catch(err => {
                toast.error('Error !' + " " + err.message, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            })
        setparol('')
        setusename('')
    }

    return (
        <section className="intro">
            <div className="mask d-flex align-items-center ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">
                                    <div className="my-md-4">

                                        <h1 className="fw-bold mb-0">Admin</h1>

                                        <RiAdminLine className='my-5' size='70px'/>

                                        <form onSubmit={handleClick}>
                                            <div className="form-outline mb-5">
                                                <input type="text" id="typeEmail" required value={usename}
                                                       onChange={handleonCh1}
                                                       className="form-control form-control-lg"
                                                       placeholder='User name'/>
                                            </div>

                                            <div className="form-outline mb-5">
                                                <input type="password" id="typePassword" required value={parol}
                                                       onChange={handleonCh2}
                                                       className="form-control form-control-lg" placeholder='Password'/>
                                            </div>

                                            <button
                                                className="btn btn-primary btn-lg btn-rounded  border-0 gradient-custom text-body px-5"
                                                type="submit"> {lodd && (<div className="text-center mt-2">
                                                <div className="spinner-border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>)}
                                                Login
                                            </button>
                                            <ToastContainer
                                                position="top-center"
                                                autoClose={5000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                            />

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};

export default AdminLogin;

import React, {useEffect} from 'react';
import axios from "axios";
import './adminform.css'
import {allgames} from "../../redux/getallgames/reducer";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer, toast} from "react-toastify";

const AdminForm = () => {

    const dispatch = useDispatch()
    
    async function getallgames() {
        try {
            const res = await axios.get("https://game-shop-uz.herokuapp.com/api/auth/game")
            dispatch(allgames(res.data.data))
        } catch (e) {
            toast.error(e.message)
        }
    }


    const handleSub = (e) => {
        e.preventDefault()
        const datagame = {
            description: e.target.desc.value,
            gener: e.target.inputPassword4.value,
            imageUrl: e.target.inputAddress.value,
            name: e.target.inputEmail4.value,
            torrentUrl: e.target.downloadU.value,
            videoUrl: e.target.inputAddress2.value
        }


        async function postgame(datagame) {
            const res = await axios.post("https://game-shop-uz.herokuapp.com/api/admin/game/", datagame)
                .then(res => {
                    toast.success("Add game" + "  " + res.data.message)
                    getallgames()
                })
                .catch(er => toast.error(er.message))
        }

        postgame(datagame)
        e.target.reset()
    }


    return (<>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
        <h2 className='text-center mb-5'>Add game 🎮</h2>

        <form className="row g-3" onSubmit={handleSub}>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Name game</label>
                <input type="text" required className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Genre</label>
                <input type="text" required className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Image url</label>
                <input type="url" required className="form-control" id="inputAddress"/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Video url</label>
                <input type="url" required className="form-control" id="inputAddress2"
                />
            </div>
            <div className="col-12">
                <label htmlFor="downloadU" className="form-label">Download url</label>
                <input type="url" required className="form-control" id="downloadU"
                />
            </div>
            <div className="col-12">
                <label htmlFor="desc" className="form-label">Description</label>
                <textarea required className='form-control' id="desc"/>
            </div>

            <div className="col-12 text-end">
                <button className="btn btn-primary px-4 me-3">Add</button>
            </div>
        </form>
    </>);
};

export default AdminForm;

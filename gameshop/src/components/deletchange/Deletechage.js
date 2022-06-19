import React, {useState} from 'react';
import {BsFillPencilFill} from "react-icons/bs";
import {TiDelete} from "react-icons/ti";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import axios from "axios";
import {allgames} from "../../redux/getallgames/reducer";
import Changeform from "../changeform/Changeform";

const Deletechange = ({game}) => {
    const [ofcan,setofcan]=useState(false);
    const handlech = () => {
      setofcan(!ofcan);
    }
    const gameid=game.id;

    const dispatch = useDispatch()

    async function getallgames() {
        try {
            const res = await axios.get("https://game-shop-uz.herokuapp.com/api/auth/game")
            dispatch(allgames(res.data.data))
        } catch (e) {
            console.error(e.message)
        }
    }

    const handleClick = (gameid) => {
        async function deletgame(gameid) {
            const res = await axios.delete(`https://game-shop-uz.herokuapp.com/api/admin/game/${gameid}`)
                .then(res => {
                    toast.success('Delete game!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    getallgames()
                })
                .catch(er => console.error(er.message))
        }

        deletgame(gameid)
    }




    return (
        <div className="delchang d-flex flex-wrap ms-auto align-items-center">
            {ofcan ? (<Changeform game={game} className='ms-5'/>):null}
            <h6 onClick={handlech} className='liscur' >{ofcan ? "❌":<BsFillPencilFill size='20px' color='#508AFF'/>}</h6>
            <h6 onClick={() => handleClick(gameid)} className='ms-5 liscur'><TiDelete size='30px' color='#FF4040'/></h6>

        </div>

    );
};

export default Deletechange;

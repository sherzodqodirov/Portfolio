import React, {useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {allgames} from "../../redux/getallgames/reducer";

const Changeform = ({game}) => {
    const gameid = game.id
    const [namegame, setname] = useState(game.name)
    const [genrgame, setgener] = useState(game.gener)
    const [imggame, setimg] = useState(game.imageUrl)
    const [videogame, setvideo] = useState(game.videoUrl)
    const [downgame, setdown] = useState(game.torrentUrl)
    const [descgame, setdesc] = useState(game.description)

    const dispatch = useDispatch()

    async function getallgames() {
        try {
            const res = await axios.get("https://game-shop-uz.herokuapp.com/api/auth/game")
            dispatch(allgames(res.data.data))
        } catch (e) {
            toast.error(e.message)
        }
    }

    const handleinp1 = (e) => {
        e.preventDefault()
        setname(e.target.value)
    }
    const handleinp2 = (e) => {
        e.preventDefault()
        setgener(e.target.value)
    }
    const handleinp3 = (e) => {
        e.preventDefault()
        setimg(e.target.value)
    }
    const handleinp4 = (e) => {
        e.preventDefault()
        setvideo(e.target.value)
    }
    const handleinp5 = (e) => {
        e.preventDefault()
        setdown(e.target.value)
    }
    const handleinp6 = (e) => {
        e.preventDefault()
        setdesc(e.target.value)
    }

    const handleSub = (id, e) => {
        e.preventDefault()
        const gameinfo = {
            name: namegame,
            gener: genrgame,
            imageUrl: imggame,
            videoUrl: videogame,
            torrentUrl: downgame,
            description: descgame
        }
        console.log(gameinfo)
        console.log(id)

        async function gameput(id, gameinfo) {
            const res = await axios.put(`https://game-shop-uz.herokuapp.com/api/admin/game/${id}`, gameinfo)
                .then(res=>{
                    toast.success("the game has changed  "+res.data.message);
                    getallgames();
                })
                .catch(er=>toast.error(er.message))
        }
        gameput(id,gameinfo);
    }

    return (
        <div className="updata me-5"
        >
            <div className="offcanvas-body">
                <form onSubmit={(e) => handleSub(gameid, e)}>
                    <div className="  d-sm-flex  align-items-center ">
                        <input required value={namegame} onChange={handleinp1} type="text" className="form-control me-3 mb-3"
                               id="inname"
                               placeholder='Name game'/>

                        <input required value={genrgame} onChange={handleinp2} type="text" className="form-control mb-3"
                               id="ingener"
                               placeholder='gener'/>

                    </div>

                    <div className=" mb-3">
                        <input required type="url" value={imggame} onChange={handleinp3} className="form-control" id="inimgurl"
                               placeholder='image url'/>
                    </div>
                    <div className=" mb-3">
                        <input required type="url" value={videogame} onChange={handleinp4} className="form-control"
                               id="invideourl" placeholder='video url'/>
                    </div>

                    <div className=" mb-3">
                        <input required type="url" value={downgame} onChange={handleinp5} className="form-control"
                               id="indownurl" placeholder='download url'/>
                    </div>

                    <div className=" mb-3">
                        <input type="text" value={descgame} onChange={handleinp6} className="form-control"
                               id="indownurl" placeholder='description game'/>
                    </div>

                    <button className="btn btn-primary ">change</button>
                </form>
            </div>
        </div>
    );
};

export default Changeform;

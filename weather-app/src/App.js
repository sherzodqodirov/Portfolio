import React from "react";
import {getweather} from "./redux/weatherSlice/reducer";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Location from "./components/location/Location";
import Bottomin from "./components/bottomin/Bottomin";

function App() {

    const dispatch = useDispatch()
    const weather = useSelector(state => state.weather.weatherdata)
    const isloading = useSelector(state => state.weather.isloading)
    const error = useSelector(state => state.weather.error)


    const handlesub = (e) => {
        e.preventDefault()
        const val = e.target.search.value;
        dispatch(getweather(val))
        e.target.reset()
    }

    return (
        <div className="App">
            <form onSubmit={handlesub} className='form'>
                <input id='search' type="text" placeholder="state"/>
                <button>search</button>
            </form>
            {isloading ? (<h1>Loading...</h1>):(null)}
            {error===null ?(weather.length==0 ? (<h3>Search state</h3> ):  (<><Location/> <Bottomin/></>) ): (<h4>NO STATE :{error}</h4>)}
        </div>
    );
}

export default App;

import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getallproduct} from "../../redux/apiSlice/reducer";

const Home = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getallproduct())
    },[dispatch])

    return (
        <div>
            home
        </div>
    );
};

export default Home;

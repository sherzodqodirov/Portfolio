import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getallproduct} from "../../redux/allproductSlice/reducer";
import Corecard from "../../components/corecard/Corecard";

const Home = () => {
    const dispatch=useDispatch()
    const allproduct=useSelector(state => state.product.allproduct)
    const isloading=useSelector(state => state.product.isloading);
    useEffect(()=>{
        dispatch(getallproduct())
    },[dispatch])


    if (isloading) return <h3 className='text-center m-5'>Loading...</h3>
    if (allproduct.length===0) return <h3 className='text-center m-5'>No data</h3>
    return (
        <div className=' boxcore d-flex justify-content-around flex-wrap '>
            {allproduct.map(item=>(<Corecard  key={item.id} data={item} />))}
        </div>

    );
};

export default Home;

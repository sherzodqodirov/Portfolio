import React from 'react'
import {useDispatch} from "react-redux"
import { getmarkapaging } from '../../redux/Categorcar/reducer'


const Home = () => {

  const dispatch=useDispatch()
    
dispatch(getmarkapaging(4))  


  return (
    <div>Home</div>
  )
}

export default Home
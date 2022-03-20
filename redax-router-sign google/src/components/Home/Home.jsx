import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    const user=useSelector((state)=>state.auth.user);
    const navigate=useNavigate()
  return <> {user?.name ? <Blogs/>:navigate("/sign-in")}</>
  
}

export default Home;
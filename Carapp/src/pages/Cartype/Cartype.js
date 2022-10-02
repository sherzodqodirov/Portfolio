import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getbyidcar } from '../../redux/cartype/reduser'

const Cartype = () => {
    const {carid}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getbyidcar(carid))
    },[])
    
  return (
    <div>Cartype</div>
  )
}

export default Cartype
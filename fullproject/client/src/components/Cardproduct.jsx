import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteproduct } from '../redux/getallproduct/deleteproduct';
import { updateproduct } from '../redux/getallproduct/updateproduct';

const Cardproduct = ({data}) => {
const {status}=data
  const dispatch=useDispatch()
    const handledelet=(id)=>{
       dispatch(deleteproduct(id))
      }
 const handlesell=(data)=>{
  data={
    ...data,
    status:true,
  }
   dispatch(updateproduct(data))
      }

  return (
    <div className="row">
    <div className={`col s12 m6 offset-m2 itemproduct ${status ? "bgsell":""}`}>
      <h6>{data?.productname}</h6>
      <div className="btnbox">
        <div  onClick={()=>handlesell(data)} className={`sell ${status ? " none":""} `}>sell</div>
        <div onClick={()=>handledelet(data._id)}  style={{ cursor: "pointer" }}>
          <AiFillDelete color="red" size={25} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cardproduct
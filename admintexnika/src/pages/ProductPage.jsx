import React from 'react'
import { useParams } from 'react-router-dom'
import {useGetProductIdQuery} from "../redux/Api";

const ProductPage = () => {
    const {id}=useParams();
    console.log(id);
    const {data,isLoading,isError} = useGetProductIdQuery(id)

    console.log(data)
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage
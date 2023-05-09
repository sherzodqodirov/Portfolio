import axios from "axios";
import { BASE_URL, category_controller, product_controller } from "./apiUrl";

// category-controller getAll
export const GetAllcategory=async()=>{
    const res=await axios.get(BASE_URL+category_controller)
    return res.data.data
}

//product-controller
export const GetProductId=async(id="")=>{
    const res=await axios.get(BASE_URL+product_controller+id)
    return res.data.data
}
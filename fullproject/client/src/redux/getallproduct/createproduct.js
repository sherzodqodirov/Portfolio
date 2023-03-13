import axios from 'axios'
import { toast } from 'react-toastify'
import { BASEURL, product } from '../../utils/apiurl'
import { fetchgetproduct } from './getallaction'

export const createproduct =(data)=>(dispatch) => {
 axios.post(BASEURL+product.create,data)
 .then((res)=>{
    toast.success(res.data.message)
   dispatch(fetchgetproduct())
 } )
 .catch(e=>toast.error(e.response.data.message))
}

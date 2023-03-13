import axios from 'axios'
import { toast } from 'react-toastify';
import { BASEURL, product } from '../../utils/apiurl'
import { fetchgetproduct } from './getallaction';

export const deleteproduct = (id)=>(dispatch) => {
 axios.delete(BASEURL+product.delete+id)
 .then(res=>{
     toast.success('DELETE')
    dispatch(fetchgetproduct())
 })
 .catch(err=>{
    toast.error("Error delete")
 })
}

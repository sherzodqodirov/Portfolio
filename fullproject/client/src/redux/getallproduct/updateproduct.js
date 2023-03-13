import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL, product } from "../../utils/apiurl";
import { fetchgetproduct } from "./getallaction";

export const updateproduct = (data) =>(dispatch)=> {
  data.status=true
  axios
    .put(BASEURL + product.update + data._id,data)
    .then((res) =>{
      dispatch(fetchgetproduct())
      toast.success("SELL")
    } )
    .catch((er => {
      toast.error('Error sell')
    }));
};

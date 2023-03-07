import axios from "axios";
import { BASEURL, product } from "../../utils/apiurl";
import {
  fetchallproduct,
  fetcherrorallproduct,
} from "./productallslice.js";

export const fetchgetproduct = () => (dispatch) => {
  axios
    .get(BASEURL + product.all)
    .then((res) => 
    dispatch(fetchallproduct(res.data))
    )
    .catch((err) => dispatch(fetcherrorallproduct(err.message)));
};

import axios from "axios";
import { toast } from "react-toastify";
import { authurl, BASEURL } from "../../utils/apiurl";
import { loadstart, loadstop, loggetuser, signinerror, signinsuccess } from "./registslice";

export const postUser = (userobj) => (dispatch) => {
  dispatch(loadstart());
  axios
    .post(BASEURL + authurl.REGISTRATION, userobj)
    .then((res) => {
      dispatch(signinsuccess(res.data));
      localStorage.setItem("USERTOKEN",res.data.token)
      toast.success(`${res.data.message}`);
      dispatch(loggetuser(true))
    })
    .catch((err) => {
      dispatch(signinerror(err.message));
      dispatch(loggetuser(false))
      toast.error(`${err.message}`);
    });
  dispatch(loadstop());
};

import axios from "axios";
import { toast } from "react-toastify";
import { authurl, BASEURL } from "../../utils/apiurl";
import { loadstart, loadstop, loggetuser, signinerror, signinsuccess } from "./registslice";

export const loginUser = (userobj) => (dispatch) => {
  dispatch(loadstart());
  axios
    .post(BASEURL + authurl.LOGIN, userobj)
    .then((res) => {
      dispatch(signinsuccess(res.data));
      localStorage.setItem("USERTOKEN", res.data.token);
      dispatch(loggetuser(true));
      toast.success(`${res.data.message}`);
    })
    .catch((err) => {
      dispatch(loggetuser(false));
      dispatch(signinerror(err.message));
      toast.error(`${err.message}`);
    });
  dispatch(loadstop());
};

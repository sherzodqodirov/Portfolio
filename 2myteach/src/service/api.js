import axios from "axios";
import {adminbaseurl, clientbaseurl} from "./apiurl";

/* Admin*/
export const getAdmin = async () => {
    const res = await axios.get(adminbaseurl)
    return res.data
}
export const postAdmin = async (data) => {
    const res = await axios.post(adminbaseurl,data)
    return res.data
}
export const putAdmin = async (id) => {
    const res = await axios.put(adminbaseurl+id)
    return res.data
}
export const deleteAdmin = async (id) => {
    const res = await axios.delete(adminbaseurl+id)
    return res.data
}


/* Client */
export const getClient = async () => {
    const res = await axios.get(clientbaseurl)
    return res.data
}
export const postClient = async (data) => {
    const res = await axios.post(clientbaseurl,data)
    return res.data
}
export const putClient = async (id) => {
    const res = await axios.put(clientbaseurl+id)
    return res.data
}
export const deleteClient = async (id) => {
    const res = await axios.delete(clientbaseurl+id)
    return res.data
}

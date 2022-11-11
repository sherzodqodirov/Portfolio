import axios from "axios";
const token=localStorage.getItem('token')

export const getdata=()=>{
    axios.request({
        method: 'GET',
        url: 'https://toko.ox-sys.com/variations',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(response => {
            console.log(response.data.items)
            return response.data.items
        }).catch(error => {
        return error;
    });
}
console.log(getdata())





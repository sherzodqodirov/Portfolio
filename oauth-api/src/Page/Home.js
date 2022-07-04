import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = ({data,setdata}) => {
    const [itm, setitm] = useState(10)
    const minidata = []

    const handleclick = () => {
        itm<100 ? setitm(itm + 10) : setitm(10)
    }



    useEffect(() => {
        axios.request({
            method: 'GET',
            url: 'https://toko.ox-sys.com/variations',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(response => {
                setdata(response.data.items)
            }).catch(error => {
            console.error(error);
        });

    }, [])

    if (data[0] && itm <= 100) {
        for (let i = 0; i < itm; i++) {
            minidata.push(data[i])
        }
    }

    if (!minidata[0]) return <h5 className='text-center m-5'>Loading...</h5>
    return (<div className="container text-center mt-5">
        <table className="table  table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">size</th>
                <th scope="col">price</th>
            </tr>
            </thead>
            <tbody>
            {minidata.map((item, idn) => (
                <tr key={idn}>
                    <td>{idn+1}</td>
                    <td>{item.name}</td>
                    <td>{item.properties[0].value}</td>
                    <td>{item.importRecord.landedCostPrice.USD} $</td>
                </tr>
            ))}

            </tbody>
        </table>
        <button className=' btn btn-primary m-4 px-5' onClick={handleclick}>
            {itm===100 ? "back":"viwe more"}
        </button>
    </div>);
};

export default Home;

"use client"
import {useEffect, useState} from "react";
import {IData} from "@/types";
import Link from "next/link";



function ClientComponent() {
    const [data,setData]=useState<IData[]>([])
    const [load,setLoad]=useState(true)

    const fetchData= async () =>{
        try {
            const res = await fetch('https://jsonplaceholder.org/users');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const resJson = await res.json();
            setData(resJson);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoad(false);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div>
            <h3 style={{textAlign:"center", margin:"20px 0"}}>Data client </h3>
            {load ? <h6>Loading...</h6> : data.map(item =>(
              <Link href={`/client/${item.id}`} key={item.id}><li>{item.firstname}</li></Link>
            ))}
        </div>
    );
}

export default ClientComponent;
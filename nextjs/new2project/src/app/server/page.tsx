import {IData} from "@/types";
import Link from "next/link";

async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.org/users',{cache:"force-cache"});
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const resJson = await res.json();
        return resJson
    } catch (error) {
        console.error('Fetch error:', error);

    }
}
async function ServerComponent() {
   const data:IData[]=await getData()
    return (
        <div>
            <h3 style={{textAlign:"center", margin:"20px 0"}}>Data server </h3>
            { data.map(item =>(
              <Link href={`server/${item.id}`} key={item.id}>  <li >{item.firstname}</li> </Link>
            ))}
        </div>
    );
}

export default ServerComponent;
'use client'
import { useState } from "react"


export default function Home() {
  const [value,setvalue]=useState(0)


  return (
    <div>
      <p>{value}</p>
      <button onClick={()=>setvalue(value+1)}>incr</button>
    </div>
    )
}


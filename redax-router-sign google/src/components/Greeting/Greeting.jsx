import React,{useState} from 'react'

const Greeting = () => {
const [num, setnum] = useState(0);
const handleClick=()=>{
    setnum((prevstate)=>prevstate+1)
}
  return (
    <div className='container'>
        <h1>Hello world!</h1>
        <h5>{num}</h5>
     <button onClick={handleClick} className='btn btn-dark'>click</button>
    </div>
  )
}

export default Greeting;
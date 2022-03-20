import React,{useRef} from 'react'
import classes from "./Search.module.scss"
const Search = ({handleSearch}) => {

const inputRef=useRef();

const inputSubmit=event=>{
  event.preventDefault()
  handleSearch(inputRef.current.value)
}
  return (
    <>
    <form onSubmit={inputSubmit} className={classes.form}>
        <label htmlFor='search'></label>
        <input ref={inputRef} id='search' type="text" placeholder='search'/>
        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default Search
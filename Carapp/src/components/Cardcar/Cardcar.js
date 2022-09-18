import React from 'react'

const Cardcar = ({categorcar}) => { 

    return categorcar.map((item, idn) => <img className='w-25' key={idn} src={`https://cartestwebapp.herokuapp.com/${item.imgUrl}`} alt="img"/>)
}

export default Cardcar
import React from 'react'
import { signInWithGoogle } from '../service/Firebase';
const Signin = () => {
  return (
    <div className='text-center'>
        <button className='btn btn-dark' onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>
  )
}

export default Signin;
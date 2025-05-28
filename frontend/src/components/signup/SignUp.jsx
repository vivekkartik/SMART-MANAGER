import React from 'react'
import './SignUp.css'
import HeaderComp from './HeaderComp'
const SignUp = () => {
  return (
    <div className='SignUp'>
        <div className='container'>
            <div className='row'> 
                <div  className='col-lg-8 cloumn d-flex justify-content-center align-items-center'> 
                    <div className='d-flex flex-column w-100 p-5'>

                <input className='p-2 my-3' type="email" placeholder='Enter Your Email' name='email'/> 
                <input className='p-2 my-3' type="username" placeholder='Enter Your Username' name='username'/>
                <input className='p-2 my-3' type="password" placeholder='Enter Your Password' name='password'/>
                <button className='btn-signup'>SignUp</button>
                </div>
                 </div>
                <HeaderComp first= 'Sign' second='Up' border = 'left'/>
            </div>
        </div>
    </div>
  )
}

export default SignUp

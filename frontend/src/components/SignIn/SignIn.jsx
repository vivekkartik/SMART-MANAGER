import React from 'react'
import HeaderComp from '../signup/HeaderComp'
import '../signup/SignUp.css'
const SignIn = () => {
  return (
    <div>
              <div className='container'>
            <div className='row'> 
                <HeaderComp first= 'Sign' second='In' border='right'/>
                <div  className='col-lg-8 cloumn d-flex justify-content-center align-items-center'> 
                    <div className='d-flex flex-column w-100 p-5'>

                <input className='p-2 my-3' type="email" placeholder='Enter Your Email' name='email'/> 
                <input className='p-2 my-3' type="password" placeholder='Enter Your Password' name='password'/>
                <button className='btn-signup'>SignIn</button>
                </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn

import React from 'react'
import './SignUp.css'
const HeaderComp = ({first,second,border}) => {
  return (
                <div className={`col-lg-4 column col-left d-flex justify-content-center align-items-center border-${border}`}><h1 className='text-center sign-up-heading'> {first} <br/> {second}</h1></div>

  )
}

export default HeaderComp

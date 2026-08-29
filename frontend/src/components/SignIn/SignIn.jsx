import React from 'react'
import HeaderComp from '../signup/HeaderComp'
import '../signup/SignUp.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from '../../config.js';

const SignIn = () => {
  const token = localStorage.getItem("token");
  if (token) {
  window.location.href = "/"
  }
  const [emailOrUsername, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email or Username:', emailOrUsername);
    console.log('Password:', password);
    setError(''); // Clear previous errors
    try {
const response = await fetch(`${config.API_URL}/api/v1/login`, { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ emailOrUsername, password, }) }); 
  const data = await response.json();
  console.log("Response data:", data);
  if (response.ok) {
    // Handle successful login, e.g., store token, redirect, etc.
    localStorage.setItem("token", data.token);
    navigate("/"); // Redirect to home page after successful login
  } else {
    setError(data.message);
    // Handle login error
    console.error("Login failed:", data.message);
  }
    } catch (error) {
      setError('Error during sign-in. Please try again.');
      console.error('Error during sign-in:', error);
    }
  }

  return (
    <div>
              {error && <div style={{ color: 'red', padding: '10px', marginBottom: '15px', textAlign: 'center', backgroundColor: '#ffebee', borderRadius: '4px' }}>{error}</div>}
              <div className='container'>
            <div className='row'> 
                <HeaderComp first= 'Sign' second='In' border='right'/>
                <div  className='col-lg-8 cloumn d-flex justify-content-center align-items-center'> 
                    <div className='d-flex flex-column w-100 p-5'>

                <input className='p-2 my-3' type="text" placeholder='Enter Your Email or Username' value={emailOrUsername} onChange={(e) => setEmail(e.target.value)} name='emailOrUsername'/> 
                <input className='p-2 my-3' type="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} name='password'/>
                <button className='btn-signup' onClick={handleSubmit}>SignIn</button>
                </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn

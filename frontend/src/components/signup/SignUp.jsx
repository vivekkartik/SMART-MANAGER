import React, { useState } from 'react'
import './SignUp.css'
import HeaderComp from './HeaderComp'

const SignUp = () => {
  const [form, setForm] = useState({ email: '', username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:1000/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Registration successful!');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      console.log('error',err)
      setError('Network error',err);
    }
  };  

  return (
    <div className='SignUp'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 cloumn d-flex justify-content-center align-items-center'>
            <form className='d-flex flex-column w-100 p-5' onSubmit={handleSubmit}>
              <input className='p-2 my-3' type='email' placeholder='Enter Your Email' name='email' value={form.email} onChange={handleChange} required />
              <input className='p-2 my-3' type='text' placeholder='Enter Your Username' name='username' value={form.username} onChange={handleChange} required />
              <input className='p-2 my-3' type='password' placeholder='Enter Your Password' name='password' value={form.password} onChange={handleChange} required />
              <button className='btn-signup' type='submit'>SignUp</button>
              {error && <div className='text-danger mt-2'>{error}</div>}
              {success && <div className='text-success mt-2'>{success}</div>}
            </form>
          </div>
          <HeaderComp first='Sign' second='Up' border='left' />
        </div>
      </div>
    </div>
  );
}

export default SignUp

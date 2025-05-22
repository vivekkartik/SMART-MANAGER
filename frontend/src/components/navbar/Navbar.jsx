import React from 'react'
import { SiTodoist } from "react-icons/si";
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#"><b> <SiTodoist/> SMART MANAGER</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
                <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
        </li>
                <li className="nav-item mx-2 my-1 btn-nav">
          <a className="nav-link active" aria-current="page" href="#">SignUp</a>
        </li>
                <li className="nav-item mx-2 my-1 btn-nav">
          <a className="nav-link active" aria-current="page" href="#">SignIn</a>
        </li>
                <li className="nav-item mx-2 my-1 btn-nav">
          <a className="nav-link active" aria-current="page" href="#">SignOut</a>
        </li>
        
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#"><img className='img-fluid user-png' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img></a>
        </li>
      </ul>

    </div>
  </div>
</nav> 
    </div>
  )
}

export default Navbar

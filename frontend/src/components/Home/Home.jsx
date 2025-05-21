import React from 'react'
import { SiTodoist } from "react-icons/si";
import "./Home.css"
const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center flex-column'>
        <div className='container'> 
         <h1>
             Stay organized,<br/>
              focus on what matters,<br/> achieve your goals with our simple and intuitive to-do list app.
         </h1>
         <p> Add tasks, set reminders, and track your progress effortlessly. Your tasks, all in one place.</p>
       </div>
       <div className='home-todo-image'> <img className="image-fluid "src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx79J9D-zp_4o7hXsa2YJkZCqxsNBSL3PKAg&s"></img></div>
       <button className='btn-makeTodolist'>Manage Your task list</button>
            </div> 
  )
}

export default Home

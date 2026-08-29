import "./Home.css"
import { jwtDecode } from 'jwt-decode';
import { config } from '../../config.js';
import { useEffect, useState } from 'react';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found");
          setLoading(false);
          return;
        }
        
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);

        const user = await fetch(`${config.API_URL}/api/v1/getUser`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await user.json();
        console.log("User Data:", data);
        setUserData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='home d-flex justify-content-center align-items-center flex-column'>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {userData && <p>Welcome, {userData.user.username}!</p>}
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

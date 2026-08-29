import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom'; // Fix import
import SignUp from './components/signup/SignUp';
import SignIn from './components/SignIn/SignIn';

const doesTokenExpired = (token) => {
  if (!token) return true; // If there's no token, consider it expired
  const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  return payload.exp < currentTime; // Check if the token has expired
};

const ProtectedRoute = ({ Component }) => {
  const token = localStorage.getItem("token");
  
  if (!token || doesTokenExpired(token)) {
    localStorage.removeItem("token"); // Remove expired token from localStorage
    // Redirect to login page if token is not present or has expired
    return <Navigate to="/SignIn" replace />;
  }
  
  return <Component />;
};

const App = () => {
  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ProtectedRoute Component={Home} />} />
          <Route exact path='/About' element={<ProtectedRoute Component={About} />} />
          <Route exact path='/SignUp' element={<SignUp />} />
          <Route exact path='/SignIn' element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

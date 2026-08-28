import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom'; // Fix import
import SignUp from './components/signup/SignUp';
import SignIn from './components/SignIn/SignIn';

const App = () => {

  const protectedRoute = (Component) => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login page if token is not present
      return <Navigate to="/SignIn" replace />;
      return null;
    }
    return <Component />;
  }
  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={protectedRoute(Home)} />
          <Route exact path='/About' element={protectedRoute(About)} />
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

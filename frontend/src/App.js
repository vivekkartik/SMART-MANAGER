import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fix import
import SignUp from './components/signup/SignUp';
import SignIn from './components/SignIn/SignIn';

const App = () => {
  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path= '/SignUp' element= { <SignUp/>} />
          <Route exact path = '/SignIn' element= { <SignIn /> }  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

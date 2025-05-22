import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fix import

const App = () => {
  return (
    <Router> {/* Wrap the entire app with BrowserRouter */}
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

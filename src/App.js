import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <Navbar />
      <div className="divp4">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Tour from './components/tourpackage';
import BestPackages from './components/bestpackages';
import axios from 'axios'
import Contact from './components/contact';
import Signin from './components/signin';
import Signup from './components/signup';

import { useState, useEffect } from 'react';
import Getdetails from './components/details/getdetails';




function App() {
  
  const [home,setHome] = useState([]);
  const [bestpackages,setBestpackages] = useState([]);
  const [error,setError] = useState([]);

  

  useEffect(() => {
    axios.get('http://localhost:5000/home').then(
      res => {
        setHome(res.data.home);
      }
    ).catch(err => {
      setError(err.message);
    })
  },[])

  useEffect(() => {
    axios.get('http://localhost:5000/best-packages').then(
      res => {
        setBestpackages(res.data.bestpackages);
      }
    ).catch(err => {
      setError(err.message);
    })
  },[])
  return (
    <>
    
     
     <Router>
     <Routes>
          <Route path="/home" element={<Home home={home} />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour-packages" element={<Tour />} />
          <Route path="/best-packages" element={<BestPackages bestpackages={bestpackages}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getdetails" element={<Getdetails />} />
          <Route path="/" element={<Signin />} />
          
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
   
   
    </>
  );
}

export default App;
 
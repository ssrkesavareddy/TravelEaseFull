import React, { useState, useContext, createContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom'

import '../styles/signin.css';




function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [User, setUser] = useState(''); // Set User state

  const navigate = useNavigate(); // Move useNavigate outside of the async function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { user } = response.data;
        

        alert("welcome " + user.name);

        navigate('/home'); 
      
    } catch (error) {
      window.alert('Login failed: go and sign up first', error.response.data);
    }
  };

  return (
    <>
      <div>
        <div className="login-container">
          <div className="login-form">
            <h1 className="login-title">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary log-bt">
                Login
              </button>
              <h2>new user, signup here</h2><button className="btn btn-primary log-bt"><a class="sign" href="/signup">sign up</a></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;

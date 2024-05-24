import React from 'react';

import '../styles/signin.css'

function Signup(props) {
    return (
        <div>
        <div className="login-container">
 <div className="login-form">
   <h1 className="login-title">Sign up</h1>
   <form action="http://localhost:5000/signup" method="POST">
   <div className="form-group">
       <label htmlFor="name">name</label>
       <input
         type="text"
         className="form-control"
         id="email"
         name = "name"
         required
       />
     </div>
     <div className="form-group">
       <label htmlFor="email">Email</label>
       <input
         type="email"
         className="form-control"
         id="email"
         name = "email"
         required
       />
     </div>
     <div className="form-group">
       <label htmlFor="password">Password</label>
       <input
         type="password"
         className="form-control"
         id="password"
         name = "password"
         required
       />
     </div>
     <button type="submit" className="btn btn-primary log-bt">
       Sign Up
     </button>
     <h2>Already registered user login here</h2>
     <button className="btn btn-primary log-bt">
      <a href="/">sign in</a>
     </button>
   </form>
 </div>
</div>
   </div>
    );
}

export default Signup;
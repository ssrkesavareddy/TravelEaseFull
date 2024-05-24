import React from 'react';

import '../styles/header.css'

//import { useContext } from 'react';

//import UserContext from './signin'

function Header(props) {
 // const user = useContext(UserContext);
    return (
        <>
        
    <nav class="navbar navbar-expand-lg ">
  <a class="navbar-brand" href="#">Travel-ease</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active mx-2">
        <a class="nav-link text-white" href="/home">Home</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-white" href="/about">About</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-white" href="/tour-packages">Tour Packages</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link text-white" href="/best-packages">Best Packages</a>
      </li>

      <li class="nav-item mx-2">
        <a class="nav-link text-white" href="/">Logout</a>
      </li>
     
    </ul>
  </div>
</nav>
        
        </>
    );
}

export default Header; 
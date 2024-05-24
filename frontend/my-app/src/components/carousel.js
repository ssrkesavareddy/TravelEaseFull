import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/home.css'

function Carl(props) {
    const [carousel,setCarousel] = useState([]);
  const [error,setError] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/carousel').then(
      res => {
        setCarousel(res.data.carousel);
      }
    ).catch(err => {
      setError(err.message);
    })
  },[])
    return (
        <>
        
        <Carousel showThumbs={false} >

        

{      carousel.map((item, index) => {
                    return (
                        <>
                       
                         <div>
                         <img class="main-carous" key={index} src={item.img} />
                         
                         </div>
                     
                     </>
                    )
                }) }
</Carousel>

        </>
    );
}

export default Carl;
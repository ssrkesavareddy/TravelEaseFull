import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/home.css'
import Carl from './carousel';
import Footer from './footer'
import Header from './header';

function Home({home}) {
    if(!home) return null;
    return (
        <>
         <Header />
           <Carl />
            <center><h1 class="home-text">Welcome to travel-ease</h1></center>
           
            <div class="container home-cont">
                <center>
                    
                    <h1 class="dest">Top destinations</h1>
                    <h4 class="dest-text">Deals made especially for you, Everything just made for budget.</h4>
                    
                     
                </center>
            </div>
           
           <center>
            {
                home.map((x,index) => {
                    return(
                        <>
                          <div class="container home-content mt-5 mb-5">
             <div class="row home-row">
                <div class="col-6 home-col">
                <Carousel showThumbs={false} >
                <div>
                    <img class="home-carous" src={x.placeimg1} />
                    
                </div>
                <div>
                    <img  class="home-carous" src={x.placeimg2} />
                    
                </div>
                <div>
                    <img  class="home-carous" src={x.placeimg3} />
                    
                </div>
            </Carousel>
                </div>
                <div class="col-6 home-col pt-5">
                     <h1 class="dest-tex mt-4">{x.placename}</h1>
                     <h3 class="dest-days">{x.placetime}</h3>
                     <p class="dest-loc">{x.placeinfo}</p>

                     <button class="dest-details"><a href="/getdetails">Get details</a></button><br/>

                     <button class="dest-details mt-4"><a href="/contact">immediate enquiry</a></button>
                </div>
             </div>
            </div>
                        </>
                    )
                })
            }
           
           </center>

           <Footer />
           
            
       </>
    );
}

export default Home;
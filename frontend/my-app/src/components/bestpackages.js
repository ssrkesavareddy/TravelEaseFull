import React from 'react';
import '../styles/bestpackages.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from '../components/footer'
import Header from './header';

function BestPackages({bestpackages}) {
    return (
       <>
       <Header />
       <div class="container-fluid bestpack">
          
            <div class="best-para">
            Welcome to Travel Ease, your gateway to unforgettable journeys across the enchanting landscapes of India. At Travel Ease, we specialize in providing seamless travel experiences within India, allowing you to explore the rich diversity and beauty of this incredible country with ease.

            Immerse yourself in the vibrant culture, breathtaking landscapes, and fascinating history of India with our carefully curated selection of travel packages. Whether you're yearning for a spiritual retreat in the Himalayas, a rejuvenating escape to the serene backwaters of Kerala, or an adventure-filled exploration of Rajasthan's majestic forts and palaces, Travel Ease has the perfect package to fulfill your wanderlust.

            Our team of travel experts is passionate about showcasing the best of India to travelers from around the world. With their extensive knowledge and expertise, they will assist you in crafting the perfect itinerary tailored to your interests and preferences.

            Booking your dream vacation with Travel Ease is simple and stress-free. Our user-friendly platform allows you to browse through a wide range of packages, compare prices, and make secure bookings with just a few clicks. With transparent pricing and no hidden fees, you can plan your Indian adventure with confidence.
            </div>

            <center>
                <h1 class="best-head mt-5">Best Packages</h1>
            </center>

            
            <div class="row best-row mt-5">
               
              <center>
                {
                    bestpackages.map((item,index) =>{
                        return(
                            <>
                                
                <div class="col-8 best-col mb-5 pb-3">
                 <Carousel showThumbs={false} >
                <div>
                    <img class="best-carous" src={item.place_img1} />
                    
                </div>
                <div>
                    <img  class="best-carous" src={item.place_img2} />
                    
                </div>
                <div>
                    <img  class="best-carous" src={item.place_img3} />
                    
                </div>
            </Carousel>
               
               <div class="row mt-3">
                <div class="col-6">
                <h2 class="best-name">{item.place_name}</h2>
              <h2 class="best-info">{item.place_info}</h2>
              <h2 class="best-time">{item.place_time}</h2>
              <h3 class="best-price">Rs.{item.price}</h3>
                </div>
                <div class="col-6">
                <h2 class ="best-description">{item.description}</h2>
                </div>
               </div>

               <div class="row">
                <div class="col-6">
                    <button class="best-enq btn btn-warning mx-5"><a href="/contact">quick enquiry</a></button>
                </div>
                <div class="col-6">
                <button class="best-enq btn btn-warning mx-5">get details</button>
                </div>
               </div>
              
             
                 </div>
                 

                            
                            </>
                        )
                    })
                }
               </center>
            </div>


       </div>

       <Footer />
       
       </>
    );
}

export default BestPackages;
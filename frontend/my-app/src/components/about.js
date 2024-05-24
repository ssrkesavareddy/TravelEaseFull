
import React from 'react';
import '../styles/about.css';
import Header from './header';

function About() {
  return (
    <>
    <Header />
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2 class="about-head">About Us</h2>
          <p>At TravelEase, we believe in the transformative power of travel. Our mission is to inspire and facilitate unforgettable experiences for our customers, fostering a deeper connection with the world and its diverse cultures. With a passion for exploration and a commitment to exceptional service, we curate unique travel itineraries tailored to every traveler's preferences. Whether it's an adventurous trek through rugged landscapes, a relaxing beach getaway, or an immersive cultural journey, we strive to turn travel dreams into reality. Join us on an adventure of a lifetime, and let's explore the wonders of the world together.</p>
        </div>
        <div className="about-image">
          <img src="https://imgs.search.brave.com/DvSoBBGyD7HwMHRIh5Ck3JYyn_HsubWsKfSC0EojGuA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YWxkaXZlcy1ob3Vz/ZS1leG90aWMtdHJh/dmVsLXNlYV8xMjAz/LTUzNTguanBnP3Np/emU9NjI2JmV4dD1q/cGc" alt="About Us" />
        </div>
      </div>
      <div className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-images">
          <img src="https://imgs.search.brave.com/s6lPQ3rx_PND1R-ImoKiaxIGdNHgPhxbha-8NsAymMM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9vbmxpbmUtcmVn/aXN0cmF0aW9uLWZv/cm0tbW9kaXNoLWZv/cm0tZmlsbGluZ18z/MTk2NS00NTAyNC5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw" alt="Step 1" />
          <img src="https://imgs.search.brave.com/gWjwNtUFzO09UhaLSN3pxoXKd_HY4KraqsT76Fa98Zs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kLXRy/YXZlbC13b3JkLWNv/bmNlcHQtd2hpdGUt/YmFja2dyb3VuZC1p/bWFnZS01NDI0OTc1/NS5qcGc" alt="Step 2" />
          <img src="https://imgs.search.brave.com/K5uKQDdV6zlRg3AI6CdCCgJq47lC_mobt4AeafDXEi4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzYxLzY1LzYw/LzM2MF9GXzYxNjU2/MDIwX1k3RHJDM3Ru/a3ZHOTZjYUdCRndR/dzQ2RnJFR3NvaVFE/LmpwZw" alt="Step 3" />
        </div>
      </div>
      
      <div className="website-services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service">
            <h3 class="ser-text">Flight Booking</h3>
            <p>Easily search and book domestic and international flights within India and beyond. Compare prices, airlines, and schedules to find the best deals for your travel needs.</p>
          </div>
          <div className="service">
            <h3  class="ser-text">Hotel Accommodations</h3>
            <p>Browse through a wide range of hotels, resorts, and guesthouses across popular destinations in India. Filter options by budget, location, amenities, and user ratings to find the perfect accommodation for your stay.</p>
          </div>
          <div className="service">
            <h3  class="ser-text">Tour Packages</h3>
            <p>Explore curated tour packages tailored to different interests and budgets. From cultural tours to adventure getaways, discover the best experiences India has to offer with hassle-free booking and expert guidance.</p>
          </div>
          <div className="service">
            <h3  class="ser-text">Transportation Services</h3>
            <p>Arrange for convenient transportation options such as car rentals, airport transfers, and local transport services to enhance your travel experience and ensure smooth transitions between destinations.</p>
          </div>
          <div className="service">
            <h3  class="ser-text">Travel Insurance</h3>
            <p>Protect your trip with comprehensive travel insurance coverage, including medical emergencies, trip cancellations, and lost luggage. Find the right insurance plan that suits your itinerary and provides peace of mind throughout your journey.</p>
          </div>
          <div className="service">
            <h3  class="ser-text">Travel Guides and Tips</h3>
            <p> Access valuable travel guides, destination insights, and insider tips to plan your itinerary effectively. From must-see attractions to hidden gems, equip yourself with the knowledge to make the most out of your travels in India.</p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default About;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Header from './header';
import Footer from './footer';
import '../styles/tourpackages.css';
import '../styles/bestpackages.css';

function Tour() {
  const [tourpackages, setTourpackages] = useState([]);
  const [bestpackages, setBestpackages] = useState([]);
  const [error, setError] = useState('');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [showBuyNow, setShowBuyNow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/tourpackages')
      .then(res => {
        setTourpackages(res.data.tourpackages);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/best-packages')
      .then(res => {
        setBestpackages(res.data.bestpackages);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    const allSuggestions = ['goa', 'kerala', 'kashmir package', 'manali', 'vizag'];
    if (allSuggestions.includes(input.toLowerCase())) {
      setResult(input);
      setShowBuyNow(true);
    } else {
      setResult('No match found');
      setShowBuyNow(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid tour-pack pt-5">
        <center>
          <div className="tour-search mt-5 pt-5">
            <h3 className="tour-tec mt-5 pt-3">Find your first package here</h3>
          </div>
          <div className="search-container mt-3">
            <input
              type="text"
              className="search-input"
              value={input}
              onChange={handleChange}
              placeholder="Search..."
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
          </div>
          <div className="result-container pt-2 pb-2">
            <h1 className="suggest">{result}</h1>
            {showBuyNow && (
              <div>
                <img src="https://imgs.search.brave.com/UbVHP2tljN4MeWhHr9fNfWvvWVPegxqftDqdGuKcybQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/NTY0MzQ1MC9waG90/by9zbm93Ym9hcmRp/bmctaW4ta2FzaG1p/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ekN0V0NHUWF4/NjVHaFBfRkFPaW1i/SE5WaW8yYnBZTGZF/Q3hwSE9ZQzREZz0" alt="Brand" className="suggest-image" />
                <a href="/getdetails"><button className="sug-but btn btn-danger">Buy now</button></a>
              </div>
            )}
          </div>
        </center>
      </div>
      <div className="container">
        <center>
          <h1 className="best-head mt-5">Tour Packages</h1>
        </center>
        <div className="row best-row mt-5">
          <center>
            {tourpackages.map((item, index) => (
              <div key={index} className="col-8 best-col mb-5 pb-3">
                <Carousel showThumbs={false}>
                  <div>
                    <img className="best-carous" src={item.place_img1} alt={item.place_name} />
                  </div>
                  <div>
                    <img className="best-carous" src={item.place_img2} alt={item.place_name} />
                  </div>
                  <div>
                    <img className="best-carous" src={item.place_img3} alt={item.place_name} />
                  </div>
                </Carousel>
                <div className="row mt-3">
                  <div className="col-6">
                    <h2 className="best-name">{item.place_name}</h2>
                    <h2 className="best-info">{item.place_info}</h2>
                    <h2 className="best-time">{item.place_time}</h2>
                    <h3 className="best-price">Rs.{item.price}</h3>
                  </div>
                  <div className="col-6">
                    <h2 className="best-description">{item.description}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <button className="best-enq btn btn-warning mx-5"><a href="/contact">quick enquiry</a></button>
                  </div>
                  <div className="col-6">
                    <button className="best-enq btn btn-warning mx-5">get details</button>
                  </div>
                </div>
              </div>
            ))}
          </center>
        </div>
        <div className="row best-row">
          <center>
            {bestpackages.map((it, index) => (
              <div key={index} className="col-8 best-col mb-5 pb-3">
                <Carousel showThumbs={false}>
                  <div>
                    <img className="best-carous" src={it.place_img1} alt={it.place_name} />
                  </div>
                  <div>
                    <img className="best-carous" src={it.place_img2} alt={it.place_name} />
                  </div>
                  <div>
                    <img className="best-carous" src={it.place_img3} alt={it.place_name} />
                  </div>
                </Carousel>
                <div className="row mt-3">
                  <div className="col-6">
                    <h2 className="best-name">{it.place_name}</h2>
                    <h2 className="best-info">{it.place_info}</h2>
                    <h2 className="best-time">{it.place_time}</h2>
                    <h3 className="best-price">Rs.{it.price}</h3>
                  </div>
                  <div className="col-6">
                    <h2 className="best-description">{it.description}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <button className="best-enq btn btn-warning mx-5"><a href="/contact">quick enquiry</a></button>
                  </div>
                  <div className="col-6">
                    <button className="best-enq btn btn-warning mx-5">get details</button>
                  </div>
                </div>
              </div>
            ))}
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tour;

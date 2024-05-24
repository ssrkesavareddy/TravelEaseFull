import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';


function Footer() {
  return (
    <>
    <footer class="bg-dark text-white pt-4">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>About Us</h5>
                    <p>We are a company dedicated to providing the best services.</p>
                    
                </div>
                <div class="col-md-4">
                    <h5>Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="/home" class="text-white text-decoration-none">Home</a></li>
                        <li><a href="/about" class="text-white text-decoration-none">About</a></li>
                        <li><a href="/best-packages" class="text-white text-decoration-none">Services</a></li>
                        <li><a href="/contact" class="text-white text-decoration-none">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Contact Us</h5>
                    <p><i class="fas fa-map-marker-alt"></i> Nanak nagri,LPU,Kapurthala,Punjab</p>
                    <p><i class="fas fa-phone"></i> +91 7995356278</p>
                    <p><i class="fas fa-envelope"></i> mk1240598@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="bg-secondary text-center py-3">
            &copy; 2024 Travel-ease | 
        </div>
    </footer>

    </>
  );
}

export default Footer;
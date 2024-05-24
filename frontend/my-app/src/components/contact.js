import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <>  
   
    <div className="container-fluid contact-container mt-5 pt-5 pb-5 mb-5">
    <center>
      <h4 class="contact-query mb-4">submit queries here</h4>
    </center>
    <center>
    <form action="http://localhost:5000/queries" method="post" class="contact-form">
  <div class="form-group">
    <input type="text" class="form-control"  placeholder="Your Name" name="name" />
  </div>
  <div class="form-group">
    <input type="email" class="form-control"  placeholder="Your Email" name="email" />
  </div>
  <div class="form-group">
    <textarea class="form-control" rows="5"  placeholder="Your Message" name="query"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">submit</button>
</form>

    </center>  
    </div>
    </>
  );
}

export default Contact;
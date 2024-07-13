import React from 'react';
import '../About.css'; 

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <p>Phone: +1-123-456-7890</p>
          <p>Email: info@example.com</p>
          <p>Office Address: 
            <br />
            123 Example St,
            <br />
            City, State, Zip Code
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

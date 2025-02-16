import React from 'react';
import './Contact.css';
import { useState } from "react";

const Contact = () => {
    
    return (
    <section className="Contact" id="Contact">
        <div className="contact-container">
            <h2>Contact Me</h2>
            {/* <p>"Introduce a little about myself as well as my personal information."</p> */}
        </div>
        <div className="contact-content">
          <p>Please contact me via phone, email, or Zalo. I will get back to you as soon as possible.</p>
          <h2>Thank you for checking out my portfolio!</h2>
        </div>
    </section>
  );
};

export default Contact;
import React from "react";
import './App.css'

const Contact = () => {
  return (
    <div className="contact-form">
      <h1>Get In Touch</h1>
      <h3>
        Please fill out the form below to send us an email and we will get back
        to you as soon as possible
      </h3>
      <div className="text-fields">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Mobile" />
        <input type="text" placeholder="Email" />
        <textarea name="message" id="message" placeholder="Message"></textarea>
        <button className="send-btn">Send Message</button>
      </div>
      <div className="cont-info">
        <h2>Address Info</h2>
        <pre>
          C3iHub, 2nd Floor, Technopark Phase I, IIT Kanpur Kanpur - 208016
          Uttar Pradesh, India
        </pre>
      </div>
    </div>
  );
};

export default Contact;

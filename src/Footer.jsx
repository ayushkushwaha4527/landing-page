import React from "react";
import './App.css'

export const Footer = () => {
  return (
    
    <footer className="footer">
      <div>
        {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">C3iHub</h3>
            <p className="footer-text">
              Set up under NM-ICPS at IIT Kanpur, by Department of Science and Technology, Government of India.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li>Tender</li>
              <li>Services</li>
              <li>Research & Funding</li>
              <li>Startup Cohort V</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Our Company</h3>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Gallery</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-text">
              info@c3ihub.org<br />
              C3iHub, 2nd Floor, Technopark Phase I,<br />
              IIT Kanpur - 208016<br />
              Uttar Pradesh, India
            </p>
          </div>
        </div>
        
      </footer>

      </div>
      <h2 className="footer-heading">Follow Us On</h2>
      
      <div className="social-links">
        <a
          href="https://www.linkedin.com/company/c3i-hub/posts/?feedView=all"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://www.instagram.com/c3ihub.iitkanpur/" target="_blank">
          Instagram
        </a>
        <a href="https://www.youtube.com/@C3iHub" target="_blank">
          YouTube
        </a>
      </div>
      <h3 className="footer-copy">© 2025 C3iHub. All rights reserved.</h3>
    </footer>
  );
};

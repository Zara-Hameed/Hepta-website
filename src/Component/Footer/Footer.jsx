import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className="footersection">
      <div className="footercontainer">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>
              Quick Links
            </h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Rooms</a></li>
            </ul>
          </div>
           <div className="footer-column">
            <h3>
             Support
            </h3>
            <ul>
              <li><a href="#">Our Location</a></li>
              <li><a href="#">The Hosts</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Restaurant</a></li>
               
            </ul>
          </div>
            <div className="footer-column">
  <h3>Contact Info</h3>
  <div className="contact-info-block">
    <p><i>Address:</i></p>
    <p>98 West 21th Street, Suite 721 New York NY 10016</p>

    <p><i>Phone:</i></p>
    <p>(+1) 435 3533</p>

    <p><i>Email:</i></p>
    <p>info@yourdomain.com</p>
  </div>
</div>

           <div className="footer-column">
            <h3>Subscribe</h3>
            <p>Sign up for our newsletter</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email..." />
              <button type="submit">
                <span className="fa fa-paper-plane"></span>
              </button>
            </form>
          </div>
        </div>
          <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} All rights reserved | Made with 
            <span className="fa fa-heart heart-icon"></span> by 
            <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
          </p>
          <div className="footer-socials">
            <a href="#"><span className="fab fa-facebook"></span></a>
            <a href="#"><span className="fab fa-twitter"></span></a>
            <a href="#"><span className="fab fa-instagram"></span></a>
            <a href="#"><span className="fab fa-linkedin"></span></a>
            <a href="#"><span className="fab fa-youtube"></span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react';
import '../Contactsection/Contactsection.css'

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-row">
          {/* Left: Form */}
          <div className="form-column">
            <form className="contact-form">
              <div className="row two-cols">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" id="phone" />
                </div>
              </div>

              <div className="row">
                <div className="form-group full-width">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
              </div>

              <div className="row">
                <div className="form-group full-width">
                  <label htmlFor="message">Write Message</label>
                  <textarea id="message" rows="6"></textarea>
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          {/* Right: Contact Info */}
          <div className="info-column">
            <div className="contact-info">
              <p><span className="label">Address:</span><br />
                <strong>98 West 21th Street, Suite<br />721 New York NY 10016</strong></p>

              <p><span className="label">Phone:</span><br />
                <strong>(+1) 435 3533</strong></p>

              <p><span className="label">Email:</span><br />
                <strong><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Eventiz</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              suspendisse leo neque iaculis molestie sagittis maecenas aenean eget
              molestie sagittis.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Speakers</a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
              <li>
                <a href="#">Ticket Pricing</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Get In Touch</h3>
            <p>
              1616 Broadway <br />
              NY, New York <br />
              United States of America
            </p>
            <p>
              <a href="tel:9554441245">955 444 1245</a>
              <br />
              <a href="mailto:info@eventiz.com">Info@Eventiz.Com</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">
              Copyright ©2024 Eventiz. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


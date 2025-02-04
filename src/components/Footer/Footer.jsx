import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          {/* Branding and About */}
          <div>
            <h2>Crypto Pulse</h2>
            <p>
              Your gateway to the world of cryptocurrency. Stay updated with the
              latest market trends and insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul>
              <Link to={'/'}>
                <li><a href="#home">Home</a></li> 
              </Link>

              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://x.com/Shyamsingh8414"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/shyam_singh110/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shyam-kumar-9b0b38259/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/ShyamSingh841442"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          © 2024 Crypto Pulse. All Rights Reserved. |{" "}
          <a href="#privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

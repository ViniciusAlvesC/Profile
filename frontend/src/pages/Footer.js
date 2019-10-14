import React from "react";
import "./Footer.css";

// import { Container } from './styles';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_config">
          <div className="icons">
            <i class="fab fa-discord"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fas fa-envelope"></i>
          </div>

          <p>
            Made whit <i class="fas fa-heart heart"></i> by Vinícius Alves
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

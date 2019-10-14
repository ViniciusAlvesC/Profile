import React from "react";
import "./Design.css";

// import { Container } from './styles';

function Design() {
  return (
    <div className="container">
      <div className="main_card">
        <div className="card_design_bg">
          <div className="overlay_design"></div>
        </div>
        <div className="card_info">
          <div className="design_info">
            <p className="name">Design Projects</p>
            <p className="description">
              Experiência com o pacote Adobe (Photoshop, Illustrator, Adobe XD,
              After Effects e Premiere), conhecimento básico em Gimp e Figma,
              você pode ver todos meus projetos clicando no icone do Behance ali
              do lado em Social!
            </p>
          </div>

          <div className="icon">
            <p>Social</p>
            <a
              href="https://twitter.com/vini_alvesssss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <i class="fab fa-adobe"></i>
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-alves-9b151715a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <i class="fab fa-behance-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;

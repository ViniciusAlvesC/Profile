import React from "react";
import "./InfoCard.css";

const infoCard = () => {
  return (
    <div className="container">
      <div className="main_card">
        <div className="card_bg">
          <div className="overlay"></div>
        </div>

        <div className="card_info">
          <div>
            <p className="name">Vinícius Alves Coutinho</p>
            <div className="generic_info">
              <div className="basic_info">
                <span>Brasília, Distrito Federal, Brasil</span>
                <span>20 anos - 06/08/1999</span>
                <span>Ciência da computação</span>
              </div>
              <p className="description">
                Cerca de 1 ano experiencia em Desenvolvimento Web, utilizando
                das mais novas tecnologias do mercado (React, Nodejs, Go,
                MongoDB, etc..), cursando Ciência da computação (UniCEUB),
                atualmente no 5º Semestre, em busca de um estágio ou uma vaga
                como Desenvolvedor.
              </p>
            </div>
          </div>

          <div className="icon_set">
            <div className="icon">
              <p>Skills</p>
              <div>
                <i className="fab fa-node-js"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-js-square"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-html5"></i>
              </div>
            </div>

            <div className="icon">
              <p>Social</p>
              <div>
                <a
                  href="https://github.com/ViniciusAlvesC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://gitlab.com/vinicius.alves1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-gitlab"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/vin%C3%ADcius-alves-9b151715a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com/vini_alvesssss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="icon">
              <p>Others</p>
              <div>
                <i className="fab fa-discord"></i>
                <i class="fas fa-envelope"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default infoCard;

import React from "react";
import {
  Container,
  Card,
  CardInfo,
  CardBackground,
  Name,
  FlexColumn,
  IconSet,
  PersonalInfo,
  Description,
  IconGroup
} from "./Styles";
import infoCardBackground from "../assets/profileBg.svg";

const infoCard = () => {
  return (
    <Container>
      <Card>
        <CardBackground height={350} img={infoCardBackground}></CardBackground>

        <CardInfo>
          <div>
            <Name>Vinícius Alves Coutinho</Name>
            <FlexColumn>
              <PersonalInfo>
                <span>Brasília, Distrito Federal, Brasil</span>
                <span>20 anos - 06/08/1999</span>
                <span>Ciência da computação</span>
              </PersonalInfo>
              <Description tamanho={440}>
                Cerca de 1 ano experiencia em Desenvolvimento Web, utilizando
                das mais novas tecnologias do mercado (React, Nodejs, Go,
                MongoDB, etc..), cursando Ciência da computação (UniCEUB),
                atualmente no 5º Semestre, em busca de um estágio ou uma vaga
                como Desenvolvedor.
              </Description>
            </FlexColumn>
          </div>

          <IconSet>
            <IconGroup>
              <p>Skills</p>
              <div>
                <i className="fab fa-node-js"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-js-square"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-html5"></i>
              </div>
            </IconGroup>

            <IconGroup>
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
            </IconGroup>

            <IconGroup>
              <p>Others</p>
              <div>
                <i className="fab fa-discord"></i>
                <i className="fas fa-envelope"></i>
              </div>
            </IconGroup>
          </IconSet>
        </CardInfo>
      </Card>
    </Container>
  );
};

export default infoCard;

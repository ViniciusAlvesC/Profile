import React from "react";
import {
  Container,
  Card,
  CardBackground,
  CardInfo,
  Name,
  PersonalInfo,
  Description,
  IconGroup
} from "./Styles";
import designCardBackground from "../assets/designBg.svg";

function Design() {
  return (
    <Container>
      <Card>
        <CardBackground
          img={designCardBackground}
          height={350}
        ></CardBackground>

        <CardInfo>
          <div>
            <Name>Design Projects</Name>

            <PersonalInfo>
              <span>Illustrator | Photoshop | Gimp</span>
              <span>Adobe XD | Figma</span>
              <span>After Effects | Premiere</span>
            </PersonalInfo>

            <Description tamanho={440}>
              Experiência com o pacote Adobe (Photoshop, Illustrator, Adobe XD,
              After Effects e Premiere), conhecimento básico em Gimp e Figma,
              você pode ver todos meus projetos clicando no icone do Behance ali
              do lado em Social!
            </Description>
          </div>

          <IconGroup>
            <p>Social</p>
            <a
              href="https://twitter.com/vini_alvesssss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <i className="fab fa-adobe"></i>
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-alves-9b151715a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <i className="fab fa-behance-square"></i>
          </IconGroup>
        </CardInfo>
      </Card>
    </Container>
  );
}

export default Design;

import React from "react";
import { Container, MyFooter, FooterContent, Heart, Icons } from "./Styles";

function Footer() {
  return (
    <MyFooter>
      <Container>
        <FooterContent>
          <Icons>
            <i className="fab fa-discord"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fas fa-envelope"></i>
          </Icons>

          <p>
            Made whit{" "}
            <Heart>
              <i className="fas fa-heart"></i>
            </Heart>{" "}
            by Vinícius Alves
          </p>
        </FooterContent>
      </Container>
    </MyFooter>
  );
}

export default Footer;

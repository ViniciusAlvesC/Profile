import React from "react";
import { Container, MyFooter, FlexBetween, Heart, Icons } from "./Styles";

function Footer() {
  return (
    <MyFooter>
      <Container>
        <FlexBetween>
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
        </FlexBetween>
      </Container>
    </MyFooter>
  );
}

export default Footer;

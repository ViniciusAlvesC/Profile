import React from "react";
import { Container, Head, Navbar, NavItem, MyNav } from "./Styles";
import logo from "../assets/logodefm.svg";

const Nav = () => {
  return (
    <Head>
      <Container>
        <Navbar>
          <img src={logo} alt="" style={{width: `${110}px`}} />
          <MyNav>
            <NavItem>
              <li>
                <a href="/">Repositories</a>
              </li>
              <li>
                <a href="/">Design</a>
              </li>
            </NavItem>
          </MyNav>
        </Navbar>
      </Container>
    </Head>
  );
};

export default Nav;

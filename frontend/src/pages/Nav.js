import React from "react";
import { Container, Head, Navbar, NavItem } from "./Styles";
import logo from "../assets/iconmin.svg";

const Nav = () => {
  return (
    <Head>
      <Container>
        <Navbar>
          <img src={logo} alt="" style={{ width: `${110}px` }} />
          <NavItem>
            <li>
              <a href="/">Repositories</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
          </NavItem>
        </Navbar>
      </Container>
    </Head>
  );
};

export default Nav;

import styled from "styled-components";

//Utilitys

export const Flex = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heart = styled.span`
  i {
    color: red;
  }
`;

export const Icons = styled.div`
  i {
    font-size: 1.5em;
    color: #1e1e1e;
    margin-right: 15px;
  }
`;

//Container

export const Container = styled.div`
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
`;

//Nav

export const Head = styled.header`
  padding: 30px 10%;
  background: #ffffff;
  -webkit-box-shadow: 0 7px 15px -4px rgba(206, 206, 206, 1);
  -moz-box-shadow: 0 7px 15px -4px rgba(206, 206, 206, 1);
  box-shadow: 0 7px 15px -4px rgb(206, 206, 206);
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyNav = styled.div`
  li {
    display: inline-block;
    padding: 0px 20px;
  }

  li a {
    color: #313131;
    font-family: "Roboto", sans-serif;
    font-size: 1.2em;
  }
`;

export const NavItem = styled.ul`
  li a {
    font-weight: 500;
    font-size: 1.1em;
  }
`;

//Card

export const Card = styled.div`
  margin-top: 50px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 15px 0 rgba(206, 206, 206, 0.6);
`;

export const CardBackground = styled.div`
  background: url(${props => props.img});
  height: ${props => `${props.height}px`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px 8px 0px 0px;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  background-size: 100%;
  height: ${props => `${props.height}px`};
  border-radius: 10px 10px 0px 0px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 1.3em;
  color: #1e1e1e;
`;

export const PersonalInfo = styled.div`
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  max-width: 350px;
`;

export const IconGroup = styled.div`
  margin-right: 30px;

  i {
    font-size: 1.4em;
    margin: 8px 0 0 8px;
    color: #1e1e1e;
  }

  p {
    font-weight: bold;
    font-size: 0.96em;
    text-align: end;
    color: #1e1e1e;
  }
`;

//Search

export const SearchBar = styled.form`
  margin: 45px 0;

  input {
    border: none;
    padding: 15px 15px;
    width: 290px;
    border-radius: 0px 5px 5px 0px;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  i {
    padding: 15px;
    background: #fff;
    border-radius: 5px 0px 0px 5px;
  }
`;

//Repositories

export const CustomRepositories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;
`;

export const Repositorie = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 15px 0 rgba(206, 206, 206, 0.6);
  transition: all 0.35s ease;
  height: 420px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 18px 25px 0 rgb(197, 197, 197);
  }

  h3 {
    color: #1e1e1e;
    font-weight: 700;
  }
`;

export const RepositorieBackground = styled.div`
  background: transparent linear-gradient(180deg, #29c6e2 0%, #0077c7 100%) 0%
    0% no-repeat padding-box;
  height: 170px;
  border-radius: 8px 8px 0px 0px;
`;

export const RepoTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.2em;
`;

export const RepoInfo = styled.div`
  padding: 30px 25px 10px 25px;
`;

export const RepoDesc = styled.p`
  font-family: "Roboto", sans-serif;
  margin-top: 15px;
  font-weight: 400;
`;

export const Tags = styled.div`
  margin: 5px 0 0 0;
`;

export const Tag = styled.span`
  color: white;
  background: #5fd5e8;
  padding: 2px 15px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: bold;
  margin-right: 5px;
`;
//Footer

export const MyFooter = styled.footer`
  background: #fff;
  margin-top: 70px;
  padding: 35px;
`;

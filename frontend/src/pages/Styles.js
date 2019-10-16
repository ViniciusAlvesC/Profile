import styled from "styled-components";

const cssVariables = {
  textColor: "#1e1e1e",
  cardShadow: "0 10px 15px 0 rgba(206, 206, 206, 0.6)",
  cardShadowHover: "0 18px 25px 0 rgb(197, 197, 197)",
  white: "#fdfdff",
  titleSize: "1.3em",
  navItemSize: "1.1em",
  cardGradient: `transparent linear-gradient(180deg, #29c6e2 0%, #0077c7 100%) 0%
  0% no-repeat padding-box;`,
  overlayColor: "rgba(0, 0, 0, 0.2)",
  mediumMedia: {
    titleSize: "1.5em"
  }
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1080px",
  laptopL: "1440px",
  desktop: "2560px"
};

const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

//Utilitys

export const Flex = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heart = styled.span`
  i {
    color: #ff4848;
  }
`;

export const Icons = styled.div`
  i {
    font-size: 1.5em;
    color: ${cssVariables.textColor};
    margin-right: 15px;
  }
`;

//Container

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  @media ${devices.laptopL} {
    width: 90%;
  }
`;

//Nav

export const Head = styled.header`
  padding: 30px 10%;
  background: ${cssVariables.white};
  box-shadow: 0 7px 15px -4px rgb(206, 206, 206);
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.ul`
  li {
    display: inline-block;
    padding: 0px 20px;
  }
  li a {
    font-weight: 500;
    color: ${cssVariables.textColor};
    font-family: "Roboto", sans-serif;
    font-size: ${cssVariables.navItemSize};
  }
`;

//Card

export const Card = styled.div`
  margin-top: 50px;
  background: ${cssVariables.white};
  border-radius: 8px;
  box-shadow: 0 10px 15px 0 rgba(206, 206, 206, 0.6);

  @media ${devices.laptop} {
  }

  @media (max-width: 650px) {
  }
`;

export const CardBackground = styled.div`
  background: url(${props => props.img});
  height: ${props => `${props.height}px`};
  background-position: center;
  background-size: 120%;
  background-repeat: no-repeat;
  border-radius: 8px 8px 0px 0px;

  @media ${devices.tablet} {
    background-size: 165%;
  }

  @media ${devices.mobileL} {
    background-size: 190%;
  }

  @media ${devices.mobileM} {
    /* MUDAR BACKGROUND*/
    background-size: 220%;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 70px 70px 70px;

  @media ${devices.laptop} {
    padding: 50px 80px 70px 80px;
    flex-direction: column;
  }

  @media ${devices.tablet} {
    padding: 40px 60px 60px 60px;
  }

  @media ${devices.mobileL} {
    padding: 40px 45px 60px 45px;
  }
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: ${cssVariables.titleSize};
  color: ${cssVariables.textColor};

  @media ${devices.laptop} {
    font-size: ${cssVariables.mediumMedia.titleSize};
  }
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
  max-width: ${props => `${props.tamanho}px`};

  @media ${devices.laptop} {
    max-width: 100%;
  }
`;

export const IconGroup = styled.div`
  margin-right: 30px;

  i {
    font-size: 1.4em;
    margin: 8px 0 0 8px;
    color: ${cssVariables.textColor};
  }

  p {
    font-weight: bold;
    font-size: 0.96em;
    text-align: end;
    color: ${cssVariables.textColor};
  }

  @media ${devices.laptop} {
    margin-top: 25px;

    p {
      text-align: start;
    }
    i {
      margin: 8px 8px 0 0;
    }
  }
`;

export const IconSet = styled.div`
  display: flex;

  @media ${devices.tablet} {
    flex-direction: column;
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

    @media ${devices.mobileL} {
      width: 100%;
    }
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  i {
    padding: 15px;
    background: ${cssVariables.white};
    border-radius: 5px 0px 0px 5px;
  }
`;

//Repositories

export const CustomRepositories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;

  @media ${devices.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.tablet} {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`;

export const Repositorie = styled.div`
  background-color: ${cssVariables.white};
  border-radius: 8px;
  box-shadow: ${cssVariables.cardShadow};
  transition: all 0.35s ease;
  height: 100%;
  max-height: 450px;
  overflow: hidden;

  &:hover {
    box-shadow: ${cssVariables.cardShadowHover};
  }

  @media ${devices.tablet} {
    height: 390px;
  }

  @media ${devices.mobileL} {
    height: 430px;
  }
`;

export const RepositorieBackground = styled.div`
  background: url(${props => props.noise}), ${props => `${props.background}`}; 
  height: 170px;
  border-radius: 8px 8px 0px 0px;
`;

export const RepoTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: ${cssVariables.titleSize};
  color: ${cssVariables.textColor};
  font-weight: 600;

  @media ${devices.tablet} {
    font-size: 1.4em;
  }
`;

export const RepoInfo = styled.div`
  padding: 38px;
`;

export const RepoDesc = styled.p`
  font-family: "Roboto", sans-serif;
  margin-top: 15px;
`;

export const Tags = styled.div`
  margin: 5px 0;
  @media ${devices.tablet} {
    margin: 10px 0 0 0;
  }
`;

export const Tag = styled.span`
  color: white;
  background: ${props => `${props.tagColor}`};
  padding: 2px 15px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: bold;
  margin-right: 5px;

  @media ${devices.tablet} {
    font-size: 0.9em;
    padding: 3px 20px;
  }
`;
//Footer

export const MyFooter = styled.footer`
  background: ${cssVariables.white};
  margin-top: 70px;
  padding: 35px;

  p {
    @media ${devices.mobileL} {
      margin-top: 15px;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

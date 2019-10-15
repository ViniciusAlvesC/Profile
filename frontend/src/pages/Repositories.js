import React, { useState, useEffect } from "react";
import {
  Container,
  CustomRepositories,
  Repositorie,
  RepositorieBackground,
  RepoInfo,
  RepoDesc,
  RepoTitle,
  Tags,
  Tag
} from "./Styles";
import Axios from "axios";

function Repositories() {
  const [repo, setRepo] = useState({
    repos: []
  });

  useEffect(() => {
    searchRepo();
  }, []);

  const searchRepo = async () => {
    const response = await Axios.get(
      "https://api.github.com/users/ViniciusAlvesC/repos"
    );
    const newRepo = [];
    response.data.map(repo => {
      return newRepo.push(repo);
    });

    setRepo({
      repos: newRepo
    });
  };

  const renderCards = () => {
    const cards = repo.repos.map(repo => {

      let color = "";
      if (repo.language === "JavaScript") {
        color = "#FFCC41"
      } else if (repo.language === "Go") {
        color = "#29c6e2"
      } else if (repo.language === "HTML") {
        color = "#FF7010"
      }

      return (
        <Repositorie key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <RepositorieBackground></RepositorieBackground>
          </a>
          <RepoInfo>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <RepoTitle>{repo.name}</RepoTitle>
            </a>
            <Tags>
              <Tag color={color}>{repo.language}</Tag>
            </Tags>
            <RepoDesc>{repo.description}</RepoDesc>
          </RepoInfo>
        </Repositorie>
      );
    });
    return cards;
  };

  return (
    <Container>
      <CustomRepositories>{renderCards()}</CustomRepositories>
    </Container>
  );
}

export default Repositories;

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
      let gradient = "";

      if (repo.language === "JavaScript") {
        color = "#ffbd2fff";
        gradient =
          "transparent linear-gradient(180deg, rgba(252,185,61,1) 0%, #ffd50cff 90%) 0% 0% no-repeat padding-box;";
      } else if (repo.language === "Go") {
        color = "#29c6e2";
        gradient =
          "transparent linear-gradient(180deg, #29C6E2 0%, #0077C7 100%) 0% 0% no-repeat padding-box;";
      } else if (repo.language === "HTML") {
        repo.language = "HTML & CSS";
        color = "rgba(33,198,138,1)";
        gradient =
          "transparent linear-gradient(180deg, rgba(13,198,180,1) 8.1%, rgba(33,198,138,1) 79.5%) 0% 0% no-repeat padding-box;";
      }

      return (
        <Repositorie key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <RepositorieBackground gradient={gradient}></RepositorieBackground>
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

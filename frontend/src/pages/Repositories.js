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

      if (repo.language === "HTML") {
        repo.language = "HTML & CSS"
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
              <Tag>{repo.language}</Tag>
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

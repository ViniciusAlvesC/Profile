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
  Tag,
  SpiningIcon
} from "./Styles";

import api from "../services/api";
import noise from "../assets/noise.png";

function Repositories() {
  const [repo, setRepo] = useState({
    repos: []
  });

  const [loading, setLoading] = useState({
    loading: false
  });

  useEffect(() => {
    searchRepo();
  }, []);

  const searchRepo = async () => {
    const response = await api.get("/repos");
    const repos = [];
    response.data.map(repo => {
      return repos.push(repo);
    });

    setRepo({
      repos: repos
    });

    setLoading({
      loading: true
    });
  };

  const renderCards = () => {
    const cards = repo.repos.map(repo => {
      let gradient = "";
      let color = "";

      if (repo.language === "HTML") {
        repo.language = "HTML & CSS";
        color = "#783199";
        gradient = `transparent linear-gradient(180deg, #A347FF 0%, #C547FF 70%) 0%
        0% no-repeat padding-box;`;
      } else if (repo.language === "JavaScript") {
        color = "#319499";
        gradient = `transparent linear-gradient(180deg, #697BC7 20%, #69C3C7 90%) 0%
        0% no-repeat padding-box;`;
      } else if (repo.language === "Go") {
        color = "#EA57A1";
        gradient = `transparent linear-gradient(180deg, #FF6B61 20%, #FF6BA1 90%) 0%
        0% no-repeat padding-box;`;
      } else {
        color = "#318999";
        gradient = `transparent linear-gradient(180deg, #29c6e2 0%, #0077c7 100%) 0%
        0% no-repeat padding-box;`;
      }

      return (
        <Repositorie key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <RepositorieBackground
              background={gradient}
              noise={noise}
            ></RepositorieBackground>
          </a>
          <RepoInfo>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <RepoTitle>{repo.name}</RepoTitle>
            </a>
            <Tags>
              <Tag tagColor={color}>{repo.language}</Tag>
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
      {loading.loading ? (
        <CustomRepositories>{renderCards()}</CustomRepositories>
      ) : (
        <SpiningIcon>
          <i class="fas fa-circle-notch fa-spin"></i>
          <p>Loading Repositories</p>
        </SpiningIcon>
      )}
    </Container>
  );
}

export default Repositories;

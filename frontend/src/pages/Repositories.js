import React, { useState, useEffect } from "react";
import "./Repositories.css";
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
      return (
        <div className="repositorie" key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <div className="repositorie_bg"></div>
          </a>
          <div className="repo_info">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3>{repo.name}</h3>
            </a>
            <div className="tags">
              <span className="tag">{repo.language}</span>
            </div>
            <p className="repo_desc">{repo.description}</p>
          </div>
        </div>
      );
    });
    return cards;
  };

  return (
    <div className="container">
      <div className="repositories">{renderCards()}</div>
    </div>
  );
}

export default Repositories;

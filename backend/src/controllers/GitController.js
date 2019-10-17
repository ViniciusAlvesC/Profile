const axios = require("axios");
const repositories = [];

module.exports = {
  async gituser(req, res) {
    const response = await axios.get(
      "https://api.github.com/users/ViniciusAlvesC/repos"
    );

    const repos = response.data.map(repo => {

      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language
      };

    });

    return res.json(repos);
  }
};

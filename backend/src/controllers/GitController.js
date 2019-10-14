const axios = require("axios");

module.exports = {
  async gituser(req, res) {
    const response = await axios.get(
      "https://api.github.com/users/ViniciusAlvesC/repos"
    );

    const repos = response.data.map(user => {
      users = [];
      users.push([user.name, user.description, user.language]);
      return users;
    });

    return res.json(repos);
  }
};

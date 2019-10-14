const express = require("express");
const GitController = require("./controllers/GitController");

const router = express.Router();

router.get("/", GitController.gituser);

module.exports = router;

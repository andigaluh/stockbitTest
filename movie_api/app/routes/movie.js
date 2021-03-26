const express = require('express');
const dependencies = require('../config/dependencies');
const middlewareLogsDB = require("../infrastructure/middlewares/logsDB");

const buildMovieController = require('../controllers/Movie.controller');
const { buildCallbackResponse } = require('../infrastructure/callback');
const MovieController = buildMovieController(dependencies);

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the API for stockbit-test - REST omdb API." });
});
app.get("/movie", [middlewareLogsDB] , buildCallbackResponse(MovieController.getAllMovie));
app.get("/detail", [middlewareLogsDB] , buildCallbackResponse(MovieController.getMovieById));

module.exports = app;

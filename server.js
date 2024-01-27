const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const env = require("dotenv");
env.config();
const DbConnection = require("./databaseconnection");
DbConnection();
const movieSchema = require("./databaseSchema");
const popularMovie = require("./popularMovieSchema");
const onlineEvents = require("./onlineEventsSchema");
const port = 8081;

app.get("/movies/toprated", async (req, res) => {
  const movies = await movieSchema.find();
  return res.status(200).json({
    success: true,
    message: "Server running",
    data: movies,
  });
});

app.get("/movies/popular", async (req, res) => {
  const movies = await popularMovie.find();
  return res.status(200).json({
    success: true,
    message: "Server running",
    data: movies,
  });
});

app.get("/movies/online", async (req, res) => {
  const movies = await onlineEvents.find();
  return res.status(200).json({
    success: true,
    message: "Server running",
    data: movies,
  });
});

app.post("/movies/toprated", async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found",
    });
  }
  await movieSchema.create(data);
  const allMovies = await movieSchema.find();
  return res.status(200).send({
    data: allMovies,
  });
});

app.post("/movies/popular", async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found",
    });
  }
  await popularMovie.create(data);
  const allMovies = await popularMovie.find();
  return res.status(200).send({
    data: allMovies,
  });
});

app.post("/movies/online", async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(404).json({
      success: false,
      message: "No data found",
    });
  }
  await onlineEvents.create(data);
  const allMovies = await onlineEvents.find();
  return res.status(200).send({
    data: allMovies,
  });
});

app.delete("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movies = await movieSchema.find();

  const Movie = movies.filter((each) => each.id === id);
  if (!Movie) {
    return res.status(404).json({
      message: "Book not found",
    });
  }

  const index = movies.indexOf(Movie);
  movies.splice(index, 3);
  return res.status(200).json({
    data: movies,
  });
});

app.listen(port, () => {
  console.log(`server running in ${port}`);
});

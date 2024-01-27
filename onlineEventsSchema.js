const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const onlineEventSchema = new Schema({
  adult: String,
  backdrop_path: String,
  genre_ids: [Number],
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: String,
  vote_average: Number,
  vote_count: Number,
  rating: Number,
});

// Collection name => book.
module.exports = mongoose.model("OnlineEvents", onlineEventSchema);

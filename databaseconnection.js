const mongoose = require("mongoose");

const dbConnection = () => {
  const url = process.env.MONGO_URL;
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("DB connected");
  });
};

module.exports = dbConnection;

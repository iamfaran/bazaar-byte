// Server.js is the main entry point for the backend server.
// It is responsible for setting up the server, connecting to the database, and defining the routes.

import express from "express";
import dotenv from "dotenv";

// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
dotenv.config();

// wrap the app in express to create a new instance of the Express application
const app = express();
const PORT = process.env.PORT || 5000;

// we also need a listen method to start the server

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// TESTING THE SERVER
// send response to the client HELLO WORLD

app.get("/", (req, res) => {
  res.send("Hello World");
});

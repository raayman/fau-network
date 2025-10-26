// This is  the main file for running the backend server

// imports
import express, { Request, Response } from "express";
import dotenv from "dotenv";

// env variables that are needed to run the server
dotenv.config();

// change the .env variable into a number
const PORT = Number(process.env.PORT) || 8000;

// initialize the server, and assign it to a variable (everything inbetween runs )
const app = express();

// create the middleware to be able to parse the json
app.use(express.json()); // middleware that makes sure the request that are json to be broken down

// routes

// testing route
app.get("/", (request: Request, response: Response) => {
  // send a test message
  response.send("If your seeing this the backend request is working properly");
});

// start the actual server
// listen - has the port run on 5000 and then the 0.0.0.0 listens to everything so that docker can connect and run
app.listen(PORT, "0.0.0.0", () => {
  console.log("This server is running on the correct port rn:" + PORT);
});

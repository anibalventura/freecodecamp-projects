const express = require("express");
const app = express();
const mongo = require("mongodb");
const mongoose = require("mongoose");
const shortid = require("shortid");
const bodyParser = require("body-parser");
const cors = require("cors");

// const mongoose = require('mongoose')
// mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/exercise-track' )

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Html and Css for page view
app.use("/public", express.static(process.cwd() + "/public"));
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// PORT
const portNumber = process.env.PORT || 8000;
app.listen(portNumber, () => {
  console.log(`Listening on port ${portNumber}`);
});

// App

// These are from the frontend forms
// ON '/api/exercise/new-user' WE GET     username
// ON '/api/exercise/add'      WE GET     userId description duration date

// 0. Create our local DATABASE
const users = [];
const exercises = [];

// CUSTOM FUNCTIONS
const getUsernameById = (id) => users.find((user) => user._id === id).username;
const getExercisesFromUserWithId = (id) =>
  exercises.filter((exe) => exe._id === id);

// 1. I can create a user by posting form data username to
// /api/exercise/new-user and returned will be an object with username and _id.

app.post("/api/exercise/new-user", (req, res) => {
  const { username } = req.body;

  const newUser = {
    username,
    _id: shortid.generate(),
  };

  users.push(newUser);

  return res.json(newUser);
});

// 2. I can get an array of all users by getting api/exercise/users
// with the same info as when creating a user.

app.get("/api/exercise/users", (req, res) => {
  return res.json(users);
});

// 3. I can add an exercise to any user by posting form data
// userId(_id), description, duration, and optionally date to /api/exercise/add.
// If no date supplied it will use current date.
// Returned will be the user object with also with the exercise fields added.
app.post("/api/exercise/add", (req, res) => {
  const { userId, description, duration, date } = req.body;

  // IMPORTANT! we are assuming that the data coming from the form is correct!

  const dateObj = date === "" ? new Date() : new Date(date);

  const newExercise = {
    _id: userId,
    description,
    duration: parseInt(+duration),
    date: dateObj.toString(),
  };

  exercises.push(newExercise);

  res.json(newExercise);
});

// 4. I can retrieve a full exercise log of any user by getting
// /api/exercise/log with a parameter of userId(_id). Return will be the user
// object with added array log and count (total exercise count).

// 5. I can retrieve part of the log of any user by also passing
// along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)

app.get("/api/exercise/log", (req, res) => {
  const { userId, from, to, limit } = req.query;

  let log = getExercisesFromUserWithId(userId);

  // IMPORTANT! we are assuming that the data coming from the form is correct!

  if (from) {
    const fromDate = new Date(from);
    log = log.filter((exe) => new Date(exe.date) >= fromDate);
  }

  if (to) {
    const toDate = new Date(to);
    log = log.filter((exe) => new Date(exe.date) <= toDate);
  }

  if (limit) {
    log = log.slice(0, +limit);
  }

  res.json({
    _id: userId,
    username: getUsernameById(userId),
    count: log.length,
    log,
  });
});

// Not found middleware
app.use((req, res, next) => {
  return next({ status: 404, message: "not found" });
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage;

  if (err.errors) {
    // mongoose validation error
    errCode = 400; // bad request
    const keys = Object.keys(err.errors);
    // report the first validation error
    errMessage = err.errors[keys[0]].message;
  } else {
    // generic or custom error
    errCode = err.status || 500;
    errMessage = err.message || "Internal Server Error";
  }
  res.status(errCode).type("txt").send(errMessage);
});

const express = require("express");
const app = express();
const portNumber = process.env.PORT || 8000;
const cors = require("cors");
app.use(cors());

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.listen(portNumber, () => {
  console.log(`Listening on port ${portNumber}`);
});

// App
app.get("/api/timestamp/:dateString?", (request, response) => {
  const dateString = request.params.dateString;

  let date;
  // If the date string is empty it should be equivalent to trigger new Date(),
  // i.e.the service uses the current timestamp.
  if (!dateString) {
    date = new Date();
  } else {
    // non-empty dateString
    // if dateString is integer, convert dateString to a integer
    if (!isNaN(dateString)) {
      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  }

  // If the date string is invalid the api returns a JSON having the structure
  // {"error" : "Invalid Date" }.
  date.toString() === "Invalid Date"
    ? response.json({ error: date.toString() })
    : // If the date string is valid the api returns a JSON having the structure
      // e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
      response.json({ unix: date.getTime(), utc: date.toUTCString() });
});
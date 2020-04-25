const express = require("express");
const app = express();
const portNumber = process.env.PORT || 8000;
const cors = require("cors");
app.use(cors());

app.get("/api/whoami", (request, response) => {
  const ipadress = "127.0.0.1";
  const language = request.header("Accept-Language");
  const software = request.header("User-Agent");

  response.json({ipadress, language, software});
});

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.listen(portNumber, () => {
  console.log(`Listening on port ${portNumber}`);
});

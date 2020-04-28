const express = require("express");
const mongo = require("mongodb");
const mongoose = require("mongoose");
const dns = require("dns");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());

// Html and Css for page view
app.use(bodyParser.urlencoded({ extended: false }));
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

const links = [];
let id = 0;

app.post("/api/shorturl/new", (req, res) => {
  const { url } = req.body;

  const noHTTPSurl = url.replace(/^https?:\/\//, "");

  // check if this url is valid
  dns.lookup(noHTTPSurl, (err) => {
    if (err) {
      return res.json({
        error: "invalid URL",
      });
    } else {
      // increment id
      id++;

      // create new entry for our arr
      const link = {
        original_url: url,
        short_url: `${id}`,
      };

      links.push(link);

      console.log(links);

      // return this new entry
      return res.json(link);
    }
  });
});

app.get("/api/shorturl/:id", (req, res) => {
  const { id } = req.params;

  console.log("id from query", id);

  const link = links.find((l) => l.short_url === id);

  console.log("link found", link);

  if (link) {
    return res.redirect(link.original_url);
  } else {
    return res.json({
      error: "No short url",
    });
  }
});

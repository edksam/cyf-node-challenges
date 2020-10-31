const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4000;

// Where we will keep books

let routes = [
  {
    "/pharmcies": "retruns an array of pharmacies in a specific area",
  },
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json(routes);
});

app.listen(port);

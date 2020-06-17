const express = require("express");
const database = require("./utils/db");
//const cors = require("cors");
const routes = require("./routes")

require('dotenv').config()
const { LocalConfig } = require('./utils/config')
const port = LocalConfig.PORT || 5000

const app = express();

// executing the database()
database();

// Middlewares for service request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());

// Routes
app.use(routes);

// middleware for handling file not found error
app.use((req, res, next) => {
  const err = new Error("Request not found");
  next(err);
});

// middleware for handling all errors
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;
  res
    .status(status)
    .json({ error: { success: false, message: error.message } });
});

app.listen(port, () => console.log("server started at " + port));

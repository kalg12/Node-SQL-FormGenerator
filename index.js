const express = require("express");
const { query } = require("./src/database/db");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

//Middlewares
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Server
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

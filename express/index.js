const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mysql = require("mysql");
const db = require("./connection");
const response = require("./response");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  response(200, "ini data", "hello world", res);
});

app.get("/mahasiswa", (req, res) => {
  response(200, "hello mahasiswa", res);
});

app.get("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim;
  response(200, `hello mahasiswa specific by id ${nim}`, res);
});

app.post("/mahasiswa", (req, res) => {
  response(200, "Ini postingan data ", res);
});

app.put("/mahasiswa", (req, res) => {
  response(200, "Ini put atau penghapusan data ", res);
});

app.delete("/mahasiswa", (req, res) => {
  response(200, "Ini delete atau penghapusan data ", res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

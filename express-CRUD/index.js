const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./conection");
const response = require("./respon");
// routes / URL / END POINT utama dengan method get

app.use(bodyParser.json());

app.get("/", (req, res) => {
  db.query("SELECT * FROM mahasiswa", (err, result) => {
    response(200, result, "get all data form mahasiswa", res);
  });
});
app.get("/find", (req, res) => {
  const sql = `SELECT nama_lengkap FROM mahasiswa where nim = ${req.query.nim}`;
  db.query(sql, (error, result) => {
    response(200, result, "find mahasiswa name", res);
  });
});
app.put("/update", (req, res) => {
  console.log({ updateData: req.body });
  res.send("update success");
});

app.post("/login", (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send("login success");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

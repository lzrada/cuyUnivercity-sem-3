const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// routes / URL / END POINT utama dengan method get

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello", (req, res) => {
  console.log({ urlParam: req.query });
  res.send("hello ardi apa kabarmu?!");
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

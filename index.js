const express = require("express");
const app = express();

app.set("port", process.env.PORT || 80);
app.get("/", (req, res) => res.send("<br><h1>Hello World!</h1> " + req.ip));

app.listen(app.get("port"), function() {
  console.log("Server Started at " + Date() + " at port : " + app.get("port"));
});

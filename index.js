const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("DB connected!"))
  .catch((error) => console.log(error));
const loader = require("./loader");
const PORT = process.env.PORT;

loader(app);

app.get("/", (req, res) => res.send("Ok"));
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

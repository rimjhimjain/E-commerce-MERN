const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());
//Route import
const product = require("./routes/productRoute");
app.use("/api/v1",product);

//midleware for err
app.use(errorMiddleware);

module.exports = app
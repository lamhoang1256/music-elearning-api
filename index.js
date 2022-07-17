const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

const authRoutes = require("./src/api/routes/authRoutes");
const userRoutes = require("./src/api/routes/userRoutes");

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(8080, () => {
  console.log("Server is running");
});

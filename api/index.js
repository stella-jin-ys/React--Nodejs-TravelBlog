const express = require("express");
const listEndpoints = require("express-list-endpoints");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const multer = require("multer");
const port = 8000;

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log(`server running on: ${port}`);
});

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
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on(`connected`, () => {
  // the string "connected" 👆☝ has to be "connected" nothing more nothing less
  console.log(`mongo connected Successfully!!`);
  app.listen(port, () => {
    console.table(listEndpoints(app));
    console.log(`server running on: ${port}`);
  });
});

mongoose.connection.on(`error`, (err) => {
  console.log(`Mongo Error: ${err}`);
});

// app.use(
//     cors({
//         origin:'*'
//     }))

// app.listen("8000", () => {
//   console.log("Backend is running");
// });

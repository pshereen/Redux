require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
var cors = require("cors");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/posts", postRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("abc");
// });

// app.get("/api/notes", (req, res) => {
//   console.log("GET notes");
//   res.json(notes);
// });

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server start on PORT ${PORT}`));

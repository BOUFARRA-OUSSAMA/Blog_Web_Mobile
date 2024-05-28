require("express-async-errors");
require("dotenv").config();
require("./db");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const postRouter = require("./routes/post");
const { handleAsyncError } = require("./middlewares/error");
const someMiddleware = require('./middlewares/someMiddleware'); // Example middleware
const errorHandler = require('./middlewares/errorHandler'); // Example error handler

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));
app.use(express.json());

// Custom middleware
if (typeof someMiddleware !== 'function') {
  throw new TypeError('someMiddleware must be a function');
}
app.use(someMiddleware);

// Route handlers
app.use("/api/post", postRouter);

// Basic route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling middleware
if (typeof errorHandler !== 'function') {
  throw new TypeError('errorHandler must be a function');
}
app.use(errorHandler);

// Uncomment this line if you want to use handleAsyncError middleware
// app.use(handleAsyncError);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log("Port is listening on: ", "http://localhost:" + PORT)
);

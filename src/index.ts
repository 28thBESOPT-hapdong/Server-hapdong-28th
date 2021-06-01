import express from "express";
const app = express();
import connectDB from "./loader/db";

// Connect Database
connectDB();

app.use(express.urlencoded());
app.use(express.json());

// Define Routes
app.use("/api/exhibition", require("./api/exhibition"));
app.use("/api/project", require("./api/project"));
app.use("/api/banner", require("./api/banner")); //안에 하나하나 경로까지 안넣어줘도 됨
app.use("/api/detail", require("./api/detail"));
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(5000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
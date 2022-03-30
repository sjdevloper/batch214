var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const todos = [
  // { todoContent: "write some code", isCompleted: false },
  // { todoContent: "watch some movies", isCompleted: false },
  // { todoContent: "listen some music", isCompleted: false },
];

app.get("/allTodos", (req, res) => {
  res.json(todos);
});

app.post("/addTodo", (req, res) => {
  if (req.body && req.body.todoContent && req.body.isCompleted != undefined) {
    todos = [...todos, req.body];
    res.json({ message: "succeed", status: 200 });
    return;
  }
  res.json({
    message: "failed",
    status: 500,
  });
});

app.post("/modTodo", (req, res) => {
  if (req.body && req.body.index >= 0 && req.body.index < todos.length) {
    const index = req.body.index;
    todos[index].isCompleted = !todos[index].isCompleted;
    res.json({ message: "succeed", status: 200 });
    return;
  }
  res.json({
    message: "failed",
    status: 500,
  });
});

app.post("/delTodo", (req, res) => {
  if (req.body && req.body.index >= 0 && req.body.index < todos.length) {
    const index = req.body.index;
    todos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    res.json({ message: "succeed", status: 200 });
    return;
  }
  res.json({
    message: "failed",
    status: 500,
  });
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

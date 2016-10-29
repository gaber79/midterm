"use strict";

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.NODE_ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const cookieSession = require("cookie-session");
const app         = express();

console.log('Running in "%s" mode', ENV);
if(ENV !== 'production')
{
  require('dotenv').config();
}

const knexConfig  = require("./knexfile")[ENV];
const knex        = require("knex")(knexConfig);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');



// cookie session setup
app.use(cookieSession({
  name: 'session',
  keys: ['secret']
}))
// console.log(process.env);

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const commentsRoutes = require("./routes/comments");
const activityRoutes = require("./routes/activity");
const resourcesRoutes = require("./routes/resources");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use("/api/comments", commentsRoutes(knex));
app.use("/api/resources", resourcesRoutes(knex));
app.use("/api/activity", activityRoutes(knex));

// Home page
app.get("/", (req, res) => {
  if(!req.session.username) {
    res.redirect("/login")
} else {

  res.render("index");
}
});

// search page
app.post("/search", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
})

app.post("/login", (req, res) => {
  knex
    .select("username")
    .from("users")
    .where({username: req.body.username})
    .then((results) => {
      // console.log('test db connect.')
      // res.json(results);
      if (results.length > 0) { // found a user
        req.session.username = results[0].username;
        // console.log("!!!!!!!!", results)
        res.redirect("/");
      }
    });
})

  // where do you go after login. to user page
  app.get("/users/:id", (req, res) => {
    var username = req.param.id
    res.redirect("/users/" + username);
  })


/*
GET /comments
POST /comments
GET /comments/new
GET /comments/:id
GET /comments/:id/edit
PUT /comments/:id
DELETE /comments/:id
*/



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

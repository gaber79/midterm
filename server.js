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
app.set('view options', {layout: 'other'});
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


// Home page ----------------------------------------------------------------------index page
app.get("/", (req, res) => {
  if(!req.session.username) {
    res.redirect("/login")
} else {
  let templateVars = {
    username: req.session.username
  }
  console.log("This cookie is in the index page. ", req.session.username);
  res.render("index", templateVars);
}
});

<<<<<<< HEAD
// SEARCH RESULTS
app.get("/search", (req, res) => {

  let searchTerm = req.query.search;
  debugger;
 //run query for search term
  knex
    .select('*')
    .from('resources')
    .where('urls', 'like', `%${searchTerm}%`)
    .orWhere('type', 'like', `%${searchTerm}%`)
    .orWhere('topic', 'like', `%${searchTerm}%`)
    .then((results) => {
      // console.log(results);
      debugger;
      res.render('search-results', results);
      debugger;
    }, function errorCb(err) {
      throw err;
  })
=======
// -------------------------------------------------------------------------------- end of index

// search page
app.post("/search", (req, res) => {
  res.render("index");
>>>>>>> userfeature
});

<<<<<<< HEAD
=======
app.get("/login", (req, res) => {
  res.render("login");
})


  
  // login post. creates a cookie for user. --------------------------------------------user section
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
          // console.log("!!!!!!!!", req.session.username)
          res.redirect("/");
        }
      });
  })
<<<<<<< HEAD
  
  app.get("/users")
=======


>>>>>>> userfeature

  // where do you go after login. to user page
  app.get("/users/1", (req, res) => {
    knex
      .select('*')
      .from('user_activity')
      .join('comments', 'user_activity.userid', '=', 'comments.userid')
      .where('comments.userid', '=', '1')
      .then((results) => {
        // console.log(results)
        res.json(results);
        res.render('user')
      // var username = req.param.id
      // res.redirect("/users/" + username);
      })
  })

  // ----------------------------------------------------------------------------------end of user section

  // resources new form -----------------------------------------------------------------------resource section
  app.get("/resources/new", (req, res) => {
    // app.use("/api/resources", resourcesRoutes(knex));
    // console.log("it works here. you got it.")
    res.render("resourceform");
  });
  
  app.get("/resources/:id", (req, res) => {
    knex 
      .select('*')
      .from('resources')
      .where('resourcesid', '=', req.params.id)
      .limit(1)
      .then((results) => {
        // console.log(results[0])
        let templateVars = {
          resourcesid: req.params.id,
          urls: results[0].urls,
          type: results[0].type,
          topic: results[0].topic
        }
        // console.log(templateVars)
      res.render("resources_show", templateVars)
      })
  });

<<<<<<< HEAD
  // post new resource
  app.post("/resources", (req, res) => {
<<<<<<< HEAD
=======

  // post new resource
  app.post("/resources", (req, res) => {
>>>>>>> userfeature
    var newResource = {
      urls: req.body.urls,
      type: req.body.type,
      topic: req.body.topic
    }
      knex
        .insert(newResource)
        .into('resources')
        .then( function (result) {
          knex
            .select('*')
            .from('resources')
            .orderBy('resourcesid', 'desc')
            .limit(1)
            .then( function (newresult) {
              var resID = newresult[0].resourcesid
<<<<<<< HEAD
=======
          // res.json({sucess: true, message: 'ok' });
>>>>>>> userfeature
          res.redirect("/resources/" + resID)
        });
        })
  });


  // get resources
  // app.get("/resources", (req, res) => {
  //   app.use("/api/resources", resourcesRoutes(knex));
  //   res.render("index");
  // });

  // -----------------------------------------------------------------------end of resource section
<<<<<<< HEAD
<<<<<<< HEAD
=======
    res.redirect("/index")
  })
>>>>>>> ccc17cc58db68f24f22172d7ee1ad981a70735f0

>>>>>>> 442c9dba36d784089d8d9548b9e6f537f9105d68
=======
>>>>>>> userfeature
=======


  // sorting routes-----------------------------------------------------------------------start of sort section

  app.post("/comment", (req, res) => {
  res.redirect("index");
  });
  app.get("/filter-by-video", (req, res) => {
    res.render("sort-video");
  })
  app.get("/filter-by-links", (req, res) => {
    res.render("sort-links");
  })
  app.get("/filter-by-pictures", (req, res) => {
    res.render("sort-pictures");
  })


>>>>>>> userfeature
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

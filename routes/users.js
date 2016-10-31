"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        // console.log('test db connect.')
        res.json(results);
    });
  });

    // where do you go after login. to user page
  router.get("/1", (req, res) => {
    knex
      .select('*')
      .from('comments')
      .join('resources', 'comments.resourcesid', '=', 'resources.resourcesid')
      .where('userid', '=', '1')
      .then((results) => {
        res.json(results);
        // res.render('user', results)
      // var username = req.param.id
      // res.redirect("/users/" + username);
      })
  })

  return router;
}

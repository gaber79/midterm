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

  router.get("/users/:id", (req, res) => {
    knex
      .select("*")
      .from("users")
      .where({ username: req.params.id })
      .then((results) => {
        res.json(results);
        // res.render("index");
      })
  })

  //  router.get("/:id/comments", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("comments")
  //     .where({ resourcesid: req.params.id })
  //     .then((results) => {
  //       // console.log('test db connect.')
  //       res.json(results);
  //   });
  // });

  return router;
}

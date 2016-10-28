"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("resources")
      .then((results) => {
        // console.log('test db connect.')
        res.json(results);
    });
  });

  router.get("/:id/comments", (req, res) => {
    knex
      .select("*")
      .from("comments")
      .where({ resourcesid: req.params.id })
      .then((results) => {
        // console.log('test db connect.')
        res.json(results);
    });
  });

  //  router.get("/comments", (req, res) => {
  //   knex
  //     .select("*")
  //     .from("comments")
  //     .then((results) => {
  //       // console.log('test db connect.')
  //       res.json(results);
  //   });
  // });


  return router;
}

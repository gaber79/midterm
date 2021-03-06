"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      // where clause >>> access search
      .select("*")
      .from("resources")
      .then((results) => {
        // console.log('test db connect.')
        res.json(results);
    });
  });

  return router;
}

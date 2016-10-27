"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("user_activity")
      .then((results) => {
        // console.log('test db connect.')
        res.json(results);
    });
  });

  return router;
}

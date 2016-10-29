"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("comments")
      .then((results) => {
        // console.log('test db connect.')
        res.json(results);
    });
  });

  router.post("/", (req, res) => {

      knex('comments').insert({resourcesid: req.body.resourceid, userid: 1, comment: req.body.commenttext})
      .then((result) => {

        res.json({ success: true});
      })

    });


  return router;
}

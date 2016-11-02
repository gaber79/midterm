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


  router.get("/sortvids", (req, res) => {
    knex
      .select('*')
      .from('comments')
      .join('resources', 'comments.resourcesid', '=', 'resources.resourcesid')
      .where('type', '=', 'video')
      .then((results) => {
        res.json(results);
      });
  });
  router.get("/sortlinks", (req, res) => {
    knex
      .select('*')
      .from('comments')
      .join('resources', 'comments.resourcesid', '=', 'resources.resourcesid')
      .where('type', '=', 'link')
      .then((results) => {
        res.json(results);
      });
  });
  router.get("/sortpictures", (req, res) => {
    knex
      .select('*')
      .from('comments')
      .join('resources', 'comments.resourcesid', '=', 'resources.resourcesid')
      .where('type', '=', 'picture')
      .then((results) => {
        res.json(results);
      });
  });


  return router;
}

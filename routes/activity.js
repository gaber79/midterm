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

// // SEARCH RESULTS
// router.get("/search", (req, res) => {

//   let searchTerm = req.query.search;
//  //run query for search term
//   knex
//     .select('*')
//     .from('resources')
//     .where('urls', 'like', `%${searchTerm}%`)
//     .orWhere('type', 'like', `%${searchTerm}%`)
//     .orWhere('topic', 'like', `%${searchTerm}%`)
//     .then((results) => {
//       // res.render("searchoutput", {results});
//       res.json(results);
//     // }, function errorCb(err) {
//     //   throw err;
//     });
// });

// //SHARE GET & POST
// router.get("/share", (req, res) => {
//   res.render("share-page.ejs");
// });

// router.post("/share", (req, res) => {
//   let urlinput = req.body.urlinput;
//   let topicinput = req.body.topicinput;
// });



'use strict';

var express = require('express');
var router = express.Router();
const db = require ("./models");


// GET /questions
// Route for questions collections
router.get('/', function(req, res){
    res.json({
        response: "you sent me a get request"});
});


// POST /questions
// Route for creating questions
router.post('/', function (req, res) {
    res.json({ 
        response: "you sent me a POST request",
        body: req.body
    });
});

// GET /questions/:id
// Route for specific question
router.get('/:qID', function (req, res) {
    res.json({
        response: "you sent me a GET request for ID " + req.params.qID
    });
});


// ANSWERS ROUTES
// POST /questions/id/answers
// Route for creating an answer
router.post('/:qID/answers', function (req, res) {
    res.json({
        response: "you sent me a POST request to /answers",
        questionId: req.params.qID,
        body: req.body
    });
});

// PUT /questions/qID/answers/:aID
// Route for updating an answer
router.put('/:qID/answers/:aID', function (req, res) {
    res.json({
        response: "you sent me a PUT request to /answer",
        questionId: req.params.qID,
        answerId: req.params.aID,
        body: req.body
    });
});

// DELETE /questions/qID/answers/:aID
// Route for DELETING an answer
router.delete('/:qID/answers/:aID', function (req, res) {
    res.json({
        response: "you sent me a DELETE request to /answer",
        questionId: req.params.qID,
        answerId: req.params.aID,
    });
});


// POST /questions/qID/answers/:aID/vote-up
// POST /questions/qID/answers/:aID/vote-down
// Route for voting on an answer
router.post('/:qID/answers/:aID/vote-:dir', function (req, res) {
    res.json({
        response: "you sent me a POST request to /vote" + req.params.dir,
        questionId: req.params.qID,
        answerId: req.params.aID,
        vote: req.params.dir
    });
});
module.exports = router;
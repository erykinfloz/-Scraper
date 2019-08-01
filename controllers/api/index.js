'use strict';

var express = require('express');
var router = express.Router();
var Article = require('../models/article.js');

// Route
router.get('/', function (req, res) {
    Article
        .find({})
        .sort('-date')
        .limit(20)
        .exec(function (error, articles) {
            if (error) {
                console.log(error);
                res.status(500);
            } else {
                console.log(articles);
                let hbsObj = {
                    title: 'Hacker Alert',
                    subtitle: '1337',
                    articles: articles
                };
                res.render('index', hbsObj);
            }
        });
});



router.use('/api', require('./api'));
module.exports = router;

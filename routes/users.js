var express = require('express');
var router = express.Router();
require('../models/users.schema.js');
var Twitentry = require('mongoose').model('TwitEntry');

router.get('/:twitter_handle', function(req, res){
    Twitentry.find({ "twitter_handle": req.params.twitter_handle }, function(err, response){
        res.json(response);
    });
});
router.post('/', function(req, res){
    Twitentry.create({
        twitter_handle: req.body.handle,
        profile_image: "image",
        top_successful_tweet: "top tweet!",
        top_favorited_tweet: "FAV",
        top_retweeted_tweet: "RT",
        account_age: "Too old for this",
        tweet_positivity: 111.5,
        hourly_success: [0],
        hourly_activity: [8],
        weekly_succes: [123],
        weekly_activity: [23423],
        top_words: ["weow"],
        top_hashtags: ["hashtag"],
        date_created: new Date(20011213),
        authenticated: false
    }, function(response){
        res.json(response);
    })
});

module.exports = router;

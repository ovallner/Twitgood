var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twitgood');

var TwitgoodSchema = mongoose.Schema({
    twitter_handle: String,
    profile_image: String,
    top_successful_tweet: String,
    top_favorited_tweet: String,
    top_retweeted_tweet: String,
    account_age: String,
    tweet_positivity: Number,
    hourly_success: [Number],
    hourly_activity: [Number],
    weekly_succes: [Number],
    weekly_activity: [Number],
    top_words: [String],
    top_hashtags: [String],
    date_created: Date,
    authenticated: Boolean
}, {collection: "users"});

var TwitModel = mongoose.model("TwitEntry", TwitgoodSchema);

module.exports = TwitModel;

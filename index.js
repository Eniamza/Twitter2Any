// COOKIE
require('dotenv').config()
const fs = require('fs'); //FS Requiring
const recordfile = "./record.json"
const record = require(recordfile);

const {fetchlastTweet} = require("./modules/functions")

const {lastTweetTime,LastTweetID} = require("./record.json") //Importing file to keep track of the last Tweet

let check_duration = 3600000 // Interval For Schecking

const { Rettiwt } = require('rettiwt-api');

const rettiwt = new Rettiwt(process.env.COOKIE);

rettiwt.tweet.search({
	fromUsers: ['DooggiesNFT']
})
.then(data => {
	fetchlastTweet(data)
})
.catch(err => {
	console.log(err)
});
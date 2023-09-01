// COOKIE
require('dotenv').config()
const fs = require('fs');

const {lastTweetTime,LastTweetID} = require("./record.json")

const { Rettiwt } = require('rettiwt-api');

const rettiwt = new Rettiwt(process.env.COOKIE);

rettiwt.tweet.search({
	fromUsers: ['DooggiesNFT']
})
.then(data => {
	console.log(Date.parse(data.list[5].createdAt))
	console.log(Date.parse("Thu Aug 31 18:00:01 +0000 2023"))
	lastTweetTime = 11111111111111111
})
.catch(err => {
	console.log(err)
});
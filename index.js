// COOKIE
require('dotenv').config()
const fs = require('fs'); //FS Requiring
const recordfile = "./record.json"
const record = require(recordfile);

const {fetchlastTweet} = require("./modules/functions")

const {lastTweetTime,LastTweetID} = require("./record.json") //Importing file to keep track of the last Tweet

let LastID = LastTweetID
let lastTime = lastTweetTime

let check_duration = 3600000 // Interval For Schecking

const { Rettiwt } = require('rettiwt-api');

const rettiwt = new Rettiwt(process.env.COOKIE);

let newTweet

setInterval(checkNew, 5000);

function checkNew() {
	rettiwt.tweet.search({
		fromUsers: ['Eniamza']
	})
	.then(data => {
		
		newTweet = fetchlastTweet(data,LastID,lastTime)
		
		if(newTweet == undefined){
			let d = new Date()
			console.log(`No new Tweets at ${d.toGMTString()}`)
			return
		}
	
		lastTime = Date.parse(newTweet.createdAt)
		LastID = record.LastTweetID = newTweet.id
		record.lastTweetTime = Date.parse(newTweet.createdAt)
		record.LastTweetID = newTweet.id
		console.log(`New Tweet Detected! Link: https://twitter.com/eniamza/status/${newTweet.id}`)
		fs.writeFileSync(recordfile, JSON.stringify(record,null,2));
	
	})
	.catch(err => {
		console.log(err)
	})
}

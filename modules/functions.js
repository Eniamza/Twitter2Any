const fetchlastTweet = function (usrData,lastID,lastTime) {

    let tweetlist = usrData.list
    let tweetlen = tweetlist.length
    

    for(let i = 0; i<tweetlen;i++)
    {

        let currTweet = tweetlist[i]
        if(currTweet.id != lastID && Date.parse(currTweet.createdAt)>lastTime && currTweet.quoted == undefined && currTweet.replyTo == undefined)
        {
            
            return currTweet
        }

    }

}

module.exports = {fetchlastTweet}
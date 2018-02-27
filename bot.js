console.log('The bot is starting.');

var Twit = require('twit');

var config =require('./config');// API keys

var T = new Twit(config);//Twit object with API keys in config.js

tweetIt();
setInterval(tweetIt,1000*30);

function tweetIt() {
    var r = Math.floor(Math.random()*100);
    var tweet={
        status:'Here is a #RandomNumber :'+r+'.'
    }

    T.post('statuses/update',tweet,tweeted);

    function tweeted(err,data,response){
        if(err){
            console.log("Something went wrong!");
        }
        else{
            console.log("It worked!");
        }
    }
}


/* //To get tweets
var params= {
    q: 'rainbow',       //parameters
    count: 2
};

T.get('search/tweets',params,gotData);

function gotData(err, data , response){
    var tweets =data.statuses;
    for(var i=0;i<tweets.length;i++){
        console.log(tweets[i].text);
    }
   // console.log(data);
}
*/


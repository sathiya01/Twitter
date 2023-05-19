

// const user = fetch(githubAPI)
// .then(function(usr) {
//     console.log(usr)
//     return usr.json()
// })
// .then( function(usrJson) {
//     console.log(usrJson)
//     console.log(usrJson[6].login)
//     console.log(usrJson[6].repos_url)
// })
// .catch(err => console.log(err, "here"))

// const githubAPI = "https://api.github.com/users"
// "https://v2.jokeapi.dev/joke/Any"
// https://quotes15.p.rapidapi.com/quotes/random/

async function getAllTweets() {
	const url = 'https://api.restful-api.dev/objects?id=3&id=5&id=10'
	const options = {
		method: 'GET'
	}
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		return result
	} catch (error) {
		console.error(error);
	}
}

async function getTweet() {
const url = 'https://api.restful-api.dev/objects/ff808181882dda2801882e089cb10021';
const options = {
	method: 'GET'
}
try {
	const response = await fetch(url, options);
	const result = await response.text();
	// console.log(result);
    return result
} catch (error) {
	console.error(error);
}
}

async function postTweet() {
	const url = "https://api.restful-api.dev/objects"
	const option = {
		method: "POST",
		body: JSON.stringify({
		  "name": "Tweet 1",
		  "data": {
			 "tweet_text": "This is a sample tweet",
			 "Account_handle": "This is some handle"
		  }
	   }),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
	  }
	const response = await fetch(url, option )
	const json = await response.json()
	return json
}

async function updateTweet() {
	const url = "https://api.restful-api.dev/objects/ff808181882dda2801882e089cb10021"
	const option = {
		method: "PUT",
		body: JSON.stringify({
		  "name": "Tweet 1",
		  "data": {
			 "tweet_text": "This is a updated sample tweet",
			 "Account_handle": "This is some handle"
		  }
	   }),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
	  }
	const response = await fetch(url, option )
	const json = await response.json()
	return json
}




// promise, arrow function, currying, closure

// //API key 299HIbf4EpM8vv1xcuqxoGePn
// // API secret lXBS3Oa3BsF0tX3uzQFNObOOOVdrBmeVsNIs8APhPuAxPYZQwz
// // Bearer AAAAAAAAAAAAAAAAAAAAAOkLngEAAAAAcoDLW%2BRhcJT3g8GaHcdhcy7UF%2Bc%3Dl3iovUbjnpdiyhashZ2AljbA75I3SVFcJRw2cqPguygrPsZJyU
// // access token 1487651318982316033-QnGpyjLn9LEh4NjIziabw6hrcod9WS
// // Access secret Y2MonNwQwCPRbgXFFJKMcszgGnYRyX732aOQQY3LNmKOj

// const TWITTER_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAOkLngEAAAAAcoDLW%2BRhcJT3g8GaHcdhcy7UF%2Bc%3Dl3iovUbjnpdiyhashZ2AljbA75I3SVFcJRw2cqPguygrPsZJyU"
// const baseTwitterSearchUrl = 'http://api.twitter.com/2/search/recent';
// const defaultFetchOptions = {
//     method: 'GET',
//     headers: {
//         'Authorization': `Bearer ${TWITTER_BEARER_TOKEN}`,
//         'Access-Control-Allow-Headers': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
//         "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
//     },
//     params:  {"query": `from:Twitter`, "max_results": 10,},
// };

// const getNonRetweetedTweetsByKeywordsAndDate = async (keywords, dateSince = new Date()) => {
//     const response = await fetch(`${baseTwitterSearchUrl}`, defaultFetchOptions);
//     const responseJson = await response.json();
//     return responseJson.statuses;
// };

// const res =  getNonRetweetedTweetsByKeywordsAndDate("module")




// {
//     "data": {
//         "entities": {
//                     "title": "How to analyze the sentiment of your own Tweets",
//                     "description": "This post helps developers try out sentiment analysis by analyzing their own past Tweets."             
//         },
//         "text": "Learn how to create a sentiment score for your Tweets with Microsoft Azure, Python, and Twitter Developer Labs recent search functionality.\nhttps://t.co/IKM3zo6ngu"
//     }
// }
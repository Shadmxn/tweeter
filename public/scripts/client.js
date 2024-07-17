console.log("client.js is loaded");

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

console.log("Data:", data);

const createTweetElement = function(tweet) {
  console.log("Creating tweet element for:", tweet);
  const $tweet = $(`
    <article class="tweet">
      <header>
        <div class="user-info">
          <img src="${tweet.user.avatars}" alt="user avatar">
          <span class="user-name">${tweet.user.name}</span>
          <span class="user-handle">${tweet.user.handle}</span>
        </div>
      </header>
      <div class="tweet-content">
        <p>${tweet.content.text}</p>
      </div>
      <footer>
        <span class="tweet-time">${tweet.created_at}</span>
        <!-- you might have other footer details here -->
      </footer>
    </article>
  `);
  console.log("Created tweet element:", $tweet);
  return $tweet;
};

const renderTweets = function(tweets) {
  console.log("Rendering tweets:", tweets);
  $('#tweets-container').empty();

  tweets.forEach(tweet => {
    console.log("Tweet object:", tweet);
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  });
};

renderTweets(data);
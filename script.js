let affirmations = ["hi", "bye", "cool", "baby", "love", "world"];

var quoteElement;
var quoteButtonElement;

window.addEventListener('DOMContentLoaded', (event) => {
  quoteElement = document.getElementById('mainQuote');
  quoteButtonElement = document.getElementById('quoteButton');
  quoteButtonElement.addEventListener('click', setRandomQuote);
  setRandomQuote();
});

function setRandomQuote() {
  var randomQuoteIndex = Math.floor(Math.random() * affirmations.length);
  quoteElement.innerText = affirmations[randomQuoteIndex];
}

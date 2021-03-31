let affirmations = ["thank you for existing", "you are part of a light so bright",
"live today for you", "take things one step at a time", "you are doing great", "i am proud of you",
"be kinder than necessary", "deep breaths!", "you are enough", "it's just a bad day, not a bad life",
"what's meant to be will always find its way", "you are worthy of love", "your value is not based on your productivity", "stay close to people who feel like sunshine",
"self love isn't selfish", "better days are coming", "the best is yet to come", "it's okay to not be okay", "hang in there", "go at your own pace"];

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

const quotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The future starts today, not tomorrow. - Pope John Paul II",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The future depends on what you do today.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't be afraid to start over. It's a chance to rebuild and make things better.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only person you should try to be better than is the person you were yesterday.",
    "Dream big and dare to fail.",
    "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
    "Success is not overnight. It's when every day you get a little better than the day before. It all adds up.",
    "The secret of getting ahead is getting started.",
    "Your life does not get better by chance. It gets better by change.",
    "The best revenge is massive success.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe you can and you're halfway there.",
    "The biggest risk is not taking any risk.",
    "Success is not just about making money. It's about making a difference.",
    "You are never too old to set another goal or to dream a new dream.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "You don't have to be great to start, but you have to start to be great.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    "The starting point of all achievement is desire.",
    "The best way to predict the future is to create it. - Peter Drucker"

];

let currentQuoteIndex = 0;
const quoteTextElement = document.getElementById("quote-text");

function displayQuote() {
  const quote = quotes[currentQuoteIndex];
  quoteTextElement.textContent = quote;
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  displayQuote();
}

function prevQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
  displayQuote();
}

displayQuote();

const quotes = [
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "No act of kindness, no matter how small, is ever wasted. - Aesop",
    "Life is what happens when you're busy making other plans. - Allen Saunders",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    // Add more quotes here...
  ];
  
  const quoteBtn = document.getElementById('quoteBtn');
  const quoteDisplay = document.getElementById('quoteDisplay');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = randomQuote;
  }
  
  quoteBtn.addEventListener('click', generateRandomQuote);

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const [quote, author] = randomQuote.split(' - ');
    quoteDisplay.innerHTML = `<span class="quote">${quote}</span> <span class="author">-${author}</span>`;
  }
  
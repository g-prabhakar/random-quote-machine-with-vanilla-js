const quotes = {
    quotes: [],
    randomIndex: null
}

const text = document.querySelector('#text')
const author = document.querySelector('#author')
const btn = document.querySelector('button')


function generateRandomQuote() {
    fetch(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
    .then(response => response.json())
    .then(data => quotes.quotes = data.quotes)
}

function randomQuote() {
   
    quotes.randomIndex = Math.floor(Math.random() * quotes.quotes.length)
    text.textContent = quotes.quotes[quotes.randomIndex].quote
    author.textContent = quotes.quotes[quotes.randomIndex].author
    
}

generateRandomQuote()

btn.addEventListener('click', randomQuote)



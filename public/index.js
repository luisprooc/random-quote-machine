const textCite = document.getElementById("text");
const authorCite = document.getElementById("author");

document.addEventListener("DOMContentLoaded",()=>{
    requestQuote();
});

function requestQuote(){
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(res => res.json())
        .then(res => chooseQuote(res.quotes))
        .catch(console.log)
}

function chooseQuote(quotes){
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    placeQuote(quote);
}

function placeQuote({quote,author}){
    textCite.innerText = quote;
    authorCite.innerText = author;
}
const quoteURL = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';

async function getQuote() {
    const quote = await fetch(quoteURL);
    const quoteJSON = await quote.json();
    const quoteText = quoteJSON.quotes[0].text;
    const quoteAuthor = quoteJSON.quotes[0].author;
    return `"${quoteText}" - ${quoteAuthor}`;
}

async function loadQuote() {
    const quote = await getQuote();
    document.getElementById('example-quote').innerText = quote;
}

window.onload = function() {
    loadQuote();
}


// get data from kanye api
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => diplayQuote(data));
}
const diplayQuote = quote =>{
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}

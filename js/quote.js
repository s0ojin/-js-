const quotes = [
    {
        quote: "One must desire something to be alive.",
        author: "Margaret Deland",
    },
    {
        quote: "You need chaos in your soul to give birth to a dancing star.",
        author: "Friedrich Nietsche",
    },
    {
        quote: "Kites rise highest against the wind - not with it.",
        author: "Sir Winston Churchill",
    },
    {
        quote: "Strong reasons make strong actions.",
        author: "William Shakespeare",
    },
    {
        quote: "If you don't risk anything you risk even more.",
        author: "Erica Jong",
    },
    {
        quote: "The journey is the reward.",
        author: "Steve Jobs",
    },
    {
        quote: "There is no great genius without some touch of madness.",
        author: "Seneca",
    },
    {
        quote: "Respect yourself and others will respect you.",
        author: "Confucius"
    },
    {
        quote: "Genius is nothing but a great capacity for patience.",
        author: "Buffon",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;aaaa
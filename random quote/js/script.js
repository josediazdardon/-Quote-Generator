/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [

   {
    quote:"Far Greater than all the Material Possessions that I Possess is my Freedom to Choose, my Freedom to Live, and my Freedom to be Happy.",
    source: "RVM",
    tag: "happiness"
  },
  { quote: "Always be yourself, there's no one better!",
    source: "Selena Gomez",
    tag: "personal growth"
  },
  {
    quote: "Let every nation know, whether it wishes us well or ill, that we shall pay any price, bear any burden, meet any hardship, support any friend, oppose any foe to assure the survival and the success of liberty.",
    source: " John F.Kennedy",
    citation: "Inaugural Address",
    year: 1961,
    tag: "civil rights"
  },
  {
    quote: "It is an old and ironic habit of human beings to run faster when we have lost our way.",
   source: "Rollo May", 
   tag: "personal growth",
   year: 2015
  },
  {
    quote:"It does me no injury for my neighbor to say there are twenty gods or no God. It neither picks my pocket nor breaks my leg.",
    source: "Thomas Jefferson",
    year: 1782,
    tag: "civil rights"
  },
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote( array ) {
  let randNumber = Math.floor( Math.random() * array.length );
  let randQuote = array[randNumber];
  return randQuote;
}

getRandomQuote(quotes);

  

/***
 * `printQuote` function
***/
function printQuote () {
  let randQuote = getRandomQuote(quotes);
  let quoteHTML = '';
  quoteHTML += `<p class="quote">${randQuote.quote}</p>
  <p class="source">${randQuote.source}`;


// conditionals 
if (randQuote.citation){
  quoteHTML += `<span class="citation">${randQuote.citation}</span>`;
  }
if (randQuote.year){
quoteHTML += `<span class="year">${randQuote.year}</span>`;
}
if (randQuote.tag){
  quoteHTML +=`<span class="tag"><br>${randQuote.tag}</span>`;
}
quoteHTML +=`</p>`;

// return new quote
  return document.getElementById('quote-box').innerHTML = quoteHTML;
}





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
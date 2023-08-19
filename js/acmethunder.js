QUOTES = [
    {
        text: "First things first. But not necessarily in that order.",
        credit: "The Doctor"
    },
    {
        text: "These go to eleven.",
        credit: "Nigel Tufnel"
    },
    {
        text: "They call it a Royale with cheese.",
        credit: "Vincent Vega"
    },
    {
        text: "Wax on, wax off.",
        credit: "Mr. Miyagi"
    },
    {
        text: "I'm not bad. I'm just drawn that way.",
        credit: "Jessica Rabbit"
    },
    {
        text: "Roads? Where we're going we don't need roads.",
        credit: "Doc Brown"
    },
    {
        text: "Why so serious?",
        credit: "The Joker"
    },
    {
        text: "Frankly, my dear, I don't give a damn.",
        credit: "Rhett Butler"
    },
    {
        text: "Language was invented for one reason, boys - to woo women - and, in that endeavor, laziness will not do.",
        credit: "John Keating"
    },
    {
        text: "You see, there are still faint glimmers of civilization left in this barbaric slaughterhouse that was once known as humanity. Indeed that's what we provide in our own modest, humble, insignificant...oh, fuck it.",
        credit: "M. Gustave"
    },
    {
        text: "Martini. Gin, not vodka. Obviously. Stirred for 10 seconds while glancing at an unopened bottle of vermouth.",
        credit: "Eggsy"
    },
    {
        text: "Leave the gun. Take the cannoli.",
        credit: "Peter Celemenza"
    },
    {
        text: "Gentlemen, you can't fight in here. This is a war room!",
        credit: "Dr. Strangelove"
    },
    {
        text: "This is not 'Nam. This is bowling. There are rules.",
        credit: "Walter"
    },
    {
        text: "I know!",
        credit: "Han Solo"
    },
    {
        text: "If I'm not back in five minutes, just wait longer.",
        credit: "Ace Ventura"
    },
    {
        text: "I thought I had mono for an entire year. It turned out I was just really bored.",
        credit: "Wayne Campbell"
    },
    {
        text: "Never do anything out of hunger. Not even eating.",
        credit: "Frank Semyon"
    },
    {
        text: "Life is just like that sometimes, you're hoping for a unicorn ... and you get a goat!",
        credit: "Gru"
    },
    {
        text: "Some people can read War and Peace and come away thinking it's a simple adventure story. Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe.",
        credit: "Lex Luthor"
    },
    {
        text: "Everything before the word 'but' is horseshit.",
        credit: "Jon Snow"
    },
    {
        text: "Mornings are for coffee and contemplation",
        credit: "Jim Hopper"
    },
    {
        text: "When life gives you lemons, just say, 'Fuck the lemons' and bail",
        credit: "Chuck"
    },
    {
        text: "Sherlock Holmes observed that once you have eliminated the impossible then whatever remains, however improbable, must be the answer. I, however, do not like to eliminate the impossible.",
        credit: "Dirk Gently"
    },
    {
        text: "Shaken, not stirred.",
        credit: "Bond, James Bond"
    },
    {
        text: "The greatest trick the devil ever pulled was convincing the world he didn't exist.",
        credit: "Keyser Söze"
    },
    {
      text: "You will refer to me as 'Idiot,' not 'You Captain!'",
      credit: "Lonestar"
    }
];

var working = [];

$(document).ready(function() {
    // let index = Math.floor(Math.random() * QUOTES.length);
    // working = reorder()
    // $('#main-content').append(`<h1>${QUOTES[index].text}</h1>`);
    // $('#main-content').append(`<a href="" target="_blank"><h3>- ${QUOTES[index].credit}</h3></a>`);
    $('#reload-text').click(displayText);
    displayText();
});

function displayText() {
    if (working.length == 0) {
        working = reorder();
    }
    let item = working.pop();
    $('#quote-text').text(item.text);
    $('#credit-text').text(`- ${item.credit}`);
}

function reorder() {
    return shuffle(QUOTES.slice(0))
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

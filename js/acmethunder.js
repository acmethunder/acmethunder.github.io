QUOTES = [
    {
        text: 'First things first. But not necessarily in that order.',
        credit: 'The Doctor'
    },
    {
        text: 'These go to eleven.',
        credit: 'Nigel Tufnel'
    },
    {
        text: 'They call it a Royale with cheese.',
        credit: 'Vincent Vega'
    },
    {
        text: 'Wax on, wax off.',
        credit: 'Mr. Miyagi'
    },
    {
        text: 'I\'m not bad. I\'m just drawn that way.',
        credit: 'Jessica Rabbit'
    },
    {
        text: 'Roads? Where we\'re going we don\'t need roads.',
        credit: 'Doc Brown'
    },
    {
        text: 'Why so serious?',
        credit: 'The Joker'
    },
    {
        text: 'Frankly, my dear, I don\'t give a damn.',
        credit: 'Rhett Butler'
    },
    {
        text: 'Language was invented for one reason, boys - to woo women - and, in that endeavor, laziness will not do.',
        credit: 'John Keating'
    },
    {
        text: 'You see, there are still faint glimmers of civilization left in this barbaric slaughterhouse that was once known as humanity. Indeed that\'s what we provide in our own modest, humble, insignificant...oh, fuck it.',
        credit: 'M. Gustave'
    }
];

$(document).ready(function() {
    let index = Math.floor(Math.random() * QUOTES.length);
    $('#main-content').append(`<h1>${QUOTES[index].text}</h1>`);
    $('#main-content').append(`<h3>- ${QUOTES[index].credit}</h3>`);
});

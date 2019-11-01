var quotes = [
    'Being over seventy is like being engaged in a war. All our friends are going or gone and we survive amongst the dead and the dying as on a battlefield.',
    'The soldier above all others prays for peace, for it is the soldier who must suffer and bear the deepest wounds and scars of war.',
    'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.',
    'Do not go where the path may lead, go instead where there is no path and leave a trail',
    'Communism has never come to power in a country that was not disrupted by war or corruption, or both.',
    'The time to repair the roof is when the sun is shining.',
    'I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.',
    'Do not go where the path may lead, go instead where there is no path and leave a trail.'
]

document.getElementById('quoteDisplay').innerHTML = quotes[2];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

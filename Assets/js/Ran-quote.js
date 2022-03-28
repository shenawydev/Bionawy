const quotes = ["When something is important enough, you do it even if the odds are not in your favor."
, "Life is too short for long-term grudges." , "I think you should always bear in mind that entropy is not on your side."
, "Stay hungry, stay foolish." , "It's not a faith in technology. It's faith in people." , "Things don't have to change the world to be important."
];

let q = document.querySelector("p.qoute-space");

setInterval(function() {
q.innerHTML = quotes[Math.floor(Math.random()*quotes.length)]
}, 100000);
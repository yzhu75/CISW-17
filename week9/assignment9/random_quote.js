// random quotes

const quotes = [
    "I'm Ready, I'm Ready, I'm Ready! - SpongeBob SquarePants",
    "Is Mayonnaise an Instrument? - Patrick Star",
    "The Inner Machinations of My Mind Are an Enigma. - Patrick Star",
    "I Don't Need It. I Don't Need It. I DEFINITELY Don't Need It... I NEED IT! - SpongeBob Squarepants" ,
    "It's Called the Ugly Barnacle. Once There Was an Ugly Barnacle. He Was So Ugly that Everyone Died. The End. - Patrick Star",
    "You Don't Need a License to Drive a Sandwich. - SpongeBob Squarepants",
    "I Wumbo, You Wumbo, He, She, We Wumbo. Wumboing, Wumbology, the Study of Wumbo! - Patrick Star",
    "I'm a Goofy Goober, Yeah! You're a Goofy Goober, Yeah! We're All Goofy Goobers, Yeah! Goofy, Goofy, Goofy, Goofy Goober, Yeah! - Spongebob & Patrick" ,
    "F is for Friends Who Do Stuff Together, U is for You and Me, N is for Anywhere and Anytime at All! - SpongeBob Squarepants",
    "This is Not Your Average, Everyday Darkness. This is... Advanced Darkness. - SpongeBob Squarepants",
    "It's Just a Cruel Reminder That I'm Single and Likely to Remain That Way Forever. - Squidward Tentacles",
    "I Can't See My Forehead! - Patrick Star",

    
];

// Pick a random number between 0 and the length of quotes
let x = Math.floor(Math.random() * quotes.length);

// log quote to console
console.log(quotes[x]);

// Add the quote to the page
document.getElementById("quote").innerHTML = quotes[x];
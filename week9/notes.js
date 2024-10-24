// JavaScript 

// Firt JavaScript program
// Print "Hello, World!" to the console

console.log("Hello, world!");

// Ways to call JS
// Put in a separate file
// <script src="script.js" defer></script>

// Use a script tag
// <script></script>

// Variables 
let firstName = "Steve";
console.log(firstName); // Steve

let steveAge = 27;
console.log(steveAge);

let bertha_age = 18;
console.log(bertha_age);

if (bertha_age > 17){
    console.log("you can see movie");
}else{
    console.log("You cannot see the movie because your age is not the age that is allowed to go and watch this movie becaue you are younger than expected and therefore we cannot be liable for letting you to see the movie that you should not be watching in the first place")
}

if (bertha_age <= 17){
    console.log("You cannot see the movie because your age is not the age that is allowed to go and watch this movie becaue you are younger than expected and therefore we cannot be liable for letting you to see the movie that you should not be watching in the first place")
}

// Arrays

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "rebeccapurple",
    "violet"
  ];

//0 Indexed
// ["red", "orange", "yellow"]
//    0       1         2

// Pick a random number between 0 - 6
// Math.random() Gives a number between 0 and 1
// Math.floor() rounds down (ceil rounds up)
let x = Math.floor(Math.random() * 6);
//Display the chosen color

console.log("You chose " + colors[x])

document.body.style.background = colors[x];
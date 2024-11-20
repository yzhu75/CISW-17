// kaboom.js

/*
* Create JS that place a random bomb icon on the page that goes kaboom when you mouseover 
* create a variable for the bomb 
* positition absolute, random top and left, 64px fontsize, back, 
* use the appendchild to palce it on the page 
*/

const kaboom = document.createElement("div");
kaboom.innerHTML = "💣";
kaboom.style.position = "absolute";
kaboom.style.top = Math.floor(Math.random()*400) + "px";
kaboom.style.left = Math.floor(Math.random() * 450) + "px";
kaboom.style.fontSize = "64px";
document.body.appendChild(kaboom);

function makeKaboom(){
    console.log("Mouseover")
    document.body.style.background = "dodgerblue";
    document.body.innerHTML = "<h1>You goboom!!!! 💥</h1>";
}

kaboom.addEventListener("mouseout", makeKaboom);
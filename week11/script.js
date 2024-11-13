let message;


const today = new Date();
const month = today.getMonth();
const day = today.getDate();
const year = today.getFullYear();


document.getElementById("date").innerHTML = month + 1 + "/" + day + "/" + year;


const bday = new Date(1997, 11, 12);
const bd_month = bday.getMonth();
const bd_day = bday.getDate();
const imgElement = document.getElementById('emoji');


if ( month == bd_month && day == bd_day ) {
    message = "Happy Birthday!"
    document.getElementById("message").innerHTML = "Happy Birthday!";
    document.getElementById("today").innerHTML = "Your birthday is ";
    imgElement.src = 'happy.webp';
} else {
    document.getElementById("message").innerHTML = "It's not your birthday yet.";
    imgElement.src = 'sad-emoji.png';
}

console.log(message);
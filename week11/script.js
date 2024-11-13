const today = new Date();
const month = today.getMonth();
const day = today.getDate();
const year = today.getFullYear();

const bday = new Date(1997, 11, 12);
const bd_month = bday.getMonth();
const bd_day = bday.getDate();
const bd_year = bday.getFullYear();

const todayDate = month + 1 + "/" + day + "/" + year;
const birthDate = bd_month + 1 + "/" + bd_day + "/" + bd_year;

const imgElement = document.getElementById('emoji');

birthdayMsg = "Message";


if ( month == bd_month && day == bd_day ) {
    birthdayMsg = "Happy Birthday!"
    imgElement.src = 'happy.webp';
} else {
    birthdayMsg = "It's not your birthday yet."
    imgElement.src = 'sad-emoji.png';
}


document.getElementById("date").innerHTML = todayDate;
document.getElementById("dob").innerHTML = birthDate;
document.getElementById("message").innerHTML = birthdayMsg;
console.log(message);
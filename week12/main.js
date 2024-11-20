
keycode = document.getElementById("keycodes");
function logKeycode(e){
    console.log("You pressed: ", e.key,);
    keycode.innerText = "Key: " + e.key + "\n";
    keycode.innerText += "keyCode: " + e.keyCode;
}

document.onkeydown = logKeycode;
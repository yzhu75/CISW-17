function darkMode(e){
    if (e.keyCode == 68){
        console.log("toggled")
        document.body.classList.toggle("darkmode");

    }

    if (e.keyCode == 66){
        console.log("toggled")
        document.body.classList.toggle("hide");
        document.body.classList.toggle("show");

    }
}

document.onkeydown = darkMode;
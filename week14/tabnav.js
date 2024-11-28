//Create a function to switch tabs 

function openSeason(event, season_name){
    let i;
    let tablinks =   document.getElementsByClassName("tablinks");
    let season = document.getElementsByClassName("season");

    for (i = 0; i < season.length; i++){
        season[i].style.display="none";
    }

    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(season_name).style.display = "block";
    event.currentTarget.classList.toggle("current");
}